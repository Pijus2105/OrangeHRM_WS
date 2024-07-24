///<reference types='cypress'/>

export default class inValidLogin{

    
    InValidCredential(){
        

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test123').then((cl)=>{
            cy.get('.oxd-button').click()
            cy.get('.oxd-alert').invoke('text').then((cred)=>{
                cy.log(`Invalid Credential Message :  ${cred}`)

            })
        })
    }
}

