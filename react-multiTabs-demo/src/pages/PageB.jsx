import React, { useState } from "react";

function PageB() {
  const [state, setState] = useState("");
  return (
    <div>
      <h1>Hello PageB</h1>
      <input
        placeholder="PageB"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}

export default PageB;
