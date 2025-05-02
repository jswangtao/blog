---
title: Nginx 基础

tags:
  - 后端
  - Nginx
categories:
  - 后端
---

# Nginx 极简教程

> 本项目是一个 Nginx 极简教程，目的在于帮助新手快速入门 Nginx。

## 一、Nginx 简介

**什么是 Nginx?**

**Nginx (engine x)** 是一款是由俄罗斯的程序设计师 Igor Sysoev 所开发高性能的 Web 和 反向代理 服务器，也是一个 IMAP/POP3/SMTP 代理服务器。在高连接并发的情况下，Nginx 是 Apache 服务器不错的替代品。

## 二、Nginx 常用功能

**1、Http 代理，反向代理**

Http 代理，反向代理：作为 web 服务器最常用的功能之一，尤其是反向代理。

这里我给来 2 张图，对正向代理与反向代理做个诠释，具体细节，大家可以翻阅下资料。

![1535725078-5993-20160202133724350-1807373891](https://cdn.jsdelivr.net/gh/WTxiaomage/imgsbed/posts/1535725078-5993-20160202133724350-1807373891.jpg)

Nginx 在做反向代理时，提供性能稳定，并且能够提供配置灵活的转发功能。Nginx 可以根据不同的正则匹配，采取不同的转发策略，比如图片文件结尾的走文件服务器，动态页面走 web 服务器，只要你正则写的没问题，又有相对应的服务器解决方案，你就可以随心所欲的玩。并且 Nginx 对返回结果进行错误页跳转，异常判断等。如果被分发的服务器存在异常，他可以将请求重新转发给另外一台服务器，然后自动去除异常服务器。

**2、负载均衡**

Nginx 提供的负载均衡策略有 2 种：内置策略和扩展策略。内置策略为轮询，加权轮询，Ip hash。扩展策略，就天马行空，只有你想不到的没有他做不到的啦，你可以参照所有的负载均衡算法，给他一一找出来做下实现。

上 3 个图，理解这三种负载均衡算法的实现

![1535725078-8303-20160202133753382-1863657242](https://cdn.jsdelivr.net/gh/WTxiaomage/imgsbed/posts/1535725078-8303-20160202133753382-1863657242-20211127180817411.jpg)

Ip hash 算法，对客户端请求的 ip 进行 hash 操作，然后根据 hash 结果将同一个客户端 ip 的请求分发给同一台服务器进行处理，可以解决 session 不共享的问题。

![1535725078-1224-20160201162405944-676557632](https://cdn.jsdelivr.net/gh/WTxiaomage/imgsbed/posts/1535725078-1224-20160201162405944-676557632.jpg)

**3、web 缓存**

Nginx 可以对不同的文件做不同的缓存处理，配置灵活，并且支持 FastCGI_Cache，主要用于对 FastCGI 的动态程序进行缓存。配合着第三方的 ngx_cache_purge，对制定的 URL 缓存内容可以的进行增删管理。

## 三、Nginx 安装

**1、安装编译工具及库文件**

```
yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
```

**2、首先要安装 PCRE**

> PCRE 作用是让 Nginx 支持 Rewrite 功能。

- 下载 PCRE 安装包，查看最新版： https://sourceforge.net/projects/pcre/files/pcre/

```
cd /usr/local/src/
wget http://downloads.sourceforge.net/project/pcre/pcre/8.45/pcre-8.45.tar.gz
```

- 解压安装包:

```
tar zxvf pcre-8.45.tar.gz
```

- 进入安装包目录

```
cd pcre-8.45
```

- 编译安装

```
./configure && make && make install
```

- 查看 pcre 版本

```
pcre-config --version
```

**3、安装 Nginx**

1. yum 安装

```
替换yum源:
vim /etc/yum.repos.d/nginx.repo
改为:
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
输入:
yum install nginx
检查:
nginx -v
```

> 查看 Nginx 的安装目录

```
rpm -ql nginx
```

> rpm 是 linux 的 rpm 包管理工具，-q 代表询问模式，-l 代表返回列表，这样我们就可以找到 nginx 的所有安装位置了。

输入 nginx -v 检测是否配置成功

## 二、Nginx 入门

配置文件

```
cd /etc/nginx
```

常用到的命令如下：

```batch
nginx								启动
nginx -s stop       快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
nginx -s quit       平稳关闭Nginx，保存相关信息，有安排的结束web服务。
nginx -s reload     因改变了Nginx相关配置，需要重新加载配置而重载。
nginx -s reopen     重新打开日志文件。
nginx -c filename   为 Nginx 指定一个配置文件，来代替缺省的。
nginx -t            不运行，仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。
nginx -v            显示 nginx 的版本。
nginx -V            显示 nginx 的版本，编译器版本和配置参数。
```
