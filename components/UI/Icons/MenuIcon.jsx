import React from "react";

function MenuIcon({ className, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="30px"
      viewBox="0 0 72 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 48H72V40H0V48ZM0 28H72V20H0V28ZM0 0V8H72V0H0Z" fill="black" />
    </svg>
  );
}

export default MenuIcon;
