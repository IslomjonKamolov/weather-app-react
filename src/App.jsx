import React, { useEffect, useRef, useState } from "react";
import sun from "./img/sun.png";
import cloud from "./img/clouds.png";
import snow from "./img/snow.png";
import showerRain from "./img/showerRain.png";
import rain from "./img/rain.png";
import fewCloud from "./img/fewClouds.png";
import scattered from "./img/scattered.png";
import thunderstorm from "./img/thunderstorm.png";
import fog from "./img/fog.png";

export default function App() {
  const cityInpValue = useRef();
  const [cityName, setCityName] = useState(""); // Default city name
  const [img, setImg] = useState(sun);
  const [apiData, setApiData] = useState(null); // Default state should be null
  const [error, setError] = useState(null); // State to hold error message

  const apiKey = `c87efda07c25af286a0193d8262f6ff3`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    const fetchData = async () => {
      setError(null); // Reset error state
      try {
        const response = await fetch(apiUrl);
        if (response.status === 404) {
          alert("404 not found. Check city name");
          setCityName("");
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        setError("Error fetching the data. Please try again.");
        console.error("Error fetching the data", error);
        setApiData(null); // Reset apiData in case of error
      }
    };

    if (cityName) {
      fetchData();
    }
  }, [cityName, apiUrl]);

  const search = () => {
    setCityName(cityInpValue.current.value);
  };

  useEffect(() => {
    if (apiData != null) {
      if (
        apiData.weather[0].icon == "01d" ||
        apiData.weather[0].icon == "01n"
      ) {
        setImg(sun);
      } else if (
        apiData.weather[0].icon == "02d" ||
        apiData.weather[0].icon == "02n"
      ) {
        setImg(fewCloud);
      } else if (
        apiData.weather[0].icon == "03d" ||
        apiData.weather[0].icon == "03n"
      ) {
        setImg(scattered);
      } else if (
        apiData.weather[0].icon == "04d" ||
        apiData.weather[0].icon == "04n"
      ) {
        setImg(cloud);
      } else if (
        apiData.weather[0].icon == "09d" ||
        apiData.weather[0].icon == "09n"
      ) {
        setImg(showerRain);
      } else if (
        apiData.weather[0].icon == "10d" ||
        apiData.weather[0].icon == "10n"
      ) {
        setImg(rain);
      } else if (
        apiData.weather[0].icon == "11d" ||
        apiData.weather[0].icon == "11n"
      ) {
        setImg(thunderstorm);
      } else if (
        apiData.weather[0].icon == "13d" ||
        apiData.weather[0].icon == "13n"
      ) {
        setImg(snow);
      } else if (
        apiData.weather[0].icon == "50d" ||
        apiData.weather[0].icon == "50n"
      ) {
        setImg(fog);
      }
    }
  }, [apiData]);

  return (
    <>
      <section className="weather">
        <div className="weather__container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              search();
            }}
            className="inputBox"
          >
            <input type="text" ref={cityInpValue} />
            <button className="searchBtn" onClick={search}>
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M47.63 12.67c19.85 0 34.8 14.95 34.8 34.8s-16.15 36.01-36 36.01s-34.8-14.95-34.8-34.8s16.15-36.01 36-36.01"
                    opacity=".6"
                    fill="#81d4fa"
                  />
                  <path
                    d="M47.63 12.67c19.85 0 34.8 14.95 34.8 34.8s-16.15 36.01-36 36.01s-34.8-14.95-34.8-34.8s16.15-36.01 36-36.01m-29.61 4.1C-1.66 36.45 8 65.2 15.69 73.05c14.23 14.52 40.83 22.79 60.73 2.88c18.43-18.43 11.81-41.8-1.17-56.09c-8.62-9.48-37.56-22.74-57.23-3.07z"
                    fill="#616161"
                  />
                  <path
                    d="M99.78 90.86l-8.33 8.38l-19.62-19.8s-1.66-3.19 1.62-6.47c3.28-3.28 6.71-1.91 6.71-1.91l19.62 19.8z"
                    fill="#bdbdbd"
                  />
                  <path
                    d="M88.5 76.96c-1.13-.9-5.05-3-9.36 1.28c-4.3 4.28-2.55 7.66-1.7 8.91c0 0 30.53 33.87 31.92 35.27c2.05 2.05 6.26.3 10.16-3.6c3.9-3.9 5.78-7.67 3.58-9.87c-1.79-1.79-33.47-31.09-34.6-31.99z"
                    fill="#616161"
                  />
                  <path
                    d="M43.92 8.64c19.85 0 36 16.15 36 36s-16.15 36-36 36s-36-16.15-36-36s16.15-36 36-36m0-3.96c-22.06 0-39.95 17.89-39.95 39.95s17.89 39.95 39.95 39.95S83.87 66.7 83.87 44.63S65.98 4.68 43.92 4.68z"
                    fill="#bdbdbd"
                  />
                  <ellipse
                    transform="rotate(-45.001 117.004 116.31)"
                    cx="117.01"
                    cy="116.31"
                    rx="9.25"
                    ry="3.56"
                    fill="#424242"
                  />
                  <linearGradient
                    id="IconifyId17ecdb2904d178eab10092"
                    gradientUnits="userSpaceOnUse"
                    x1="20.385"
                    y1="18.024"
                    x2="36.781"
                    y2="44.616"
                  >
                    <stop offset=".285" stopColor="#ffffff" />
                    <stop offset={1} stopColor="#ffffff" stopOpacity={0} />
                  </linearGradient>
                  <path
                    d="M26.52 23.6c-6.52 6.83-9.08 14.39-9.14 22.79c-.02 3.09.41 6.36 2.32 8.78c1.91 2.42 5.7 3.57 8.2 1.76c1.66-1.2 2.35-3.29 3.16-5.16c1.24-2.87 2.97-5.54 5.1-7.84c2.66-2.88 5.92-5.18 8.46-8.16c2.54-2.98 4.35-7.01 3.33-10.8c-1.01-3.71-4.67-6.33-8.48-6.76s-9.19 1.45-12.95 5.39z"
                    fill="url(#IconifyId17ecdb2904d178eab10092)"
                  />
                  <path
                    d="M64.05 75.78c0-.46.22-.88.59-1.15c1.95-1.39 7.2-4.64 11.73-13.28C79 56.31 80 52.11 80.28 50.61c.79-4.24 3.01-2.82 2.7-.08c-.36 3.12-3.07 16.85-16.68 26.38c-.95.67-2.25.03-2.25-1.13z"
                    fill="#ffffff"
                    opacity=".59"
                  />
                  <path
                    d="M26.39 11.39c-.13 1.3-2.34 2.53-2.73 2.78c-2.02 1.3-7.02 3.85-11.59 12.47c-2.13 4.01-3.66 8.14-4.18 10.19c-.85 3.35-3.14 2.68-2.7-.05c.5-3.1 3.85-16.69 17.88-25.58c.99-.62 3.49-1.53 3.32.19z"
                    fill="#ffffff"
                    opacity=".59"
                  />
                  <linearGradient
                    id="IconifyId17ecdb2904d178eab10093"
                    gradientUnits="userSpaceOnUse"
                    x1="58.951"
                    y1="95.509"
                    x2="63.085"
                    y2="52.792"
                  >
                    <stop offset=".285" stopColor="#ffffff" />
                    <stop offset={1} stopColor="#ffffff" stopOpacity={0} />
                  </linearGradient>
                  <path
                    d="M55.92 73.93c-4.45.81-5.77-1.05-5.21-2.9c.44-1.47 2.08-2.1 3.55-2.54c7.84-2.35 14.46-8.84 19.27-15.28c.11 5.59-1.36 8.83-4.05 12.15c-2.63 3.23-6.72 7.32-13.56 8.57z"
                    fill="url(#IconifyId17ecdb2904d178eab10093)"
                  />
                </g>
              </svg>
            </button>
          </form>
          <div className="weatherInfo">
            <img src={img} alt="weather icon" />
            <h1 className="cityName">
              {apiData ? apiData.name + "," : "city name"}
              {apiData && apiData.sys.country}
            </h1>
            <h3 className="info">
              Humidity💧{apiData ? ":" + apiData.main.humidity : ""}
            </h3>
            <h3 className="info right">
              Wind speed🍃 {apiData ? ":" + apiData.wind.speed + "km/h" : ""}
            </h3>
            <h3 className="info">
              Temperature🔥 {apiData ? ": " + apiData.main.temp + "℃" : ""}
            </h3>
            <h3 className="info right">
              Weather ☁ {apiData ? ": " + apiData.weather[0].main : ""}
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
