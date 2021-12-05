import { useAuthStore } from "@/stores/auth";
import { createRouter, createWebHistory } from "vue-router";
import { routeNames, routes } from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// User Session Middleware
router.beforeEach((to, from, next): void => {
  const isGuestRoute = to.matched.some((record): boolean | undefined => record.meta.guest);
  const isAuthenticatedRoute = to.matched.some((record): boolean | undefined => record.meta.authenticated);

  const authStore = useAuthStore();

  if (isAuthenticatedRoute && !isGuestRoute && !authStore.token) {
    // Block Guests from accessing protected routes
    next({ name: routeNames.login, query: { redirect: window.location.href } });
  } else if (isGuestRoute && !isAuthenticatedRoute && authStore.token) {
    // Block Users from accessing guest routes
    next({ name: from.name ?? routeNames.tasks });
  } else {
    next();
  }
});

export default router;
