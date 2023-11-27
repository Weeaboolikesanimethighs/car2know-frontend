import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sparkle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    class="fill-gray-50"
  >
    <path d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.492 7.492 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.492 7.492 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.492 7.492 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.492 7.492 0 0 0 4.464-4.464Z"></path>
  </svg>
);

const Details = () => {
  return (
    <div className="h-96 border-2 pt-5 pl-6 mb-3 bg-gray-50 rounded-2xl border-gray-300">
      <h1 className="text-2xl font-bold mb-2">Gabriel Montemayor</h1>
      <p>{sparkle} Status</p>
    </div>
  );
};

export default Details;
