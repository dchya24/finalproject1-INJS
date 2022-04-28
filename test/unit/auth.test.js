const httpMocks = require('node-mocks-http')
const auth = require("../../middlewares/auth")
const jwt = require("jsonwebtoken");

let req, res, next;

jest.mock("jsonwebtoken")

beforeAll(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
})

describe("Auth.verify", () => {
    it("Should have called next ", async () => {
        jwt.verify = jest.fn().mockImplementation(
            (token, privatKey, cb) => {
            cb(null , {
                "id": "1",
                "name": "John Doe"
            })
        })
        
        await auth.verify(req, res, next)
        expect(jwt.verify).toHaveBeenCalled()
        expect(next).toHaveBeenCalled()
    })

    it("Should handle errors ", async () => {
        jwt.verify = jest.fn().mockImplementation(
            (token, privatKey, cb) => {
            cb({ message: "invalid Token"} , null)
        })
        
        await auth.verify(req, res, next)
        expect(jwt.verify).toHaveBeenCall
        expect(res.statusCode).toBe(500);
    })

})

describe("Auth.generateToken", () => {
    it("Should return 'token", () => {
        const token = "satu"
        jwt.sign.mockImplementation(() => token)
        auth.generateToken({
            "id": "1",
            "name": "John Doe"
        })

        expect(jwt.sign).toHaveBeenCalled()
        expect(jwt.sign).toHaveReturnedWith(token)
    })

})