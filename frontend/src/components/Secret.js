import React from "react";
import UniqueAddresses from '../unique_addresses.csv';

const Secret = () => {
  return (
    <>
    <h2>Classified Info</h2>
    <div>
        <a href={UniqueAddresses} download="download.csv"> Click Here To Download </a>
    </div>
    </>
  );
};
export default Secret;