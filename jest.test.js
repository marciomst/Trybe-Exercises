const { describe, expect, it } = require("@jest/globals");
const {
  createPresentationMessage,
  hackTheDb,
  restartDb,
} = require("./jest");

describe("A função createPresentationMessage", () => {

  beforeEach(() => {
    restartDb();
  });

  it("retorna erro quando falha", (done) => {
    hackTheDb();
    const expectedError = new Error("Explodiu");

    function callback(err, result) {
     
        expect(err).toEqual(expectedError)
        done();
     

    }

    createPresentationMessage("Xuxa", callback);
  });

  it("retorna corretamente a string", (done) => {
    const expectedString =
      "Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.";

      function callback(err, result) {
        try {
          expect(result).toBe(expectedString);
          done();
        } catch (err) {
          done(err);
        }
      }

      createPresentationMessage("Xuxa", callback);

  });

  
});