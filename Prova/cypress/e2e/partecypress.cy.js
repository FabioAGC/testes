describe("Cenários de testes para prova parte 1", () => {

     it("Caso: Filtrar com falha -> computador inexistente", () => {

         cy.visit("https://computer-database.gatling.io/computers")
         cy.get('#searchbox').type('asdfghasdfgh')
         cy.get('#searchsubmit').click()
         cy.get('#main > h1').should('contain.text', "No computer")
     })

     it("Caso: Filtra com exito", () => {

         cy.visit("https://computer-database.gatling.io/computers")
         cy.get('#searchbox').type('acer')
         cy.get('#searchsubmit').click()
         cy.get('#main > h1').should('contain.text', "3 computers found")
     })

    it("Caso: Criar computador com sucesso", () => {

        let text = generateComputer()
        cy.visit("https://computer-database.gatling.io/computers")
        cy.get('#add').click()
        cy.get('#name').type(text)
        cy.get('.primary').click()
        cy.get('strong').should('contain.text','Done !')
    })

    it('falha ao adicionar computador', () => {
        cy.visit('https://computer-database.gatling.io/computers');
        cy.get('#add').click();
        cy.get('#name').type('Computador Inválido');
        cy.get('#introduced').type('data-invalida');
        cy.get('#discontinued').type('data-invalida');
        cy.get('#company').select('IBM');
        cy.get('.btn.primary').click();
        cy.get('.error > .input').should('be.visible');
    });

    it('falhar ao editar computador ', () => {
        cy.visit('https://computer-database.gatling.io/computers');
        cy.get('a').contains('ACE').click();
        cy.get('#name').clear().type('Computador Inválido');
        cy.get('#introduced').clear().type('data-invalida');
        cy.get('#discontinued').clear().type('data-invalida');
        cy.get('.btn.primary').click();
        cy.get('.error > .input').should('be.visible');
    });  

})

function generateComputer() {
    let computerName = "dell inspiron 15";
    return computerName 
}
