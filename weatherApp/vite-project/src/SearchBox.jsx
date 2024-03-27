import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const apiKey = "d868707567799b433358af35858e9543";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


  


  let getWeatherInfo = async () => {
    try {
      // setError(false);
      const res = await fetch(api);
      const jsonData = await res.json();
      console.log(jsonData);
      let result = {
        city: city,
        temp: jsonData.main.temp,
        tempMin: jsonData.main.temp_min,
        tempMax: jsonData.main.temp_max,
        humidity: jsonData.main.humidity,
        feelsLike: jsonData.main.feels_like,
        weather: jsonData.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setError(false);
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

 
      
    

  
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p>No such place exist</p>}
      </form>
    </div>
  );
  }

export default SearchBox;
