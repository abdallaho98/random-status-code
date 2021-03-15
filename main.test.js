const generateRandomBadStatusCode = require("./main")

test('returns an integer', ()=> {
    expect(generateRandomBadStatusCode(0.9)).toBeNumber();
});
