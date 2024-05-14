import { describe } from "jest-circus";
import '@testing-library/jest-dom';

describe("Mock functions", () => {
  it("returns undefined by default", () => {
    const mock = jest.fn();
    let result = mock("foo");
    //tester que result est bien undefined

    //tester que la fonction mock a bien été appelée

    //appeler à nouveau la fonction mock

    //tester que la fonction mock a bien été appelée 2 fois

    //tester que la fonction mock a bien été appelée avec le paramètre foo2
  });

  const doAdd = (a, b, callback) => {
    let add = a + b + 3;
    callback(add);
  };

  it("calls callback with arguments added", () => {
    //mocker la fonction de callback puis appeler la fonction doAdd avec a=1 et b=2

    // lance la fonction doAdd avec 1, 2 et le mock de la fonction de callback

    //vérifiez que la fonction a été appelée avec le bon paramètre

    //vérifiez que la fonction mock a été appelée une seule fois
    
  });
});
