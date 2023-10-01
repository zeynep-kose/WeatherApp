import { useState } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import UVIndexGaugeChart from "../components/UVIndex";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { styled } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Stack,
  CardHeader,
} from "@mui/material";

function Detail({ detail, city }) {
  const theme = useTheme();
  const cardContentHeight = {
    xs: 170,
    sm: 200,
    md: 210,
    lg: 230,
    xl: 260,
  };

  const cardStyles = {
    [theme.breakpoints.up("xl")]: {
      width: "87%",
    },
  };

  const cardContnt = {
    [theme.breakpoints.up("xl")]: {
      rowGap: 2,
    },
  };
  if (!detail) return <>Loading...</>;

  const status = {
    1: "Good Quality",
    2: "Moderate",
    3: "Bad Quality",
    4: "Bad Quality",
    5: "Very Unhealty",
  };
  const epaIndex = detail?.current?.air_quality?.["us-epa-index"];
  const getEpa = (epaIndex) => {
    let matchingStatus = null;
    Object.keys(status).map((e) => {
      if (epaIndex === parseInt(e)) {
        matchingStatus = status[e];
      }
    });
    return matchingStatus;
  };

  return (
    <Box
      sx={{
        [theme.breakpoints.up("xl")]: { marginTop: 2 },

        width: "100%",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          [theme.breakpoints.up("xl")]: {
            fontSize: 20,
            marginTop: 2,
            marginBottom: 3,
          },
          textAlign: "start",
          margin: "1.5rem 0",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      >
        <h2>Today Higlight</h2>
      </Typography>

      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 3, xl: 5 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
        sx={{
          width: "100%",
          paddingRight: "2rem",
          [theme.breakpoints.up("xl")]: {
            rowGap: 4,
            paddingRight: "3.5rem",
          },
          [theme.breakpoints.down("md")]: {
            // rowGap: 4,
            padding: "0 1rem",
          },
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100%",
            rowGap: 0,
          },
        }}
      >
        <Grid item xs={2} sm={4} md={4} lg={4}>
          <Card
            sx={{
              [theme.breakpoints.up("xl")]: {
                cardStyles,
                rowSpacing: 3,
              },
              height: cardContentHeight,
              [theme.breakpoints.down("md")]: {
                cardStyles,
                rowSpacing: 2,
              },
            }}
          >
            <CardContent
              sx={{
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                paddingBottom: "1rem",
              }}
            >
              <CardHeader title="" subheader="UV Index" />
              <UVIndexGaugeChart uvIndex={detail?.current?.uv} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4} className="cardCont">
          <Card
            sx={{
              [theme.breakpoints.up("xl")]: {
                cardStyles,
              },
              height: cardContentHeight,
            }}
            className="card"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                [theme.breakpoints.up("xl")]: { rowGap: 2 },
                [theme.breakpoints.down("lg")]: { rowGap: 2 },
              }}
            >
              <CardHeader
                title=""
                subheader="  Wind Status"
                sx={{ padding: 0 }}
              />

              <Typography
                variant="h5"
                sx={{
                  [theme.breakpoints.up("xl")]: {
                    fontSize: "70px",
                  },

                  fontSize: "55px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "end",
                  columnGap: ".5rem",
                  justifyContent: "center",
                }}
              >
                {detail?.current?.wind_kph}
                <span
                  style={{
                    color: "grey",
                    fontSize: 25,
                    paddingBottom: ".5rem",
                    fontWeight: "lighter",
                  }}
                >
                  km/h
                </span>
              </Typography>

              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: 1,
                  [theme.breakpoints.up("xl")]: {
                    fontSize: "1.5rem",
                  },
                  [theme.breakpoints.down("lg")]: {
                    fontSize: "1rem",
                  },
                }}
              >
                <Box sx={{}}>
                  <AddLocationIcon
                    sx={{
                      backgroundColor: "#eff6ff",
                      color: "#62a0fd",
                      borderRadius: 50,
                      padding: 1,
                      [theme.breakpoints.up("xl")]: {
                        width: "2.5rem",
                        height: "2.5rem",
                      },
                      [theme.breakpoints.down("lg")]: {
                        fontSize: "2rem",
                      },
                    }}
                  />
                </Box>
                {city}, {detail?.location?.country}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4} className="cardCont">
          <Card
            className="card"
            sx={{
              display: "flex",
              flexDirection: "column",

              [theme.breakpoints.up("xl")]: {
                cardStyles,
              },
              height: cardContentHeight,
            }}
          >
            <CardContent
              sx={{
                [theme.breakpoints.up("xl")]: { rowGap: 2 },
                [theme.breakpoints.down("lg")]: { rowGap: "1.5rem" },
                display: "flex",
                alignItems: "baseline",
                flexDirection: "column",
              }}
            >
              <CardHeader
                title=""
                subheader="Sunrise and Sunset"
                sx={{ padding: 0 }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  columnGap: 1,

                  alignItems: "center",
                }}
              >
                <Box sx={{}}>
                  <ArrowUpwardIcon
                    sx={{
                      color: "white",
                      borderRadius: "50%",
                      backgroundColor: "#ffc75e",
                      padding: 1,
                      [theme.breakpoints.up("xl")]: {
                        width: "2.5rem",
                        height: "2.5rem",
                      },
                      [theme.breakpoints.down("lg")]: {
                        width: "2rem",
                        height: "2rem",
                      },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    [theme.breakpoints.up("xl")]: { fontSize: "3rem" },
                  }}
                >
                  <h4> {detail?.forecast?.forecastday[0]?.astro?.sunrise}</h4>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  columnGap: 1,
                  alignItems: "center",
                }}
              >
                <Box sx={{}}>
                  <ArrowDownwardIcon
                    sx={{
                      color: "white",
                      borderRadius: "50%",
                      backgroundColor: "#ffc75e",
                      padding: 1,
                      [theme.breakpoints.up("xl")]: {
                        width: "2.5rem",
                        height: "2.5rem",
                      },
                      [theme.breakpoints.down("lg")]: {
                        width: "2rem",
                        height: "2rem",
                      },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    [theme.breakpoints.up("xl")]: { fontSize: "3rem" },
                  }}
                >
                  <h4> {detail.forecast.forecastday[0].astro.sunset}</h4>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4} className="cardCont">
          <Card
            className="card"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
              [theme.breakpoints.up("xl")]: {
                cardStyles,
              },
              height: cardContentHeight,
            }}
          >
            <CardContent
              className="cardContent"
              sx={{
                width: "100%",
                height: "100% ",
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                rowGap: 2,
                [theme.breakpoints.up("xl")]: {
                  cardStyles,
                  rowGap: 5,
                },
              }}
            >
              <CardHeader
                title=""
                subheader="Humidity"
                sx={{ padding: 0, textAlign: "start" }}
              />
              <Typography
                variant="h5"
                sx={{
                  [theme.breakpoints.up("xl")]: {
                    fontSize: "70px",
                  },
                  fontSize: "55px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  columnGap: ".5rem",
                  justifyContent: "center",
                }}
              >
                {detail?.current?.humidity}
                <span
                  style={{
                    color: "grey",
                    fontSize: 25,
                    paddingTop: "1.5rem",
                    fontWeight: "lighter",
                  }}
                >
                  %
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4} className="cardCont">
          <Card
            sx={{
              [theme.breakpoints.up("xl")]: {
                cardStyles,
              },
              height: cardContentHeight,
            }}
            className="card"
          >
            <CardContent
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                rowGap: 2,
                [theme.breakpoints.up("xl")]: { rowGap: 5 },
              }}
            >
              <CardHeader
                title=""
                subheader="Visiblity"
                sx={{ padding: 0, textAlign: "start" }}
              />

              <Typography
                variant="h5"
                sx={{
                  [theme.breakpoints.up("xl")]: {
                    fontSize: "70px",
                  },
                  fontSize: "55px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  columnGap: ".5rem",
                  justifyContent: "center",
                }}
              >
                {detail?.current?.vis_km}
                <span
                  style={{
                    color: "grey",
                    fontSize: 25,
                    paddingTop: "1.5rem",
                    fontWeight: "lighter",
                  }}
                >
                  km/h
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4} className="cardCont">
          <Card
            sx={{
              [theme.breakpoints.up("xl")]: {
                cardStyles,
              },
              height: cardContentHeight,
            }}
            className="card"
          >
            <CardContent
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                rowGap: 0.5,
                [theme.breakpoints.up("xl")]: { rowGap: 4 },
                [theme.breakpoints.down("sm")]: {
                  rowGap: 0,
                },
              }}
            >
              <CardHeader
                title=""
                subheader="Air Quality"
                sx={{ padding: 0, textAlign: "start" }}
              />
              <Typography
                sx={{
                  [theme.breakpoints.up("xl")]: {
                    fontSize: "70px",
                  },
                  fontSize: 55,
                  textAlign: "start",
                }}
              >
                <b style={{}}>{Math.floor(detail?.current?.air_quality?.co)}</b>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "grey",
                  textAlign: "start",
                  fontSize: 20,
                  display: "flex",
                  columnGap: 0.5,
                }}
              >
                Status:
                <span
                  style={{
                    color: "#8cb8fe",
                    textAlign: "start",
                    fontWeight: "bold",
                    paddingBottom: 2,
                  }}
                >
                  {getEpa(epaIndex)}
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Detail;
