const Tooltip = ({ text, children }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden', position: 'absolute' }}>{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;
