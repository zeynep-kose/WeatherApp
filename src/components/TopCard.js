import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
} from "@mui/material";
// import axios from "axios";

function TopCard({ forecast }) {
  const [photos, setImages] = useState([]);

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
          // justifyContent: "space-between",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 1,
          paddingTop: 3,
        }}
      >
        {forecast.map((item, index) => (
          <Card key={index} style={{ width: 130, height: 160 }}>
            <CardContent
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">
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
                {forecast[index]?.day?.maxtemp_c}
                {forecast[index]?.day?.mintemp_c}
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default TopCard;
