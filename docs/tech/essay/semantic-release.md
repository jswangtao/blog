---
title: GitHub + NPM 的自动化发版【Semantic Release 详细教程】
tags:
  - 技术笔记
  - 技术随笔
categories:
  - 技术笔记
---

# GitHub + NPM 的自动化发版【Semantic Release 详细教程】

## 前言

喜欢开源公共库或者公司里面有那种公共包的需求，经常涉及到发版，繁琐的发版流程让人很头疼，本文将介绍如何使用 semantic-release 自动化发版，针对 GitHub + NPM 的自动化发版，公司私库可以参考，只是NPM那些步骤要根据自己平台来，比如nexus等。

## 繁琐的发版流程

1. 修复 bug
2. 书写 CHANGE_LOG.md
3. 升级版本：修改 package.json 的 version 字段，v1.0.0 -> v1.0.1
4. git commit 代码
5. git 打版本 tag（v1.0.0 -> v1.0.1）
6. 发布 npm 包（npm login > npm publish）
7. github Releases 发布新版本内容（新增 Releases， 编写内容，发布）

## semantic-release 是什么？

semantic-release是一个全自动的版本管理和发布工具。它通过分析 commit 信息，从而自动完成：确认下一个版本号、修改版本、打tag 、修改变更日志、自动发布等一系列流程。

所以，`commit信息` 很关键，需要遵循以下原则：

示例：当前版本是 v1.0.0

- fix: xxxx ,三级版本号自动加1，v1.0.0 --> v1.0.1
- feat: xxxx , 二级版本号自动加1，v1.0.0 --> v1.1.0
- perf:xxx | BREAKING CHANGE:xxx, 一级版本号自动加1，v1.0.0 --> v2.0.0，核心是有BREAKING CHANGE这个标识就会触发大版本更新

更多规范参考：[Angular Commit Message Format](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fangular%2Fangular%2Fblob%2Fmain%2FCONTRIBUTING.md%23-commit-message-format "https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format") ,注意，除了以上类型，其他类型不会触发 release 流程。

## 本地安装

本文将使用 github + semantic-release 的方式完成自动化。当然，你也可以使用其他方式，例如 gitlab CICD

### 1. 仓库中安装 semantic-release

```shell
pnpm add -D semantic-release @semantic-release/changelog @semantic-release/git @semantic-release/github @semantic-release/npm @semantic-release/release-notes-generator
```

### 2. 根目录下，新建 .releaserc.js 文件

```javascript
module.exports = {
  branches: ['main'], // 指定在哪个分支下要执行发布操作
  plugins: [
    '@semantic-release/commit-analyzer', // 解析 commit 信息，默认就是 Angular 规范
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md', // 把发布日志写入该文件
      },
    ],
    '@semantic-release/npm', // 发布到NPM
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'], // 前面说到日志记录和版本好是新增修改的，需要 push 回 Git
        message: 'chore: ${nextRelease.version} [skip ci]',
      },
    ],
  ],
}

```

### 3. 配置 Github action

根目录下新建一个 .github/workflows/release.yml 文件，内容如下：

```yaml
name: Release

# 当 main 分支被 push,就会触发
on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest

    steps:
      - name: 签出代码
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          persist-credentials: false

      - name: 安装 pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 8

      - name: 安装 nodejs
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: pnpm

      - name: 安装依赖
        run: pnpm install --no-frozen-lockfile

      - name: 构建 dist # 构建，根据自己的仓库构建命令来
        run: |
          pnpm run build

      - name: 发布 npm 包
        run: |
          npm cache clean --force
          npx semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}


```

## 获取 TOKEN

要想通过 workflow 自动发布 npm 版本和提交版本变更信息，还需要去获得两个 TOKEN。

- `GITHUB_TOKEN`：授权后，能提交代码、打 tag、生成 变更信息。
- `NPM_TOKEN`：授权后，不需要手动登录就能自动发布 npm 包。

### NPM_TOKEN获取流程

输入 [www.npmjs.com/](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2F "https://www.npmjs.com/") ，登录你的 npm 账号后，点击头像，选择 Access Tokens。

然后选择创建 `Classic Token`

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250610210025.png)


创建页面，输入名称，选择 `Publish`

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250610210049.png)


创建成功，将 token `复制并记录起来！后面要用到`。

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250610210115.png)


> 如果你不想所有 npm 包都有权限，你还可以通过创建 Granular Access Token，更加细粒度的控制放开权限。

### GITHUB_TOKEN 获取流程

登录 github 点击头像 》 选择 `Settings` 》 选择 `Developer settings`。

选择 `Generate new token`

> semantic-release 需要用到 github 仓库的读写权限，个人感觉 github 仓库的读写权限很敏感，最好别都放开。所以我这里创建一个只对某个仓库生效的 token.

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250610210152.png)


创建页面-基础

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250610211037.png)


修改完成后，点击创建。

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250610211133.png)


创建成功，将 token `复制并记录起来！后面要用到。`

## github 仓库配置

OK, 上面我们拿到了两个 token, 分别是 npm 创建的 token 和 github 创建的 token。接下来，我们需要将这两个 token 添加到你的 github 仓库的 `secrets` 里，这样，在运行 CI 流水线的时候，就能安全的读取到这两个 token。

### 配置 secrets

在目标仓库下，点击 Settings

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250610211341.png)


创建好如下两个 secrets：

- `GITHUB_TOKEN` ：Name 别改，然后将之前在 github 创建好的 token 填进去。
- `NPM_TOKEN`：Name 别改，然后将之前在 npm 创建好的 token 填进去。
也可以不配置GITHUB_TOKEN，因为GitHub actions会自动生成临时的

> 这里创建好的名称和 .github/workflows/release.yml 用到的名称要一致。如下


## 调试

如果你还在开发阶段，不确定配置能否在 github action 中正常运行，为了避免触自动发发版。我们可以使用 `dryRun` 模式。这个模式下将自动跳过发布、推送等动作，只校验配置是否正确，推送是否有权限。

.releaserc.js

json

代码解读

复制代码

`{     dryRun: true // 记得一切没问题后，设置为 false ！！！ }`

如果我们还没准备好，只是想调试和测试 CI 运行是否正常，可临时添加这个配置，避免发版。

[cli](https://github.com/catpawx/cli) 这个是本次演示的仓库，里面有完整的配置，可以自行参考。