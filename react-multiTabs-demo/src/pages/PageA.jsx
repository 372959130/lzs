import React, { useState } from "react";

function PageA() {
  const [state, setState] = useState("");
  return (
    <div>
      <h1>Hello PageA</h1>
      <input
        placeholder="PageA"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}

export default PageA;
