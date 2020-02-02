jest.mock("highcharts-react-official", () => jest.fn(() => null)); // Note: activiate the mock

import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";
import HighchartsReact from "highcharts-react-official";

const HighchartsReactMock = HighchartsReact as jest.Mock; // Note: type the mock

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  expect(HighchartsReactMock.mock.calls[0][0].options).toEqual({
    title: {
      text: "My chart"
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3]
      }
    ]
  });
});
