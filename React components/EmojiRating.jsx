const EmojiRating = ({ onRate }) => {
  const emojis = ['😠', '😟', '😐', '😊', '😃'];

  return (
    <div>
      {emojis.map((emoji, index) => (
        <span key={index} onClick={() => onRate(index + 1)}>
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default EmojiRating;
