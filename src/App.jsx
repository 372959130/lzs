import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ActionSheet, Button } from "antd-mobile";

const actions = [
  { text: "复制", key: "copy" },
  { text: "修改", key: "edit" },
  { text: "保存", key: "save" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspack + React</h1>
      <div className="card">
        <Button color="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>

      {/* 出bug的组件 */}
      <ActionSheet
        extra="请选择你要进行的操作"
        visible={true}
        cancelText="取消"
        actions={actions}
        closeOnMaskClick={false}
        popupClassName="action-sheet-common"
        onClose={() => {}}
      />
    </div>
  );
}

export default App;
