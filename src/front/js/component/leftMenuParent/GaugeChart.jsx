import React from "react";
import GaugeComponent from "react-gauge-component";

const ParentGaugeChart = ({ value = 50, min = 0, max = 100 }) => {
  let subArcs =
    max == 20
      ? [
          { limit: 3 },
          { limit: 6 },
          { limit: 9 },
          { limit: 12 },
          { limit: 15 },
          { limit: 18 },
          {},
        ]
      : [{}, {}, {}, {}, {}, {}, {}];

  return (
    <GaugeComponent
      type="semicircle"
      arc={{
        colorArray: ["#FF2121", "#00FF15"],
        padding: 0.02,
        subArcs: subArcs,
      }}
      labels={{
        valueLabel: { formatTextValue: value => `${value}/${max}` },
        tickLabels: {
          type: "outer",
          defaultTickValueConfig: {
            formatTextValue: value => value,
            style: { fontSize: 8, fill: "#F0F6FC" },
          },
          defaultTickLineConfig: {
            color: "#F0F6FC",
          },
        },
      }}
      pointer={{ type: "blob", animationDelay: 0 }}
      value={value}
      maxValue={max}
      minValue={min}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "333px",
        maxHeight: "165px",
      }}
    />
  );
};

export default ParentGaugeChart;
