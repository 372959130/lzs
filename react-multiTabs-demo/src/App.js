import React, { useMemo, useEffect, lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

const routerConfig = {
  pageA: lazy(() => import("./pages/PageA")),
  pageB: lazy(() => import("./pages/PageB")),
  pageC: lazy(() => import("./pages/PageC")),
};

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">登陆页面</Link>
        </li>
        <li>
          <Link to="/nav/pageA">导航页面</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/nav/:__pageId__" component={PageContainer} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>我是登陆页</h2>
  </div>
);

const PageContainer = () => {
  const history = useHistory();
  const params = useParams();
  console.log("history", history, params);

  const [pages, setPages] = useState({});

  const currentPage = useMemo(() => {
    return routerConfig[params.__pageId__];
  }, [params.__pageId__]);

  useEffect(() => {
    setPages({ ...pages, [params.__pageId__]: currentPage });
    return () => {
      console.log("--------- leave ----------");
    };
  }, [currentPage]);

  const removePage = (pageKey) => {
    delete pages[pageKey];
    setPages({ ...pages });
  };

  return (
    <div style={{ margin: 10, padding: 14, border: "1px solid #444" }}>
      <h2>tabs菜单导航</h2>
      <ul>
        {Object.keys(routerConfig).map((pageId) => (
          <li key={pageId}>
            <Link to={`/nav/${pageId}`}>点击加载{pageId}</Link>
          </li>
        ))}
      </ul>

      <h2>多tabs内容展示</h2>
      <ul>
        {Object.keys(pages).map((item) => {
          <li>{item}</li>;
        })}
      </ul>

      {Object.entries(pages).map((page) => {
        const pageId = page[0];
        const pageComponent = page[1];
        return (
          <div key={pageId} style={{ border: "1px solid red", marginTop: 20 }}>
            <button
              onClick={() => {
                removePage(pageId);
              }}
            >
              关闭当前tab
            </button>
            <Suspense fallback={<div>loading...</div>}>
              {React.createElement(pageComponent, {})}
            </Suspense>
          </div>
        );
      })}
    </div>
  );
};

export default App;
