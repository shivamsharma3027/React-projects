import React from "react";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnit from "@mui/icons-material/AcUnit";


function InfoBox({info}) {
  const IN_URL =
    "https://images.unsplash.com/photo-1572687413790-9d96634041b8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const hot_URL="https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?b=1&s=170667a&w=0&k=20&c=IFZS5JrL8LQbsu9KkMCToxJpZfUYy5A87g1YWBzZD-w=";
    const cold_URL="https://media.istockphoto.com/id/1181599019/photo/empty-panoramic-winter-background.webp?b=1&s=170667a&w=0&k=20&c=oBVngDfVHV-2861bAXDEnEvzQh6IJvux-gNAaalMTP8=";
    const rain_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  // let info = {
  //   city: "Delhi",
  //   feelslike: 24.84,
  //   temp: 24.84,
  //   tempMin: 24.84,
  //   tempMax: 25.84,
  //   humidity: 24.84,
  //   weather: "haze",
  // };

  return (
    <div className="InfoBox">
      
      <div className="cardContainer">

      <Card sx={{ maxWidth: 345 }}>
        < CardMedia sx={{ height: 140 }} image={
          info.humidity>80

          ?rain_URL
          :info.temp>15

          ?hot_URL:cold_URL}
           title="green iguana" 
          />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city.toUpperCase()}&nbsp;&nbsp;

            {
              info.humidity>80

?<ThunderstormIcon/>
:info.temp>15

?<WbSunnyIcon/>:<AcUnit/>
}
            
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temparature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>Min Temp={info.tempMin}</p>
            <p>Max Temp={info.tempMax}</p>
            <p>
              The weather can be described as <i><b>{info.weather}</b></i> feels like
              
            </p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

export default InfoBox;
