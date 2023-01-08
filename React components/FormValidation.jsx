const FormValidation = ({ onSubmit, validate }) => {
  const handleSubmit = () => {
    if (validate()) {
      onSubmit();
    } else {
      alert('Form validation failed!');
    }
  };

  return (
    <div>
      {/* Form fields */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormValidation;
