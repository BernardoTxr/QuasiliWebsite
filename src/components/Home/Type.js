import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Consultoria de Dados",
          "Desenvolvimento de Software",
          "Consultoria em TI",
          "Inteligência Artificial",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
