import WeatherApp from "./pages/WeatherApp";
import "./App.css";
import {
  Card,
  Box,
  CardContent,
  Icon,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";
function App() {
  return (
    <Box className="App">
      <Typography sx={{ marginBottom: 3, fontSize: 35 }}>
        <b>Weather Forecast</b>
      </Typography>
      <WeatherApp></WeatherApp>
    </Box>
  );
}

export default App;
