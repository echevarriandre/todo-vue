export {};

declare module "vue-router" {
  interface RouteMeta {
    guest?: boolean;
    layout?: string;
    authenticated?: boolean;
  }
}
