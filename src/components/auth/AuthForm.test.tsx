import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { AuthForm } from "@/components/auth/AuthForm";

describe("AuthForm", () => {
  it("renders accessible login fields", () => {
    render(<AuthForm mode="login" />);

    expect(screen.getByRole("textbox", { name: "Email Address" })).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "password");
    expect(screen.getByRole("checkbox", { name: "Remember me" })).toBeInTheDocument();
  });

  it("provides accessible feedback for unavailable social sign-in", async () => {
    const user = userEvent.setup();
    render(<AuthForm mode="signup" />);

    await user.click(screen.getByRole("button", { name: /google/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Google sign-in is not available in this frontend demo.",
    );
  });
});
