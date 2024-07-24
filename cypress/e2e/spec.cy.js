///<reference types='cypress'/>

import inValidLogin from "../POM/HRM_WS.cy.js"
import passwordUpdate from "../POM/changePassword.cy.js"

//Create Objecct For POM
const InvalidCredLogin = new inValidLogin()
const TheUpdatePasswordWS = new passwordUpdate()

//Before Each This Function Will Be Work
beforeEach('It will be open my ORANG HRM',()=>{
  cy.visit('/web/index.php/auth/login')
  cy.screenshot()
})

afterEach('Message Scenarion Is COmplete', ()=>{
  cy.log('Scenarion Have Passes')
  cy.screenshot()
})

//This command used for the Valid crdential at the login time
describe('My Orange HRM WS Task Only Login With Valid Cred', ()=>{
  it('I will do login with Valid Cred', ()=>{
    
    cy.login('Admin', 'admin123')

  })
})

//This command used for the InValid crdential at the login time

describe('My Orange HRM WS Task Only Login With Invalid Cred', ()=>{
  it('I will do login with Valid Cred', ()=>{
    
     InvalidCredLogin.InValidCredential()

  })
})


//Change Password For The ORANGE HRM of WS

describe('Orange HRM change the password Of WS', ()=>{
  it('Change the password Of Orange HRM', ()=>{

           TheUpdatePasswordWS.UpdatePassword()

  })
})
