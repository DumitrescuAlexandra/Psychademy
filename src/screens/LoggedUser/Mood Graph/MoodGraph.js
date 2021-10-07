import React from "react";
import Plot from "react-plotly.js";
import BackArrow from "../../../UI/Buttons/BackArrow";
import classes from "./MoodGraph.module.css";

function MoodGraph() {
  return (
    <div className={classes.graphPage}>
      <BackArrow />
      <div className={classes.chartZone}>
        <Plot
          data={[
            {
              x: ["Mon", "Tue", "Wed", " Thu", "Fri", "Sat", "Sun"],
              y: [1, 3, 2, 4, 5, 5, 4, 4],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "#6EA5A5" },
            },
            // { type: "scatter", x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{ width: 350, height: 300, title: "My graph" }}
        />
      </div>
    </div>
  );
}

export default MoodGraph;
