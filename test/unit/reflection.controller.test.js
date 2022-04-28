const httpMocks = require("node-mocks-http");
const ReflectionController = require("../../controllers/reflections.controller")
const db = require("../../config/db")

jest.mock('../../config/db.js');

let req, res, next;
let data  = {
  rows: [{
    "success": "Beli laptop",
    "low_point": "Halooo",
    "take_away": "get away from my way"
  }]
}

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("ReflectionController.getReflections", () => {
  it("Should have object 'data'", async () => {  
    db.query.mockResolvedValueOnce(data)

    await ReflectionController.getReflections(req, res, next);

    expect(res._getJSONData()).toHaveProperty('data')

  })

  it("Should have return code 200", async () => {
    db.query.mockResolvedValueOnce(data)

    await ReflectionController.getReflections(req, res, next);

    expect(res.statusCode).toEqual(200);
  })

  it("should handle errors", async () => {
    const errorMessage = { message: "Error in getReflections" };
    const rejectedPromise = Promise.reject(errorMessage);
    db.query.mockReturnValue(rejectedPromise);

    await ReflectionController.getReflections(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  });
})

describe("ReflectionController.createReflection", () => {
  it("Should have return reflection object", async () => {
    db.query.mockResolvedValueOnce(data)
    await ReflectionController.createReflection(req, res, next);

    expect(res._getJSONData()).toEqual(data.rows[0])
  })

  it("Should have return code 200", async () => {
    db.query.mockResolvedValue(data)

    await ReflectionController.createReflection(req, res, next);

    expect(res.statusCode).toEqual(200);
  })


  it("should handle errors", async () => {
    const errorMessage = { message: "Error in createReflection" };
    db.query.mockRejectedValueOnce(errorMessage)

    await ReflectionController.createReflection(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  });
})

describe("ReflectionController.updateReflection", () => {
  it("Should have return code 200", async () => {
    db.query.mockResolvedValueOnce(data)

    await ReflectionController.updateReflection(req, res, next);

    expect(res.statusCode).toEqual(200);
  })

  it("Should have return code 400 when cant get reflection", async () => {
    db.query.mockResolvedValueOnce({ rows: [] })

    await ReflectionController.updateReflection(req, res, next);

    expect(res.statusCode).toEqual(400);
  })

  it("should handle errors", async () => {
    const errorMessage = { message: "Error in createReflection" };
    db.query.mockRejectedValueOnce(errorMessage)

    await ReflectionController.updateReflection(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  });
})

describe("ReflectionController.deleteReflection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("Should have return code 400 when cant find reflection", async () => {
    db.query.mockResolvedValueOnce({ rowCount: 0 })

    await ReflectionController.deleteReflection(req, res, next);

    expect(res.statusCode).toEqual(400);
  })

  it("Should have return code 200", async () => {
    db.query.mockResolvedValueOnce({ rowCount: 1, rows: [] })

    await ReflectionController.deleteReflection(req, res, next);

    expect(res.statusCode).toEqual(200);
  })

  it("should handle errors", async () => {
    const errorMessage = { message: "Error in deleteReflection" };
    db.query.mockRejectedValueOnce(errorMessage)

    await ReflectionController.deleteReflection(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  });
})