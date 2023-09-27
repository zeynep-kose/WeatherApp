import { useEffect, useState } from "react";
import Search from "../components/Search";
import TopCard from "../components/TopCard";
import Summary from "../components/Summary";
import Detail from "../sections/Detail";
import axios from "axios";
import {
  Card,
  Box,
  CardContent,
  Icon,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";
const API_KEY = "3451b70b70534de7ad9123910232009";

function WeatherApp() {
  const [city, setCity] = useState("Bursa"); //global state

  const [weather, setWeather] = useState();

  const getWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response?.data);
        return response.data;
      });
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <Stack sx={{ display: "flex", flexDirection: "row", columnGap: 4 }}>
      <br></br>

      {/* left bar => section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          flexDirection: "column",
        }}
      >
        {/* component */}
        <Search city={city} setCity={setCity} />
        {/* component */}
        <Summary weather={weather?.current} city={city} />
      </Box>
      <Box sx={{ width: "70%" }}>
        <TopCard forecast={weather?.forecast?.forecastday} />
        <Detail detail={weather} city={city} />
      </Box>
    </Stack>
  );
}

export default WeatherApp;
