describe("Mercado Libre busca e compra", () => {
  it("should load the page then select a monster and request the winner", () => {
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
});

export {};
