

describe("API Tests", () => {

  it("should make a POST request and assert on the response", () => {
    cy.request({

        method: "POST",
        url: baseUrl,
        body: payloadChangeofduedate[i],

        headers: {
            'x-api-key': Cypress.env("apikey")
             // Authorization: `Bearer ${Cypress.env("Access_token")}`
        }


    }).then(()=>{

    })
  });
});
