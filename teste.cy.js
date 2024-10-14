describe("teste de criação",()=>{
    it("Teste de criação, registro e login", () => {
      cy.visit('http://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
      cy.get('.btn-link').click();
      cy.get('#firstName').type('Vitinho');
      cy.get('#Text1').type('Vitinho');
      cy.get('#username').type('Vitinho');
      cy.get('#password').type('Vitinho');
      cy.get('.btn-primary').click();
      cy.get('.ng-binding').should('contain.text', 'Registration successful');
    });
    
    it.skip("Teste criação de usuario com falha", () => {
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
      cy.get('.btn-link').click();
      cy.get('#firstName').type('Vitinho');
      cy.get('#Text1').type('Vitinho');
      cy.get('#username').type('Vitinho');
      cy.get('#password').type('Vitinho');
      cy.get('.btn-primary').should('be.disabled');
    });
    
    it("Teste de login com sucesso", () => {
      let infos = criarUser();
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
      cy.get('#username').type(infos[0]);
      cy.get('#password').type(infos[1]);
      cy.get('.btn-primary').click();
      
      
    });
    
    function criarUser() {
      let hora = new Date().getHours().toString();
      let minuto = new Date().getMinutes().toString();
      let seg = new Date().getSeconds().toString();
      let ID = hora + minuto + seg + "ID";
      let Senha = hora + minuto + seg + "Senha";
      let infos = [ID, Senha];
    
      cy.visit('http://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
      cy.get('.btn-link').click();
      cy.get('#firstName').type(ID);
      cy.get('#Text1').type(ID);
      cy.get('#username').type(ID);
      cy.get('#password').type(Senha);
      cy.get('.btn-primary').click();
      cy.get('.ng-binding').should('contain.text', 'Registration successful');
      
      return infos;
    }

    it("Teste de delete", () => {
      let infos = criarUser();
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
      cy.get('#username').type(infos[0]);
      cy.get('#password').type(infos[1]);
      cy.get('.btn-primary').click();
      cy.get('.ng-binding > a').click(); //deleta o item pela primeira vez
      cy.get('.ng-binding > a').should('not.exist'); //checa se o item ja foi deletado
      
      
      
    });
    })
  