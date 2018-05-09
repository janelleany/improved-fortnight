import React, { Component } from 'react';


import '../styles/NewContest.css';



class NewContest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "", 
      style: "",
      placement: "",
      color: "",
      type: "",
      size: "",
      experience: "",
      zip: "",
      numberOfSubmissions: "",
      daysLeft: "",
      images: [],
      canvasId: ""
    }
  }

    render() {
      return (
        <form className="new-contest-container">
  
        </form>
      );
    }
}

export default NewContest;