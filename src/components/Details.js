import React from "react";
import Status from "./sidecomponents/Status";

// Parameter sollte hier ein ein Objekt sein, das alle Daten enthält, die man braucht
/*
const Details = ({ firstname, lastname, status }) => {
  const sparkle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      className="stroke-2 stroke-gray-950 fill-none mt-0.5 mr-1"
    >
      <path d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.492 7.492 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.492 7.492 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.492 7.492 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.492 7.492 0 0 0 4.464-4.464Z"></path>
    </svg>
  );

  return (
    <div className="h-96 border-2 pt-5 pl-6 mb-3 bg-gray-50 rounded-2xl border-gray-300">
      <h1 className="text-2xl font-bold mb-2">
        {firstname} {lastname}
      </h1>
      <div className="inline-flex">
        {sparkle}
        <p className="mr-5">Status</p>
        <Status status={status} />
      </div>
      <p className="font-bold pt-5">Autodetails</p>
      <div className="grid grid-cols-3">
        <div>Kennezichen</div>
        <div>Hersteller</div>
        <div>Modell</div>
      </div>
      <p className="font-bold pt-5"> Sonstige Anmerkungen</p>
    </div>
  );
};
*/

const Details = ({ person }) => {
  const sparkle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      className="stroke-2 stroke-gray-950 fill-none mt-0.5 mr-1"
    >
      <path d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.492 7.492 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.492 7.492 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.492 7.492 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.492 7.492 0 0 0 4.464-4.464Z"></path>
    </svg>
  );

  return (
    <div className="h-96 border-2 pt-5 pl-6 mb-3 bg-gray-50 rounded-2xl border-gray-300">
      <h1 className="text-2xl font-bold mb-2">
        {person.firstname} {person.lastname}
      </h1>
      <div className="inline-flex">
        {sparkle}
        <p className="mr-5">Status</p>
        <Status status={person.status} />
      </div>
      <p className="font-bold pt-5">Autodetails</p>
      <div className="grid grid-cols-3">
        <div>Kennzeichen</div>
        <div>Hersteller</div>
        <div>Modell</div>
      </div>
      <p className="font-bold pt-5"> Sonstige Anmerkungen</p>
    </div>
  );
};

export default Details;
