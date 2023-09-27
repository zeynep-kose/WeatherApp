import { useState } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import NorthIcon from "@mui/icons-material/North";
import UVIndexGaugeChart from "../components/UVIndex";
import Status from "../mocks/Status";

import {
  Box,
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

  return (
    <Box>
      <Typography sx={{ margin: 2 }}>
        <h2>Today Higlight</h2>
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems=""
        // spacing={1}
        columnGap={6}
        rowGap={2}
        flexWrap="wrap"
      >
        <Card sx={{ width: 250, height: 150 }}>
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

        <Card sx={{ width: 250, height: 150 }}>
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

        <Card
          sx={{
            width: 250,
            height: 150,
            display: "flex",
            flexDirection: "column",
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

        <Card
          sx={{
            width: 250,
            height: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "baseline",
          }}
        >
          <CardContent sx={{ width: "100%", height: "100% " }}>
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
                columnGap: 1,
                justifyContent: "center",
                height: "100%",
              }}
            >
              <b>{detail?.current?.humidity}</b>%
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 250, height: 150 }}>
          <CardContent sx={{ height: "100%" }}>
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

        <Card sx={{ width: 250, height: 150 }}>
          <CardContent sx={{ height: "100%" }}>
            <CardHeader
              title=""
              subheader="Air Quality"
              sx={{ padding: 0, textAlign: "start" }}
            />
            <Typography
              sx={{
                fontSize: 40,
                display: "flex",
                alignItems: "center",
                columnGap: 1,
                justifyContent: "center",
                height: "100%",
              }}
            >
              <b>{detail?.current?.air_quality?.co}</b>
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}

export default Detail;
