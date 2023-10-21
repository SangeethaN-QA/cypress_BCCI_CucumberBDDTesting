import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"

Given('Navigate to the BCCI Website',function(){
    cy.visit("https://www.bcci.tv/")
    cy.url().should('include','tv')
})

When('User can see the BCCI homepage',function() {
    cy.title().should('eq','The Board of Control for Cricket in India')
})

Then("Click on Close icon in advertisement" , function(){
    cy.xpath("//button[@class='close-button page-close']").click()
})

And("User click on Search Icon" , function(){
    cy.get("button#search").click()
})

Then("Enter cricket in search textbox" , function(){
    cy.get("input#searchInputForHeader").type("Cricket")
})

And("Click on Search button" , function(){
    cy.xpath("//button[contains(text(),'Search')]").click()
})


    