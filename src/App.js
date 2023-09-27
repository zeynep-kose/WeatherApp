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
      <WeatherApp></WeatherApp>
    </Box>
  );
}

export default App;
