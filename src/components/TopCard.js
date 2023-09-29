import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
} from "@mui/material";

function TopCard({ forecast }) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (!forecast) return <>Loading...</>;

  return (
    <>
      <Box
        spacing={8}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 1,
        }}
      >
        {forecast.map((item, index) => (
          <Card
            key={index}
            style={{
              width: 120,
              height: 150,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {daysOfWeek[new Date(item.date).getDay()]}
              </Typography>
              <CardMedia
                sx={{ objectFit: "contain" }}
                component="img"
                height="60"
                width="40"
                image=""
                src={forecast[index]?.hour[index]?.condition?.icon}
                alt="condition-icon"
              ></CardMedia>

              <CardActions>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {" "}
                  {forecast[index]?.day?.maxtemp_c}°
                </span>
                <span style={{ color: "grey", fontSize: 15 }}>
                  {forecast[index]?.day?.mintemp_c}°
                </span>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default TopCard;
