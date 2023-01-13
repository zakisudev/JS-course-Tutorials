const AnimatedModal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AnimatedModal;
