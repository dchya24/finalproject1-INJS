const httpMocks = require('node-mocks-http')
const Auth = require("../../middlewares/auth")
const jwt = require("jsonwebtoken");

let req, res, next;
const data = {
    "email": "",
    "password": ""
}

jest.mock("jsonwebtoken")

beforeAll(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = jest.fn()

})

describe("Auth.verify", () => {
    beforeAll(() => {

        req.headers['x-access-token'] = "dua"
        console.log(req.headers)
    })
    it("Should have called next ", async () => {


        jwt.verify = jest.fn().mockImplementation((token, PRIVATE_KEY, cb) => {
            cb(null, data)
        })
        await Auth.verify(data)

        expect(jwt.verify).toHaveBeenCalled()
        expect(next).toHaveBeenCalled()
    })

})

describe("Auth.generateToken", () => {
    it("Should return 'token", () => {
        const token = "satu"
        jwt.sign.mockImplementation(() => token)
        Auth.generateToken(data)

        expect(jwt.sign).toHaveBeenCalled()
        expect(jwt.sign).toHaveReturnedWith(token)
    })

})