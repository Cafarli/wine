import React, {Component} from "react";
import './wine.css';

export default class Wine extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
          <div className="wines">
              <h3>{this.props.title}</h3>
              <p>{this.props.description}</p>
              <p>{this.props.rating}</p>
              {this.props.like?<p>♥️</p>:null}
          </div>
        );
     }
}