const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span>Toggle</span>
    </label>
  );
};

export default ToggleSwitch;
