import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PromoB from "./PromoB";
import { StateProvider } from "app/Context";
import { BrowserRouter } from "react-router-dom";

test("is all the content present in PromoB?", () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <PromoB />
      </BrowserRouter>
    </StateProvider>
  );
  expect(
    screen.getByText("Unique Features of Latest and Trending Products")
  ).toBeInTheDocument();
  expect(screen.getByText("Add To Cart")).toBeInTheDocument();
  expect(screen.getByTestId("promo-b-image")).toBeInTheDocument();
});
