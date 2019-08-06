import React from "react";
import Spinner from 'react-bootstrap/Spinner';
//import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Loader(props) {
  return (
    <Spinner
        as="span"
        animation="border"
        size="sm"
        variant="light"
        role="status"
        aria-hidden="true"
    />
  );
}

export default Loader;