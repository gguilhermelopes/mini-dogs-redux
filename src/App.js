import React from "react";
import Header from "./Components/Header";
import "./App.css";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/login";
import Content from "./Components/Content";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <main>
        <Content />
      </main>
    </div>
  );
};

export default App;
