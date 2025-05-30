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

```
pnpm add vue-router
```

![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250529203809.png)

创建如上目录，内容如下

main.ts
```
import { createApp } from "vue";

import "./style.css";

import App from "./App.vue";

import router from "./router";

  

const app = createApp(App);

app.use(router);

app.mount("#app");
```

App.vue
```
<template>

<router-view />

</template>

  

<style></style>
```

layout.vue

```
<script setup lang="ts">

</script>

  
<template>
<router-view v-slot="{ Component }">

<component :is="Component" />


</router-view>
</template>

```

router/index.ts
```
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
```
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
```
<script setup lang="ts"></script>

  

<template>

<div>home</div>

<RouterLink to="/tools">Go to Tools</RouterLink>

</template>

```
运行，可以看到跳转

## 2.添加状态管理pinia
```
pnpm add pinia
```
![image.png](https://cdn.jsdelivr.net/gh/jswangtao/imgsbed/posts/20250530165948.png)

store/index.ts
```
import { createPinia } from "pinia";

const store = createPinia();

export { store };
```
store/modules/demo.ts
```
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
```
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
