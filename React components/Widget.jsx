const WeatherWidget = ({ city, temperature, weatherCondition }) => {
  return (
    <div>
      <h3>{city}</h3>
      <p>{temperature}°C</p>
      <p>{weatherCondition}</p>
    </div>
  );
};

export default WeatherWidget;
