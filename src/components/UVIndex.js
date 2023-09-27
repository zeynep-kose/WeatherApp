import React from "react";
import GaugeChart from "react-gauge-chart";
const UVIndexGaugeChart = ({ uvIndex }) => {
  return (
    <GaugeChart
      id=""
      nrOfLevels={10}
      arcsLength={[1]}
      colors={["orange"]}
      percent={uvIndex / 100}
      // Normalize the UV index to fit the gauge (assuming UV index is out of 10)
      arcPadding={0}
    />
  );
};

export default UVIndexGaugeChart;
