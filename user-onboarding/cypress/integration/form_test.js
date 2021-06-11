describe('test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    const input = {
        name: () => cy.get('#name'),
        email: () => cy.get('#email'),
        password: () => cy.get('#password'),
        tos: () => cy.get('#tos')
    };

    it('elements', () => {
        input.name().should('exist')
        input.email().should('exist')
        input.password().should('exist')
        input.tos().should('exist')
    });
    
    it('text input', () => {
        input.name()
        .type('12345')
        .should('have.value', '12345')
    });

    it('email input', () => {
        input.email()
        .type('12345')
        .should('have.value', '12345')
    });

    it('password input', () => {
        input.password()
        .type('12345')
        .should('have.value', '12345')
    });

    it('click', () => {
        input.tos()
        .click()
        .should('have.value', 'on')
    });

    describe('validation', () => {
        it('name validation', () => {
            input.name()
            .should('have.text', '')
            cy.get('input[type=submit]')
            .should('be.disabled')
        });

        it('email validation', () => {
            input.email()
            .should('have.text', '')
            cy.get('input[type=submit]')
            .should('be.disabled')
        });

        it('password validation', () => {
            input.password()
            .should('have.text', '')
            cy.get('input[type=submit]')
            .should('be.disabled')
        })
    })

})