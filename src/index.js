import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import { fetchSections } from "./redux/SectionSlice";
import SectionCard from "./components/SectionPage/SectionCard";

const App = (props) => {
  const sections = useSelector((state) => state.section.data);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchSections());
  }, []);

  return (
    <div>
      {sections.map((section) => {
        return <SectionCard SectionName={section.SectionName} parts={section.Parts}/>
      })}
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
