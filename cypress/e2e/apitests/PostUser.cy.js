/// <reference types = "Cypress" />

const dataJson = require('../../fixtures/createUser.json')

describe('POST user request', () =>{

    let accessToken = "3f59caedf8a2cb08157ae844c83ea2640b96c961aa792b5a30aad4ff5b5a2800"
    let randomText = ""
    let testEmail = ""

    it('Create user test', () => {

        var pattern = "jagajhfsjfajghislgsbfaytytsolgjkjvhgfshwtyuogfkgjdfhjss"
        for (var i = 0; i < 10; i++)
        randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + "@gmail.com"

        //1. create user (POST call)
        cy.request({
            method: "POST",
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': "Bearer " + accessToken
            },
            body:{
                "name":dataJson.name,
                "gender":dataJson.gender,
                "email":testEmail,
                "status":dataJson.status
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.data.email).to.eq(testEmail)
            expect(res.body.data.name).to.eq(dataJson.name)
            expect(res.body.data.gender).to.eq(dataJson.gender)
            expect(res.body.data.status).to.eq(dataJson.status)
            }).then((res) => {
                const userId = res.body.id
                cy.log("user id is " + userId)
                //2. get user (GET call)
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v1/users/'+userId,
                    headers: {
                        'Authorization' : "Bearer " + accessToken
                      }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(userId)
                    expect(res.body.email).to.eq(testEmail)
                    expect(res.body.name).to.eq(dataJson.name)
                    expect(res.body.gender).to.eq(dataJson.gender)
                    expect(res.body.status).to.eq(dataJson.status)
                    })
            })
    })

})