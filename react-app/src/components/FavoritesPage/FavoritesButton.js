// import React, { useState } from "react";

// function FavoriteButton({ productId, handleUnfavoriteClick, initialState }) {
//   const [solid, setSolid] = useState(initialState);
//   //   console.log("this is solid value", solid);
//   //   console.log("this is the product id", productId);

//   const handleFavorite = (productId) => {
//     if (solid === false) {
//       setSolid(!solid);
//       handleUnfavoriteClick(productId);
//     } else {
//       setSolid(!solid);
//       handleUnfavoriteClick(productId);
//     }
//   };

//   return (
//     <>
//       <i
//         className={solid ? `fa-solid fa-heart` : `fa-regular fa-heart`}
//         onClick={() => handleFavorite(productId)}
//       ></i>
//     </>
//   );
// }
// export default FavoriteButton;
