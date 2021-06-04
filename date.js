import React from 'react';

export default class date extends React.Component {

    state={
     myCurrentTime: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
      };
      callMe(){
           setInterval(()=>{
               
           },1000);
      }
    render(){
             return(
               this.state.myCurrentTime
                  )
           }
}