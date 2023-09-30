import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
} from "@mui/material";

function TopCard({ forecast }) {
  const theme = useTheme();
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  if (!forecast) return <>Loading...</>;

  return (
    <Grid
      container
      spacing={0}
      columnSpacing={{ xs: 1, sm: 2, md: 0 }}
      columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}
      columnGap={{ xs: 4, sm: 8, md: 5, lg: 7, xl: 12 }}
      sx={{ paddingTop: "10px", width: "100vw", paddingRight: "2rem" }}
      className="topCard__cont"
    >
      {forecast.map((item, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={1}
          lg={1}
          xl={1}
          sx={{
            [theme.breakpoints.up("xl")]: {
              // columnGap: 3,
            },
          }}
          className="topCards"
        >
          <Card
            className="topCard"
            sx={{
              [theme.breakpoints.up("xl")]: {
                width: 140,
                height: 170,
              },
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "110px",
              height: "160px",
            }}
          >
            <CardContent style={{ width: "100%" }} className="topCard__content">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: 18, padding: "0 .5rem" }}
              >
                {daysOfWeek[new Date(item.date).getDay()]}
              </Typography>
              <CardMedia
                sx={{ objectFit: "contain" }}
                component="img"
                height="60"
                width="40"
                image={forecast[index]?.hour[index]?.condition?.icon}
                alt="condition-icon"
              />
              <CardActions sx={{ justifyContent: "center" }}>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {Math.floor(forecast[index]?.day?.maxtemp_c)}°
                </span>
                <span style={{ color: "grey", fontSize: 15 }}>
                  {Math.floor(forecast[index]?.day?.mintemp_c)}°
                </span>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TopCard;
