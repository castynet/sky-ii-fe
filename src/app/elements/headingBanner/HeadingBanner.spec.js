import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeadingCards from "./HeadingCard";
import { StateProvider } from "app/Context";
import { BrowserRouter } from "react-router-dom";

test("is all the content present in HeadingCards?", () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <HeadingCards />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByTestId("paragraph")).toBeInTheDocument();
  expect(screen.getByTestId("bannerinner")).toBeInTheDocument();
  expect(screen.getByTestId("titlebox")).toBeInTheDocument();
  expect(screen.getByTestId("banner")).toBeInTheDocument();
});
