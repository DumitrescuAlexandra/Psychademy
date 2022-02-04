import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import Plot from "react-plotly.js";
import BackArrow from "../../../UI/Buttons/BackArrow";
import classes from "./MoodGraph.module.css";

function MoodGraph() {
  const history = useHistory();

  const backHandler = () => {
    history.push("/UserPage");
  };

  return (
    <Fragment>
      <div>
        {alert(
          "This section is still under construction, thank you for understanding!"
        )}
      </div>
      <BackArrow backHandler={backHandler} />
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
                  y: [1, 3, 2, 4, 5, 5, 4, 4, 3, 4, 3],
                  type: "scatter",
                  mode: "markers",
                  marker: { color: "#6EA5A5" },
                },
              ]}
              layout={{ width: 345, height: 300, title: "My graph" }}
              className={classes.chart}
            />
          </div>
        </div>
        <div className={classes.buttons}>
          <div className={classes.registerBtn}>
            <Link to="/UserPage">Back</Link>
          </div>
          <div className={classes.registerBtn}>
            <Link to="/MoodCheck">Register your mood</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MoodGraph;
