import React, { Component } from 'react';
import "./About.css";
import head_shot from "../assets/head_shot.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={head_shot}
          alt="No Pic"
          width="200" height="200"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Luis Migurel</div>
        <div className="brief_description">
           I love staying active, going to the gym, swimming, playing soccer.
           I'm always trying to improve myself, culturally, physically, and spiritually.
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}