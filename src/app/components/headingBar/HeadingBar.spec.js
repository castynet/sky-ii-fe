import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeadingBar from "./headingBar";
import { StateProvider } from "app/Context";
import { BrowserRouter } from "react-router-dom";

test("is all the content present in HeadingBar?", () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <HeadingBar />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByText("Wishlist")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByTestId("cart")).toBeInTheDocument();
  expect(screen.getByTestId("menu")).toBeInTheDocument();
});
