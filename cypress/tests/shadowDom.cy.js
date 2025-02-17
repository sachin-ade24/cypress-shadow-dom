describe("Shadow DOM test", () => {
  it("Handles Shadow DOM Element: scenario", () => {
    cy.get("#userName")
      .shadow()
      .find("#app2")
      .shadow()
      .find("input")
      .type("Margherita pizza");
  });
});
