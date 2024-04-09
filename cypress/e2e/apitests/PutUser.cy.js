/// <reference types = "Cypress" />

//const dataJson = require('../../fixtures/createUser.json')

describe('POST user request', () =>{

    let accessToken = "3f59caedf8a2cb08157ae844c83ea2640b96c961aa792b5a30aad4ff5b5a2800"
    let randomText = ""
    let testEmail = ""

    it('Create user test', () => {

        var pattern = "jagajhfsjfajghislgsbfaytytsolgjkjvhgfshwtyuogfkgjdfhjss"
        for (var i = 0; i < 10; i++)
        randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + "@gmail.com"

        //1. Create user (POST call)
        // cy.request({
        //     method: "POST",
        //     url: 'https://gorest.co.in/public/v2/users',
        //     headers: {
        //         'Authorization': "Bearer " + accessToken
        //     },
        //     body:{
        //         "name":"Test Automation Srinivas",
        //         "gender":"male",
        //         "email":"test.test4477@gmail.com",
        //         "status":"active"
        //     }
        // }).then((res) => {
        //     cy.log(JSON.stringify(res))
        //     expect(res.status).to.eq(201)
        //     expect(res.body.email).to.eq('test.test4477@gmail.com')
        //     expect(res.body.name).to.eq('Test Automation Srinivas')
        //     expect(res.body.gender).to.eq('male')
        //     expect(res.body.status).to.eq('active')
        //     }).then((res) => {
        //         const userId = res.body.data.id
        //         cy.log("user id is " + userId)
                //2. Update user (PUT call)
                cy.request({
                    method: 'PUT',
                    url: 'https://gorest.co.in/public/v2/users/6827122',
                    headers: {
                        'Authorization' : "Bearer " + accessToken
                      },
                    body:{
                        "name":"Test Automation Srinivas Updated",
                        "gender":"male",
                        "email":"test.updated@gmail.com",
                        "status":"inactive"
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(6827122)
                    expect(res.body.email).to.eq('test.updated@gmail.com')
                    expect(res.body.name).to.eq('Test Automation Srinivas Updated')
                    expect(res.body.gender).to.eq('male')
                    expect(res.body.status).to.eq('inactive')
                }).then((res) => {
                    cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/6827122',
                    headers: {
                        'Authorization' : "Bearer " + accessToken
                      }
                    }).then((res) =>{
                        expect(res.status).to.eq(200)
                        expect(res.body.id).to.eq(6827122)
                        expect(res.body.email).to.eq('test.updated@gmail.com')
                        expect(res.body.name).to.eq('Test Automation Srinivas Updated')
                        expect(res.body.gender).to.eq('male')
                        expect(res.body.status).to.eq('inactive')
                    })
                })
        })

    })
//})