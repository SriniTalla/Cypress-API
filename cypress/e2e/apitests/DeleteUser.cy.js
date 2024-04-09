/// <reference types = "Cypress" />

describe('Delete user', () => {

    let accessToken = "3f59caedf8a2cb08157ae844c83ea2640b96c961aa792b5a30aad4ff5b5a2800"

    it('DELETE user test', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v2/users/6827110',
            header: {
                'Authorization': "Bearer " + accessToken
            }
        }).then((res) => {
            expect(res.status).to.eq(204)
        })
    })
})