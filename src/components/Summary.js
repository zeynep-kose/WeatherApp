import React from "react";
import Search from "./Search";
import {
  Card,
  Box,
  CardContent,
  Icon,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";
function Summary({ weather, city, setCity }) {
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
        marginTop: 3,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        // background: "pink",
        width: 300,
        height: "100%",
      }}
    >
      <img
        src={weather?.condition?.icon}
        alt="weather-condition"
        style={{ margin: "0 auto", height: 150, width: 150 }}
      ></img>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 3,
          rowGap: 3,
        }}
      >
        <Typography
          sx={{ textAlign: "start", fontSize: 55, fontWeight: "bold" }}
        >
          {weather?.temp_c}°C
        </Typography>

        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: 1,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          {day}, <span style={{ color: "grey", fontSize: 20 }}>{b}</span>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ height: 40 }}
            src={weather?.condition?.icon}
            alt="current-state"
          ></img>
          <Typography>{weather?.condition?.text}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "orange",
          borderRadius: "4px",
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
