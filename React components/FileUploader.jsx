const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return <input type="file" onChange={handleFileChange} />;
};

export default FileUploader;
