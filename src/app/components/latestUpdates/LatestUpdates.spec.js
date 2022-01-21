import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LatestUpdates from "./LatestUpdates";
import { StateProvider } from "app/Context";
import { BrowserRouter } from "react-router-dom";

test("is all the content present in LatestUpdates?", () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <LatestUpdates />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByText("Get Latest Updates By Subscribing")).toBeInTheDocument();
  expect(screen.getByText("Shop Now")).toBeInTheDocument();

});
