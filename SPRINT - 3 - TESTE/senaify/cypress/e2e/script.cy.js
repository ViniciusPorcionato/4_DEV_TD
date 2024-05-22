describe("template spec", () => {
  let musicItem;

  it("passes", () => {
    cy.visit("/");
  });

  it("Visualizar playlists e executar uma música", () => {
    cy.get("[aria-label='title-head']");
    cy.get("[aria-label='title-head']").should("contain", "Good morning");
    cy.get("[aria-label='playlist-item']").first().click();
    cy.get("[aria-label='music-item']").first().click();
    cy.wait(2000);
  });

  it(" Navegar entre playlists e executar outra música", () => {
    cy.get("[data-testid='button-return']").click();
    cy.get("[aria-label='playlist-item']").eq(1).click();
    cy.get("[aria-label='music-item']").first().click();
    cy.wait(2000);
  });

  it("Procurar e favoritar uma música", () => {
    cy.get("[href='/Search']").click();
    cy.scrollTo("top");
    cy.get("[data-testid='campoBusca']").type("blue");

    musicItem = cy.get("[aria-label='music-item']").click();
    musicItem.then((item) => {
      item.find("[data-testid='icon-button-sch']").click();
    });


    // cy.get('[style="margin-top: 15px; padding-bottom: 150px;"] > :nth-child(1) > .r-flexDirection-18u37iz > [data-testid="icon-button"] > .css-text-146c3p1').eq(0).click()
  });
});
