const userName= Cypress.env('userName')
const password= Cypress.env('password')

describe('Login de usuarios de ALURAPIC', () => {

    
    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com');
    })

    it('fazer login de usuario valido', () => {
        cy.login(userName, password)
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuario invalido', () => {
        cy.login('pedro', '1234')
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Invalid user name or password')
        })
    })


})
