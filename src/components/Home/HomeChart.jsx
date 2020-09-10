import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import { Chart } from "react-charts";

import useDemoConfig from "./useDemoConfig";
import useLagRadar from "./useLagRadar";
import ResizableBox from "./ResizableBox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const HomeChart = () => {
  const classes = useStyles();
  const { data, randomizeData } = useDemoConfig({
    dataType: "linear",
    series: 10,
    useR: true,
  });

  const series = React.useMemo(
    () => ({
      type: "bubble",
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <div className={classes.root}>
      <Card variant="outlined">
        {/* <button onClick={randomizeData}>Randomize Data</button>
            <br />
            <br /> */}
        <ResizableBox>
          <Chart
            data={data}
            series={series}
            axes={axes}
            grouping="single"
            tooltip
          />
        </ResizableBox>
      </Card>
    </div>
  );
};
