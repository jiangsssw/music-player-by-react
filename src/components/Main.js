require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
 import HeaderComponents from './header';
 import ProgressComponents from './progress';


class AppComponent extends React.Component {
  

  getInitialState(){
    return {
      progress :'-1123'
    }
  }
  componentDidMount(){
    // $('.progress-component').jPlayer({
    //   ready:function(){
    //     $(this).jPlayer('setMedia',{
    //       mp3:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
    //     }).jPlayer('play');
    //   },
    //   supplied:'mp3',
    //   wmode:'window'
    // }
    // );
    // $('.progress-component').bind($.jPlayer.event.timeupdate,(e)=>{
    //   this.setState({
    //     progress: 'Math.round(e.jPlayer.status.currentTime)'
    //   });
    // })
    this.setState({
      progress: 'Math.round(e.jPlayer.status.currentTime)'
    });
    console.log(this.state.progress);
  }
  render() {
    return (
      <div className="index">
      <HeaderComponents/>
      <ProgressComponents />
      </div>
    );
  }
}

// class HeaderComponents extends React.Component{
//   render(){
//       return (<div className="component-header">
//       <img/>
//       <h1 className="caption">Music player</h1>
//       </div>);
//   }


// }
AppComponent.defaultProps = {
};

export default AppComponent;
