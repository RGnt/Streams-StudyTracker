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
      {/* <h1>Be right back ~5mins fresh drink and hastening my early demise!</h1> */}
      {sections.map((section) => {
        return <SectionCard key={section.guid} SectionName={section.SectionName} parts={section.Parts}/>
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
