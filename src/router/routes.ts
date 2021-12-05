import { RouteRecordRaw } from "vue-router";

export const routeNames = {
  landingPage: "Landing Page",
  tasks: "Tasks",
  categories: "Categories",
  settings: "Settings",
  login: "Login",
};

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: routeNames.landingPage,
    component: () => import("@/views/LandingPageView.vue"),
    meta: {
      guest: true,
      authenticated: true,
    },
  },
  {
    path: "/tasks",
    name: routeNames.tasks,
    component: () => import("@/views/TasksView.vue"),
    meta: {
      authenticated: true,
      guest: false,
      layout: "main",
    },
  },
  {
    path: "/categories",
    name: routeNames.categories,
    component: () => import("@/views/LandingPageView.vue"),
    meta: {
      authenticated: true,
      guest: false,
      layout: "main",
    },
  },
  {
    path: "/settings",
    name: routeNames.settings,
    component: () => import("@/views/LandingPageView.vue"),
    meta: {
      authenticated: true,
      guest: false,
      layout: "main",
    },
  },
  {
    path: "/login",
    name: routeNames.login,
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
