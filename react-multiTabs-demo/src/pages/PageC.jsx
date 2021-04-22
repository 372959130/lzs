import React, { useState } from "react";

function PageC() {
  const [state, setState] = useState("");
  return (
    <div>
      <h1>Hello PageC</h1>
      <input
        placeholder="PageC"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}

export default PageC;
