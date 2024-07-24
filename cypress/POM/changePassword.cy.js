///<reference types='cypress'/>


export default class changePassword{

    UpdatePassword(){
        cy.fixture('example.json').then((user)=>{
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username)
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password)
            cy.get('.oxd-button').click()
            cy.get('.oxd-userdropdown-tab').click()
            cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.changePassword)
            cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password)
            cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.changePassword)
            cy.get('.oxd-button--secondary').click()
      
            cy.get('.oxd-toast').invoke('text').then((toaster)=>{
                 cy.log(`Toaster message : ${toaster}`)
            })
            
            cy.get('.oxd-userdropdown-tab').click().then((logout)=>{
              cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
      
            })
            cy.wait(5000)
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username)
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.changePassword)
            cy.get('.oxd-button').click()
      
            cy.get('.oxd-alert').invoke('text').then((invalid)=>{
              cy.log(`Invalid Message Is : ${invalid}`)
            })
            
          })
        
      
    }
}