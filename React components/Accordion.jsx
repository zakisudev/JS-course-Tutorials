const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3 onClick={() => setIsOpen(!isOpen)}>{title}</h3>
      {isOpen && <p>{content}</p>}
    </div>
  );
};

export default Accordion;
