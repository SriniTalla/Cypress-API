/// <reference types = "Cypress" />

describe('API Automation Test Suite', () => {

let accessToken = "3f59caedf8a2cb08157ae844c83ea2640b96c961aa792b5a30aad4ff5b5a2800";

  it('GET all users test', () => {
    cy.request({
      method: "GET", 
      url: "https://gorest.co.in/public-api/users",
      headers: {
        'Authorization' : "Bearer " + accessToken
      }
    }).as('getAllUsersRequest');
    cy.get('@getAllUsersRequest').then( response => {
        expect(response.status).to.eq(200);
        expect(response.body.meta.pagination.limit).to.eq(10);
        cy.log(JSON.stringify(response.body));
    });
  })

  it('GET user by id test', () => {
    cy.request({
      method: "GET", 
      url: "https://gorest.co.in/public-api/users/6825970",
      headers: {
        'Authorization' : "Bearer " + accessToken
      }
    }).as('getUserByIdRequest');
    cy.get('@getUserByIdRequest').then( response => {
        expect(response.status).to.eq(200);
        expect(response.body.data.name).to.eq("Automation Test");
        cy.log(JSON.stringify(response.body));
    });
  })
})