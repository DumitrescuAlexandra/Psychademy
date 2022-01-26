import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Plot from "react-plotly.js";
import BackArrow from "../../../UI/Buttons/BackArrow";
import classes from "./MoodGraph.module.css";

function MoodGraph() {
  return (
    <Fragment>
      <BackArrow />
      <div className={classes.graphPage}>
        <div className={classes.graphTitle}>
          {" "}
          <p> My evolution </p>{" "}
        </div>
        <div className={classes.graphZone}>
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
              ]}
              layout={{ width: 350, height: 300, title: "My graph" }}
            />
          </div>
        </div>
        <div className={classes.registerBtn}>
          <Link to="/MoodCheck">Register your mood</Link>
        </div>
      </div>
    </Fragment>
  );
}

export default MoodGraph;
