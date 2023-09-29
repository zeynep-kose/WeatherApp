import { useState } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import NorthIcon from "@mui/icons-material/North";
import UVIndexGaugeChart from "../components/UVIndex";

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
    <Box sx={{ paddingRight: "40px", width: "100%" }}>
      <Typography sx={{ margin: 2, textAlign: "start" }}>
        <h2>Today Higlight</h2>
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ height: 180 }}>
            <CardContent
              sx={{
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
              }}
            >
              <CardHeader title="" subheader="UV Index" />
              <UVIndexGaugeChart uvIndex={detail?.current?.uv} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ height: 180 }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
              }}
            >
              <CardHeader
                title=""
                subheader="  Wind Status"
                sx={{ padding: 0 }}
              />
              <Typography sx={{ fontSize: 40 }}>
                <b> {detail?.current?.wind_kph}</b> km/h
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
              >
                <Box
                  sx={{
                    padding: 1,
                    backgroundColor: "#eff6ff",
                    color: "#62a0fd",
                    borderRadius: 50,
                  }}
                >
                  <AddLocationIcon sx={{}} />
                </Box>
                {city}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "50%",
              height: 180,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "baseline",
                flexDirection: "column",
                rowGap: 1,
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
                <Box
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#ffc75e",
                    padding: 1,
                  }}
                >
                  <NorthIcon
                    sx={{
                      color: "white",
                    }}
                  />
                </Box>
                <Typography>
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
                <Box
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#ffc75e",
                    padding: 1,
                  }}
                >
                  <NorthIcon
                    sx={{
                      color: "white",
                    }}
                  />
                </Box>
                <Typography>
                  <h4> {detail.forecast.forecastday[0].astro.sunset}</h4>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card
            sx={{
              height: 180,
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <CardContent
              sx={{
                width: "100%",
                height: "100% ",
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                rowGap: 2,
              }}
            >
              <CardHeader
                title=""
                subheader="Humidity"
                sx={{ padding: 0, textAlign: "start" }}
              />
              <Typography
                sx={{
                  fontSize: "40px",
                  display: "flex",
                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                <b>{detail?.current?.humidity}</b>%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ height: 180 }}>
            <CardContent
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                rowGap: 0.5,
              }}
            >
              <CardHeader
                title=""
                subheader="Visiblity"
                sx={{ padding: 0, textAlign: "start" }}
              />
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: 1,
                  fontSize: "40px",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <b>{detail?.current?.vis_km}</b>km/h
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ height: 180 }}>
            <CardContent
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                rowGap: 0.5,
              }}
            >
              <CardHeader
                title=""
                subheader="Air Quality"
                sx={{ padding: 0, textAlign: "start" }}
              />
              <Typography
                sx={{
                  fontSize: 40,
                  textAlign: "start",
                }}
              >
                <b>{detail?.current?.air_quality?.co}</b>
              </Typography>
              <Typography
                sx={{
                  color: "#8cb8fe",
                  textAlign: "start",
                  fontWeight: "bold",
                }}
              >
                Status:{getEpa(epaIndex)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Detail;
