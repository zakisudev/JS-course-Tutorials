const Rating = ({ value, onChange }) => {
  return (
    <div>
      <input type="range" min="1" max="5" value={value} onChange={onChange} />
      <span>{value}</span>
    </div>
  );
};

export default Rating;
