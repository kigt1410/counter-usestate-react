import React from 'react';
import '../styles/Button.css';

// export const Button = ({ text, isResetBtn, handleClick }) => {
//   return (
//     <button 
//        className={isResetBtn ? "btn-reset" : "btn-click"} 
//        onClick={handleClick}>
//        {text}
//     </button>
//   );
// }

function Button({ text, isResetBtn, handleClick }) {
  return (
    <button 
      className = { isResetBtn ? "btn-reset" : "btn-click" } 
      onClick = {handleClick}>
      { text }
    </button>
  );
}

export default Button;