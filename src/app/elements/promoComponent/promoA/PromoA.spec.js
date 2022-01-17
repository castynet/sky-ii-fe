import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PromoA from "./PromoA";
import { StateProvider } from "app/Context";
import { BrowserRouter } from "react-router-dom";

test("is all the content present in PromoA?", () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <PromoA />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByText("20% Discount of All Products")).toBeInTheDocument();
  expect(screen.getByText("Shop Now")).toBeInTheDocument();
  expect(screen.getByTestId("promo-a-image")).toBeInTheDocument();
});
