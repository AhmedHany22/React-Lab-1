import React from 'react';
import Card from "../components/Card/Card";

export default class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      dataList: [
        {courseName: "Ui/UX Design", bgBack: "#b2babb"},
        {courseName: "Web Design",  bgBack: "#000"},
        {courseName: "PWA Development",bgBack: " #b2babb"},
        {courseName: "Web Development",   bgBack: "#000"},
        {courseName: "Games Development ",bgBack: "#b2babb"},
        {courseName: "Web Application Development",bgBack: " #000"}
      ]
    }
  }
  render() {
    return (
      <>
      <div className="container my-5 mr-4">
        <h1 className="my-5" >Portfolio</h1>
        <div className="container row row-cols-4">
          {this.state.dataList.map(data =>{return <Card userData = {data}/>})}
          <div className = "clear" ></div>
        </div>
      </div>
      </>
    )
  }
}
