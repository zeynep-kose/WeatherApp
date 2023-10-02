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

import { useTheme } from "@mui/material/styles";

function Summary({ weather, city, setCity }) {
  const theme = useTheme();
  if (!weather) return <>Loading...</>;
  console.log(weather);
  const daysOfWeek = (dateObj) => {
    const pullDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return pullDay[dateObj];
  };
  const date = weather?.last_updated;
  console.log(date);
  const [a, b] = date.split(" ");
  console.log(a);
  console.log(b);
  const dateObj = new Date(a + "T" + b + ":00");
  const day = daysOfWeek(dateObj.getDay());

  return (
    <Stack
      className="summary__cont"
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        paddingTop: 0,
        [theme.breakpoints.up("xl")]: {
          paddingTop: 3,
        },

        [theme.breakpoints.down("md")]: {
          display: "flex",
          height: "100%",
          width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          rowGap: 1,
        },
      }}
    >
      <Search city={city} setCity={setCity} />
      <Box
        sx={{
          [theme.breakpoints.up("md")]: {
            display: "flex",
            alignItems: "baseline",
          },
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "50%",
            margin: " auto",
            [theme.breakpoints.up("xl")]: {
              width: "70%",
              margin: "4rem auto",
              height: 180,
            },
            [theme.breakpoints.up("lg")]: {
              width: "40%",
              margin: "2rem auto 0 auto",
              height: 140,
            },
            [theme.breakpoints.down("md")]: {
              width: "30%",
              margin: "1rem auto ",
              height: 180,
            },
            [theme.breakpoints.down("sm")]: {
              width: "39%",
              height: 180,
            },
          }}
        >
          <img
            src={weather?.condition?.icon}
            alt="weather-condition"
            style={{ width: "100%" }}
          ></img>
        </Box>
        {/* </Box> */}
        <Box
          className="summary__middle"
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: " 0 auto",
            width: "85%",
            rowGap: 1,
            [theme.breakpoints.up("xl")]: {
              marginTop: 2,
              rowGap: 3,
            },

            [theme.breakpoints.down("md")]: {
              marginTop: "3rem",
              paddingTop: "2rem",
              rowGap: 2,
              alignItems: "center",
            },
            [theme.breakpoints.down("sm")]: {
              marginTop: "1rem",
              paddingTop: "1rem",
              rowGap: " 1rem",
              paddingLeft: 0,
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "start",
              fontSize: 57,
              fontWeight: "bold",
              [theme.breakpoints.up("xl")]: {
                fontSize: "5rem",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "4rem",
              },
            }}
          >
            {weather?.temp_c}°C
          </Typography>

          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: 1,
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
              padding: "0 .2rem .2rem .2rem",
              marginBottom: "1rem",
              [theme.breakpoints.down("sm")]: {
                justifyContent: "center",
              },
            }}
          >
            {day},<span style={{ color: "grey", fontSize: 20 }}>{b}</span>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: 0.5,
            }}
          >
            <img
              sx={{ height: 40 }}
              src={weather?.condition?.icon}
              alt="current-state"
            ></img>
            <Typography
              className="condition__text"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              {weather?.condition?.text}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          [theme.breakpoints.up("xl")]: {
            marginTop: 5,
          },

          borderRadius: ".5rem",
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            height: "9rem",
            width: "18rem",
            margin: "0 auto",
            [theme.breakpoints.up("xl")]: {
              height: "200px",
              width: "85%",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            [theme.breakpoints.down("lg")]: {
              height: "200px",
              width: "85%",
              margin: "2rem auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            [theme.breakpoints.down("md")]: {
              width: "35rem",
            },
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <img
            src="https://picsum.photos/id/11/260/115"
            alt="saane"
            style={{
              borderRadius: ".5rem",
              zIndex: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bold",
              zIndex: "",
              textShadow: "2px 2px 4px #000000",
              letterSpacing: 1,
              [theme.breakpoints.up("xl")]: {
                fontSize: "3rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "2.5rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
            }}
          >
            {city}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default Summary;
