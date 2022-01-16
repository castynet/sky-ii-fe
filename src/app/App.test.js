import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./app";
import { StateProvider } from "app/Context";
import { BrowserRouter } from "react-router-dom";

test("is all the content present in the app?", () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByTestId("app")).toBeInTheDocument();
});
