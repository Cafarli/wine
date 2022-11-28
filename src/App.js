import './App.css';
import React, { Component } from 'react';
import Wine from './wine';

var products =  [
  {title:'wine 1',
  description:'Made in Baku',
  rating:'4.0',
  like:true},
  
  {title:'wine 2',
  description:'Made in Baku',
  rating:'4.2',
  like:false}
]

export default class App extends Component{
  render(){
    return(
      <div>
        {products.map((item,index) => (
          
           <Wine key={index} 
                title={item.title} 
                description={item.description}
                rating={item.rating}
                like={item.like} />
        ))}
      </div>
    )
  }
}
  

