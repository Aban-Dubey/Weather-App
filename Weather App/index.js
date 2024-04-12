import 'dotenv/config';
import bodyParser from 'body-parser';
import axios from 'axios';
import express from 'express'

const app = express();
const port = 3000;
let options;
const apiKey = process.env.APIKEY;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: {city: 'Delhi'},
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options);
        res.render("index.ejs",{
            city2: "Delhi",
            temp: response.data.temp,
            min_temp: response.data.min_temp,
            max_temp: response.data.max_temp,
            cloud_pct: response.data.cloud_pct,
            humidity: response.data.humidity,
            feels_like: response.data.feels_like,
            wind_speed: response.data.wind_speed,
            sunrise: response.data.sunrise,
            sunset: response.data.sunset,
        });
    } catch (error) {
        console.error(error);
    }
    });

    app.get("/search",async (req,res)=> {
        options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: {city: req.query.city_name},
            headers: {
              'X-RapidAPI-Key': apiKey,
              'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
          };
          try {
            const response = await axios.request(options);
            res.render("index.ejs",{
                city2: req.query.city_name,
                temp: response.data.temp,
                min_temp: response.data.min_temp,
                max_temp: response.data.max_temp,
                cloud_pct: response.data.cloud_pct,
                humidity: response.data.humidity,
                feels_like: response.data.feels_like,
                wind_speed: response.data.wind_speed,
                sunrise: response.data.sunrise,
                sunset: response.data.sunset,
            });
        } catch (error) {
            console.error(error);
        }
    });

    app.get("/luc",async (req,res)=> {
        options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: {city: 'Lucknow'},
            headers: {
              'X-RapidAPI-Key': apiKey,
              'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
          };
          try {
            const response = await axios.request(options);
            res.render("index.ejs",{
                city2: 'Lucknow',
                temp: response.data.temp,
                min_temp: response.data.min_temp,
                max_temp: response.data.max_temp,
                cloud_pct: response.data.cloud_pct,
                humidity: response.data.humidity,
                feels_like: response.data.feels_like,
                wind_speed: response.data.wind_speed,
                sunrise: response.data.sunrise,
                sunset: response.data.sunset,
            });
        } catch (error) {
            console.error(error);
        }
    });

    app.get("/jpr",async (req,res)=> {
        options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: {city: 'Jaipur'},
            headers: {
              'X-RapidAPI-Key': apiKey,
              'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
          };
          try {
            const response = await axios.request(options);
            res.render("index.ejs",{
                city2: 'Jaipur',
                temp: response.data.temp,
                min_temp: response.data.min_temp,
                max_temp: response.data.max_temp,
                cloud_pct: response.data.cloud_pct,
                humidity: response.data.humidity,
                feels_like: response.data.feels_like,
                wind_speed: response.data.wind_speed,
                sunrise: response.data.sunrise,
                sunset: response.data.sunset,
            });
        } catch (error) {
            console.error(error);
        }
    });

    app.get("/pat",async (req,res)=> {
        options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: {city: 'Patna'},
            headers: {
              'X-RapidAPI-Key': apiKey,
              'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
          };
          try {
            const response = await axios.request(options);
            res.render("index.ejs",{
                city2: 'Patna',
                temp: response.data.temp,
                min_temp: response.data.min_temp,
                max_temp: response.data.max_temp,
                cloud_pct: response.data.cloud_pct,
                humidity: response.data.humidity,
                feels_like: response.data.feels_like,
                wind_speed: response.data.wind_speed,
                sunrise: response.data.sunrise,
                sunset: response.data.sunset,
            });
        } catch (error) {
            console.error(error);
        }
    });

    app.get("/abt",async (req,res)=> {
        options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: {city: 'Delhi'},
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options);
        res.render("index.ejs",{
            city2: "Delhi",
            content: 'This application is designed by Aban Dubey. The navbar and the cards to display weather are taken from bootstrap framework. The backend is designed using axios and works on node servers. Body parser middleware along with express module is used to handle and post requests. Weather Ninjas API is subscribed from rapid API to get the accurate weather information of the city entered. By default the App opens up showing the weather of Delhi(being the capital of INDIA). Moreover, if you click on "Home" or "My Weather App" the app takes you to the default screen which again shows the weather of Delhi. Feel free to search for the weather of your desired location :)',
            temp: response.data.temp,
            min_temp: response.data.min_temp,
            max_temp: response.data.max_temp,
            cloud_pct: response.data.cloud_pct,
            humidity: response.data.humidity,
            feels_like: response.data.feels_like,
            wind_speed: response.data.wind_speed,
            sunrise: response.data.sunrise,
            sunset: response.data.sunset,
        });
    } catch (error) {
        console.error(error);
    }
    });

app.listen(port,()=> {
    console.log("Server is running on port: "+port);
});