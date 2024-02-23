describe("Battle of Monsters E2E tests", () => {
  it("should load the page then select a monster and request the winner", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h1").contains("Battle of Monsters");

    cy.get("h2").contains("Loading...");

    cy.get("h2").contains("Select your monster");

    cy.get("input").each((input, index) => {
      cy.wrap(input).should("have.value", `monster-${index + 1}`);
    });

    cy.get("input").eq(0).should("have.value", "monster-1").parent().click();

    cy.get("p").contains("Dead Unicorn");
    cy.get("[data-testid='cypress-selected-computer']").should("exist");

    cy.get("button").contains("Start Battle").click();
    cy.get("[data-testid='cypress-winner']").should("exist").contains("wins!");

    cy.get("input").eq(1).should("have.value", "monster-2").parent().click();

    cy.get("p").contains("Old Shark");
    cy.get("[data-testid='cypress-selected-computer']").should("exist");

    cy.get("button").contains("Start Battle").click();
    cy.get("[data-testid='cypress-winner']").should("exist").contains("wins!");
  });
});

export {}