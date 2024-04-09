/// <reference types = "Cypress" />

describe('Users array', () => {

    let accessToken = "3f59caedf8a2cb08157ae844c83ea2640b96c961aa792b5a30aad4ff5b5a2800"

    it('GET users array test', () => {
        //1st request: GET userIds
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            header: {
                'Authorization': "Bearer " + accessToken
            }
        }).then((res) => {
                const userId = res.body[0].id
                return userId
        }).then((userId) =>{
            //2nd request for the first userId
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/'+userId,
                    header: {
                        'Authorization': "Bearer " + accessToken
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(userId)
                })
        })
    })


    it.only('GET users array test', () => {
        //1st request: GET userIds
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            header: {
                'Authorization': "Bearer " + accessToken
            }
        }).then((res) => {
                const location = res.body
                return location
        }).then((location) =>{

        for(let i=0; i< location.length; i++ ){
            //2nd request for the first userId
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/'+location[i].id,
                    header: {
                        'Authorization': "Bearer " + accessToken
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(location[i].id)
                })
            }
        })
    })
})

