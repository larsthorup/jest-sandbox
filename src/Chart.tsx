import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Chart: React.FunctionComponent = () => {
  const options: Highcharts.Options = {
    title: {
      text: "My chart"
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3]
      }
    ]
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
