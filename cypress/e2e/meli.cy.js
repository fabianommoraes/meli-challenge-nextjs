import "cypress-real-events";

describe("Mercado Libre busca e compra", () => {
  it("should load the page then search a product and buy it", () => {
    cy.visit("http://localhost:3000/");

    cy.get("input").type("playstation").type("{enter}");

    cy.url().should("contain", "/items?search=playstation");

    cy.get("a").eq(1).click();

    cy.url().should("contain", "/items/MLA1362438311");

    cy.get("button").eq(1).click();

    cy.window()
      .its("console")
      .then((console) => {
        cy.spy(console, "log").as("comprou!");
      });
  });

  it("should load the page then search a product and buy it with a11y navigation", () => {
    cy.wait(500);
    cy.visit("http://localhost:3000/");
    cy.wait(500);

    cy.get("a").focus();
    cy.wait(500);

    cy.realPress("Tab");
    cy.wait(500);

    cy.realType("playstation{enter}");

    cy.url().should("contain", "/items?search=playstation");
    cy.realPress("Tab");
    cy.realPress("Tab");
    cy.realType("{enter}");

    cy.url().should("contain", "/items/MLA1362438311");
    cy.realPress("Tab");
    cy.realType("{enter}");

    cy.window()
      .its("console")
      .then((console) => {
        cy.spy(console, "log").as("comprou!");
      });
  });
});

export {};
