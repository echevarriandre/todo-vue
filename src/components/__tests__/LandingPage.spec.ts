import { mount } from "@cypress/vue";
import LandingPageView from "@/views/LandingPageView.vue";

describe("LandingPage", () => {
  it("renders properly", () => {
    mount(LandingPageView);
    cy.get("h1").should("contain", "Landing Page");
  });
});
