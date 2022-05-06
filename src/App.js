import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

const API_KEY ="fe4feefa8543e06d4f3c66d92c61b69c";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;
const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather =async(e) => {
    e.preventDefault();
    
    const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
   updateWeather(response.data);
  };

  return(
    <Container>
    <AppLabel>React Weather App</AppLabel>
    { weather ? (
     <WeatherComponent weather={weather} />
    ) : (
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
    )}
    </Container>
  );
}

export default App;
