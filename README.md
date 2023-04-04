## 本地运行

`yarn install`
`yarn dev`

## 报错原因

`rspack.config.js`
1、启用 presetEnv 配置

`App.jsx`
2、使用 import { ActionSheet } from "antd-mobile";

```jsx
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
      <div className="card">

        {/* Button组件不会有问题 */}
        <Button color="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>

      {/* 出bug的组件ActionSheet */}
      <ActionSheet
        extra="请选择你要进行的操作"
        visible={true}
        cancelText="取消"
        actions={actions}
        closeOnMaskClick={false}
        popupClassName="action-sheet-common"
        onClose={() => setIsActionSheetShow(false)}
      />
    </div>
  );
}
```

额外说明：
#### 如果不配置presetEnv，不会报错
#### 如果不使用ActionSheet，不会报错