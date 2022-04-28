const UserController = require('../../controllers/user.controller')
const httpMocks = require('node-mocks-http')
const db = require("../../config/db")
const { generateToken } = require("../../middlewares/auth")
const bcrypt = require('bcrypt')

jest.mock("../../config/db.js")
jest.mock("../../middlewares/auth")

let req, res, next;
const data = {
    rows: [{
        "id": 1,
        "email": "su4@tiga.com",
        "password": "smuhu"
    }]
}

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = jest.fn()
    generateToken.mockResolvedValue("token")
    bcrypt.hash = jest.fn()
})

describe("UserController.register", () => {
    it("Should have object 'data'", async () => {
        db.query.mockResolvedValueOnce(data)

        await UserController.register(req, res, next);

        expect(res.statusCode).toBe(200)

    })

    it("Should have return code 200", async () => {
        db.query.mockResolvedValue({ rows: [] })

        await UserController.register(req, res, next);

        expect(res.statusCode).toBe(400);
    })

    it("should handle errors", async () => {
        const errorMessage = { message: "Error in register" };
        db.query.mockRejectedValue(errorMessage);

        await UserController.register(req, res, next);
        expect(res.statusCode).toBe(400);
    });
})

describe("UserController.login", () => {
    it("Should have return data object", async () => {
        db.query.mockResolvedValueOnce(data)

        bcrypt.compare = jest.fn().mockImplementation(() => true)

        await UserController.login(req, res, next);

        expect(res.statusCode).toBe(200)

    })

    it("Should have return code 200", async () => {
        db.query.mockResolvedValue(data)

        bcrypt.compare = jest.fn().mockImplementation(() => true)

        await UserController.login(req, res, next);

        expect(res.statusCode).toBe(200);
    })

    it("Should have return code 400", async () => {
        db.query.mockResolvedValue({ rows: [] })

        await UserController.login(req, res, next);

        expect(res.statusCode).toBe(400);
    })


    it("Should have return code 402", async () => {
        bcrypt.compare = jest.fn()

        db.query.mockResolvedValue(data)

        await UserController.login(req, res, next);

        expect(res.statusCode).toBe(402);
    })

    it("should handle errors", async () => {
        const errorMessage = { message: "Error in login" };
        db.query.mockRejectedValue(errorMessage);

        await UserController.login(req, res, next);
        expect(res.statusCode).toBe(400);
    });
})