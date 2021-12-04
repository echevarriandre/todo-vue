import { mount } from "@cypress/vue";
import LoginView from "@/views/LoginView.vue";

// Doesn't work because of pinia not being instantiated
describe("Login", () => {
  it("Loads Page", () => {
    mount(LoginView);
    cy.get("h1").should("contain", "Login");
  });

  it("login", () => {
    mount(LoginView);
    cy.get("h1").should("contain", "Login");
    // cy.get("")
  });
});
