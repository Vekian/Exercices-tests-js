import { describe } from "jest-circus";
import "@testing-library/jest-dom";

describe("Mock functions", () => {
  it("returns undefined by default", () => {
    const mock = jest.fn();
    let result = mock("foo");

    //tester que result est bien undefined
    expect(result).toBeUndefined();
    //tester que la fonction mock a bien été appelée
    expect(mock.mock.calls).toHaveLength(1);
    //appeler à nouveau la fonction mock
    mock("foo2");
    //tester que la fonction mock a bien été appelée 2 fois
    expect(mock.mock.calls).toHaveLength(2);
    //tester que la fonction mock a bien été appelée avec le paramètre foo2
    expect(mock.mock.calls[1][0]).toBe("foo2");
  });

  const doAdd = (a, b, callback) => {
    let add = a + b + 3;
    callback(add);
  };

  it("calls callback with arguments added", () => {
    //mocker la fonction de callback puis appeler la fonction doAdd avec a=1 et b=2
    const mockCallback = jest.fn();
    doAdd(1, 2, mockCallback);
    //vérifiez que la fonction a été appelée avec le bon paramètre
    expect(mockCallback.mock.calls[0][0]).toBe(6);
    //vérifiez que la fonction mock a été appelée une seule fois
    expect(mockCallback.mock.calls).toHaveLength(1);
  });
});
