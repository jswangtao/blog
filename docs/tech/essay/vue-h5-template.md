---
title: vue-h5模板搭建
tags:
  - 技术笔记
  - 技术随笔
categories:
  - 技术笔记
---

# vue-h5模板搭建

## 1. 创建项目

```bash
pnpm create vite
```

选vue和 ts,然后安装依赖

## 2.添加路由router

```bash
pnpm add vue-router
```

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250529203809.png)

创建如上目录，内容如下

main.ts
```typescript
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
```

App.vue
```vue
<template>
  <router-view />
</template>

<style></style>
```

layout.vue
```vue
<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
```

router/index.ts
```typescript
import {
  createRouter,
  createWebHashHistory,
  type RouteLocationNormalized,
} from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
```

router/routes.ts
```typescript
import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "主页",
        },
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具",
        },
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "关于",
          noCache: true,
        },
      },
    ],
  },
];

export default routes;
```

views下面做三个基础的文件，在加上
```vue
<script setup lang="ts"></script>

<template>
  <div>home</div>
  <RouterLink to="/tools">Go to Tools</RouterLink>
</template>
```

运行，可以看到跳转

## 3.添加状态管理pinia
```bash
pnpm add pinia
```

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250530165948.png)

store/index.ts
```typescript
import { createPinia } from "pinia";

const store = createPinia();

export { store };
```

store/modules/demo.ts
```typescript
import { defineStore } from "pinia";
import { store } from "@/store";

export const useDemoStore = defineStore("demo", {
  state: () => ({
    count: 1,
    name: "demo",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export const useDemoStoreHook = () => {
  return useDemoStore(store);
};
```

home页面组件
```vue
<template>
  <div>home</div>
  <RouterLink to="/tools">Go to Tools</RouterLink>
  <div>{{ demoStore.count }}</div>
  <div>{{ demoStore.doubleCount }}</div>
  <button @click="demoStore.increment()">增加</button>
</template>

<script setup lang="ts">
import { useDemoStore } from "@/store/modules/demo";
const demoStore = useDemoStore();
</script>
```

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250530170133.png)

## 4. 添加UI组件库 vant
```bash
pnpm add vant
pnpm add @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import -D
```

在vite.config.ts中添加
```typescript
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

plugins: [
  AutoImport({
    dts: "src/types/auto-imports.d.ts",
    resolvers: [VantResolver()],
  }),
  Components({
    dts: "src/types/components.d.ts",
    resolvers: [VantResolver()],
  }),
],
```

利用自动导入方法和自动组件注册，这样就可以无须手动导入，直接使用

## 5. 添加移动端适配方案和各种样式
```bash
pnpm add postcss-px-to-viewport-8-plugin -D
```

添加配置文件postcss.config.cjs
```javascript
module.exports = () => {
  return {
    plugins: {
      "postcss-px-to-viewport-8-plugin": {
        unitToConvert: "px", // 需要转换的单位，默认为"px"
        // viewportWidth: 375, // 设计稿的视口宽度
        viewportWidth: function (file) {
          return file && file.includes("node_modules/vant") ? 375 : 750;
        },
        unitPrecision: 5, // 单位转换后保留的精度
        propList: ["*"], // 能转化为vw的属性列表,!font-size表示font-size后面的单位不会被转换
        viewportUnit: "vw", // 希望使用的视口单位
        fontViewportUnit: "vw", // 字体使用的视口单位
        // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
        // 下面配置表示类名中含有'keep-px'都不会被转换
        selectorBlackList: ["keep-px"],
        minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
        mediaQuery: false, // 媒体查询里的单位是否需要转换单位
        replace: true, // 是否直接更换属性值，而不添加备用属性
        // exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
        include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
        landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        landscapeUnit: "vw", // 横屏时使用的单位
        landscapeWidth: 1338, // 横屏时使用的视口宽度
      },
    },
  };
};
```

添加less,unocss,normalize.css
```bash
pnpm add normalize.css
pnpm add less unocss -D
```

在main.js中添加
```javascript
// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "@/styles/index.less";
// 引入unocss css
import "@/plugins/unocss";
```

复制src/styles目录
![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250602153739.png)

vite.config.js中添加
```javascript
import UnoCSS from "unocss/vite";

plugins: [
  UnoCSS(),
],
```

添加uno.config.ts

## 6. 添加路由缓存

添加文件stores/modules/cached-view.ts
```typescript
import { defineStore } from "pinia";
import { store } from "@/store";
import type { toRouteType } from "@/router";

export const useCachedViewStore = defineStore({
  id: "cached-view",
  state: () => ({
    // 缓存页面 keepAlive
    cachedViewList: [] as string[]
  }),
  actions: {
    addCachedView(view: toRouteType) {
      // 不重复添加
      if (this.cachedViewList.includes(view.name as string)) return;
      if (!view?.meta?.noCache) {
        this.cachedViewList.push(view.name as string);
      }
    },
    delCachedView(view: toRouteType) {
      const index = this.cachedViewList.indexOf(view.name as string);
      if (index > -1) {
        this.cachedViewList.splice(index, 1);
      }
    },
    delAllCachedViews() {
      this.cachedViewList = [] as string[];
    }
  }
});

export function useCachedViewStoreHook() {
  return useCachedViewStore(store);
}
```

在router/index.ts中添加
```typescript
router.beforeEach((to: toRouteType, from, next) => {
  // 路由缓存
  useCachedViewStoreHook().addCachedView(to);
  next();
});
```

在layout中添加keep-alive
```vue
<keep-alive :include="cachedViews">
  <component :is="Component" />
</keep-alive>
```

## 7. 添加图标方案

1. 本地图标

    通过vite-plugin-svg-icons自动将指定文件夹下面的给生成图标

```bash
pnpm add -D vite-plugin-svg-icons
```

在main.js中引入
```javascript
// svg icon
import "virtual:svg-icons-register";
```

vite插件plugins列表中添加
```javascript
createSvgIconsPlugin({
  // 指定需要缓存的图标文件夹
  iconDirs: [path.resolve(root, "src/assets/icons")],
  // iconDirs: [path.resolve(root, "src/icons/svg")],
  // 指定symbolId格式
  symbolId: "icon-[dir]-[name]",
}),
```

将svg图标放入src/assets/icons

2. 引入 iconify
```bash
pnpm add -D @unocss/preset-icons @iconify/json
pnpm add @iconify/vue
```

封装一个Icon组件，见demo项目
直接使用