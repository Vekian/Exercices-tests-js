import ShareComponent from "../MockComponents/ShareComponent";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

//mocker le composant UserComponent
jest.mock("../MockComponents/UserComponent", () => {
  return {
    __esModule: true,
    default: ({ para2 }) => (
      <div>
        <h1>{para2}</h1>
      </div>
    ),
  };
});
//mocker le composant InstallComponent
jest.mock("../MockComponents/InstallComponent", () => {
  return {
    __esModule: true,
    default: ({ para1 }) => (
      <div>
        <h1>{para1}</h1>
      </div>
    ),
  };
});

describe("ShareComponent", () => {
  it("should return correct component", () => {
    render(<ShareComponent para1="title1" para2="title2" />);
    // vérifie que le composant ShareComponent est bien rendu
    expect(screen.getByTestId("share-component")).toBeInTheDocument();
    // vérifie que les composants mockés contiennent le texte choisi dans le mock
    expect(screen.getByText("title2")).toBeInTheDocument(); // pour UserComponent

    expect(screen.getByText("title1")).toBeInTheDocument(); // pour InstallComponent
  });
});
