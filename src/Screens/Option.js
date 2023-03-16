import React from "react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Manpage from "./Mappage";
import "./stationmap.css";
import { useState, useEffect } from "react";

function Option(props) {
  Object.keys(props.dataList).map((key) => {
    return (
      <div>
        <button style={icon}>
          <AddLocationAltIcon size="large" />
        </button>

        <div style={butdiv}>
          {props.dataList[key].station_name}{" "}
          <button
            style={button}
            onClick={() => Selected(props.dataList[key].stationid)}
          >
            Select
          </button>
        </div>
      </div>
    );
  });
}
const button = {
  width: 125,
  padding: 5,
  borderRadius: 10,
  marginLeft: 60,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "#9D27CD",
  border: "none",
};
const icon = {
  padding: 10,
  borderRadius: 10,
  cursor: "pointer",
  backgroundColor: "DC143C",
  border: "none",
};
const butdiv = {
  display: "inline",
  width: 5,
  height: 200,
  padding: 10,
  borderRadius: 10,
  margin: 10,
  fontSize: 17,
  color: "white",
  backgroundColor: "#222",
};

export default Option;
