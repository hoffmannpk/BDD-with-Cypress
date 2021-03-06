const URL = 'http://zero.webappsecurity.com/login.html'  //TODO flytta url:en till en konfig fil
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const ERROR_MESSAGE = '.alert-error'

class LoginPage{
    static visit() {
        cy.visit(URL)
    }
    static fillUsername(name) {
        cy.fixture('testdata').then(testdata => {
            cy.get(USERNAME_INPUT).type(testdata.username)
        })
    }
    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password) 
    } 
    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }
    static shouldShowErrorMessage() {
        cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong')
    }
}

export default LoginPage

