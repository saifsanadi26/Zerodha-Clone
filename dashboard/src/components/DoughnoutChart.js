// this entire thing is taken from "Chart.js" which creates a donut chart on the dashboard left part

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  return <Doughnut data={data} />;
}

// this above code is called in "WatchList.js" after <ul> (i.e <DoughnutChart data={data}>)