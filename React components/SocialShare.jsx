const SocialShare = ({ url, text }) => {
  return (
    <div>
      <a
        href={`https://facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>
    </div>
  );
};

export default SocialShare;
