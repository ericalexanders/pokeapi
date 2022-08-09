import React from "react";
import { render, screen } from "@testing-library/react";
import { Spinner } from "../spinner";

test("renders learn react link", () => {
  const wrapper = render(<Spinner />);
  expect(wrapper).not.toBeNull();
});
