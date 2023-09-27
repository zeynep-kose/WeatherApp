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
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          paddingTop: 28,
        }}
      >
        {forecast.map((item, index) => (
          <Card key={index} style={{ width: 130, height: 180 }}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: 12,
                alignItems: "center",
              }}
            >
              <Typography variant="h6">
                {daysOfWeek[new Date(item.date).getDay()]}
              </Typography>
              <CardMedia
                style={{ objectFit: "contain" }}
                component="img"
                height="60"
                width="40"
                image=""
                src={forecast[index]?.hour[index]?.condition?.icon}
                alt="condition-icon"
              ></CardMedia>

              <CardActions>
                <span> {forecast[index]?.day?.maxtemp_c}</span>
                <span> {forecast[index]?.day?.mintemp_c}</span>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default TopCard;
