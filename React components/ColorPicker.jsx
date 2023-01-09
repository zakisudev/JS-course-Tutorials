const ColorPicker = ({ selectedColor, onColorChange }) => {
  return (
    <input
      type="color"
      value={selectedColor}
      onChange={(e) => onColorChange(e.target.value)}
    />
  );
};

export default ColorPicker;
