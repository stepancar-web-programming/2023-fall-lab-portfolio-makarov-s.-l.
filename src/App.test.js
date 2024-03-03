import { render, screen } from "@testing-library/react";
import MainPage from "./Pages/MainPage";

test("renders the landing page", () => {
    render(<MainPage />);
});
