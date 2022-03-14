describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://www.instagram.com/')
    })
  
    it('INSTAGRAM ', () => {
      const text = 'pasasdsadawrod'
      cy.get('[name="username"]').type('something');
      cy.get('[name="password"]').type(text);
      cy.contains('Log In').click();
      cy.contains('Sorry, your password was incorrect. Please double-check your password.')
    })
})