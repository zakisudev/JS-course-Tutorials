const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} onClick={() => handleClick(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
