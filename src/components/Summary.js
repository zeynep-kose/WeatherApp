import React from "react";
import {
  Card,
  Box,
  CardContent,
  Icon,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";
function Summary({ weather, city }) {
  if (!weather) return <>Loading...</>;
  // const temp= weather.main.temp
  // const temp= Object.keys(weather).map((item)=>{return(item.main.temp)})
  console.log(weather);
  const daysOfWeek = (dateObj) => {
    const pullDay = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return pullDay[dateObj];
  };
  const date = weather?.last_updated;
  console.log(date);
  const [a, b] = date.split(" ");
  console.log(a);
  console.log(b);
  const dateObj = new Date(a + "T" + b + ":00");
  const day = daysOfWeek(dateObj.getDay() - 1);

  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "white",
        height: 520,
        paddingTop: 3,
        display: "flex",
        flexDirection: "column",
        rowGap: 1,
      }}
    >
      <img
        src={weather?.condition?.icon}
        alt="weather-condition"
        style={{ height: 150, width: 150, margin: "0 auto" }}
      ></img>
      <Typography>{weather?.temp_c}°C</Typography>
      <Typography>
        {" "}
        {day},{b}
      </Typography>
      <Box className="current--State">
        <img src={weather?.condition?.icon} alt="current-state"></img>
        <Typography>{weather?.condition?.text}</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "orange",
          borderRadius: "4px",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: 40,
            color: "white",
            width: "100%",
            height: 165,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {city}
        </Typography>
      </Box>
    </Stack>
  );
}

export default Summary;
