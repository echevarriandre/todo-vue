import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Landing Page",
    component: () => import("@/views/LandingPageView.vue"),
    meta: {
      guest: true,
      authenticated: true,
    },
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import("@/views/TasksView.vue"),
    meta: {
      authenticated: true,
      guest: false,
      layout: "main",
    },
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("@/views/LandingPageView.vue"),
    meta: {
      authenticated: true,
      guest: false,
      layout: "main",
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/LandingPageView.vue"),
    meta: {
      authenticated: true,
      guest: false,
      layout: "main",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      guest: true,
      authenticated: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFoundView.vue"),
    meta: {
      guest: true,
      authenticated: true,
    },
  },
];
