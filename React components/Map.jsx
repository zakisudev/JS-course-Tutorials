const Map = ({ coordinates }) => {
  return (
    <iframe
      title="Map"
      src={`https://maps.google.com/maps?q=${coordinates}&output=embed`}
      frameBorder="0"
      style={{ border: '0', width: '100%', height: '300px' }}
      allowFullScreen
    ></iframe>
  );
};

export default Map;
