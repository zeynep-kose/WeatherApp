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
      columnSpacing={{ xs: 1, sm: 1, md: 0 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
      columnGap={{ xs: 4, sm: 0, md: 0, lg: 12, xl: 12 }}
      sx={{
        columnGap: "25px",
        paddingTop: "10px",
        width: "100%",
        paddingRight: "2rem",
        flexWrap: "nowrap",
        [theme.breakpoints.up("xl")]: {
          width: "100%",
          justifyContent: "space-between",
          paddingTop: 4.5,
        },
        [theme.breakpoints.down("md")]: {
          width: "100%",
          flexWrap: "nowrap",
          columnGap: 0,
          padding: 0,
          margin: "2rem auto",
          justifyContent: "space-between",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          justifyContent: "space-between",
          padding: 0,
        },
        // [theme.breakpoints.up("xs")]: {
        //   width: "100%",
        //   justifyContent: "space-between",
        //   padding: 0,
        //   flexWrap: "wrap",
        // },
      }}
      className="topCard__cont"
    >
      {forecast.map((item, index) => (
        <Box
          key={index}
          className="topCards"
          sx={{ width: "100%", padding: 0 }}
        >
          <Card
            className="topCard"
            sx={{
              padding: 0,

              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              [theme.breakpoints.up("xl")]: {
                width: "75%",
                height: "150px",
                paddingTop: 2,
              },

              [theme.breakpoints.down("md")]: {
                padding: 0,
                width: "95%",
                margin: "0 auto",
                // height: 170,
              },
              [theme.breakpoints.down("sm")]: {
                width: "80%",
                // height: 110,
                padding: 0,
                justifyContent: "",
              },
              // [theme.breakpoints.down("xs")]: {
              //   // height: 110,
              //   padding: 0,
              //   justifyContent: "",
              // },
            }}
          >
            <CardContent
              style={{
                padding: 0,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                [theme.breakpoints.down("sm")]: {
                  padding: 0,
                  // width: "80%",
                  // height: 170,
                },
              }}
              className="topCard__content"
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: 18, padding: "0 .5rem" }}
              >
                {daysOfWeek[new Date(item.date).getDay()]}
              </Typography>
              <CardMedia
                sx={{
                  objectFit: "contain",
                  height: 60,
                  width: 40,
                  [theme.breakpoints.down("sm")]: {
                    height: 30,
                    width: 50,
                  },
                }}
                component="img"
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
        </Box>
      ))}
    </Grid>
  );
}

export default TopCard;
