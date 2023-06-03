import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

let cssStyle={

}

let greeting ='';
let currentTime= new Date(2023,6,4,12).getHours();
if(currentTime>=1&&currentTime<12)
{
  greeting='Good Morning';
  cssStyle.color="green";
}
else if(currentTime>=12&&currentTime<19)
{
 greeting='Good Afternoon';
 cssStyle.color="orange";
}
else
{
  greeting='Good night';
  cssStyle.color="purple";
}

ReactDOM.render(
  <>
  <div className="out">
  <h1>Hello Gourav, <span style={cssStyle}>{greeting}</span></h1>
  </div>
  </>,document.getElementById('root'));