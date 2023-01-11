const AnimatedCounter = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        setCurrentNumber((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentNumber, targetNumber]);

  return <div>{currentNumber}</div>;
};

export default AnimatedCounter;
