const Stepper = ({ steps, currentStep, onNext, onPrev }) => {
  return (
    <div>
      <button disabled={currentStep === 0} onClick={onPrev}>
        Previous
      </button>
      <span>{`Step ${currentStep + 1} of ${steps}`}</span>
      <button disabled={currentStep === steps - 1} onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Stepper;
