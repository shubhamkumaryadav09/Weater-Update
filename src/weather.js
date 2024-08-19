export const Weather = ({ data }) => {
  const infoName = {
    fontSize: 18,
  };
  const infoNum = {
    fontSize: 35,
  };

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <div>
          <div className="box">
            <div className="temp box">{Math.round(data.main.temp)}°C</div>
            <div className="weather-desc box">{data.weather[0].main}</div>
          </div>
          <div className="location-name box">
            {data.name}, {data.sys.country}
          </div>
          <div className="weather-details">
            <div className="humidity info">
              <span style={infoName}>Humidity</span>
              <br></br>
              <span style={infoNum}>{data.main.humidity}%</span>
            </div>
            <div className="pressure info">
              <span style={infoName}>Pressure</span>
              <br></br>
              <span style={infoNum}>{data.main.pressure}mb</span>
            </div>
            <div className="windspeed info">
              <span style={infoName}>Wind Speed</span>
              <br></br>
              <span style={infoNum}>{data.wind.speed}m/sec</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="weather-no-query">Enter a location</div>
      )}
    </div>
  );
};
