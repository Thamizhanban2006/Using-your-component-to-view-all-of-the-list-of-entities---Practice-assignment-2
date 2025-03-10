import { useState } from "react";


const LikeButton = ({ initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "❤" : "🤍"}
    </button>
  );
};

export default LikeButton;