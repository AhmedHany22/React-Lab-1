import React from "react";
import Header from "./components/Header/Header";
import About  from "./components/About/About";
import Skills  from "./container/SkillContainer";
import Portfolio  from "./container/Portfolio"
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </>
    );
  }
}
