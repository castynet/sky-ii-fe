import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from "./Card";
import { StateProvider } from "app/Context";
import { BrowserRouter } from "react-router-dom";

test("is all the content present in Card?", () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <Cards />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByText("Vel elit euismod")).toBeInTheDocument();
  expect(screen.getByText("$26.00")).toBeInTheDocument();
  expect(screen.getByTestId("floatingsection")).toBeInTheDocument();
  expect(screen.getByTestId("container")).toBeInTheDocument();
});
