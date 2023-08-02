import React, { useState } from "react";

function FavoriteButton() {
  const [solid, setSolid] = useState(false);

  return (
    <>
      <i
        className={solid ? `fa-solid fa-heart` : `fa-regular fa-heart`}
        onClick={() => setSolid(!solid)}
      ></i>
    </>
  );
}
export default FavoriteButton;
