require('normalize.css/normalize.css');
require('styles/App.css');

import React,{Component}from 'react';
 import HeaderComponents from './header';
 import ProgressComponents from './progress';

let duration = null;
class AppComponent extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      progress:'sds'
    };
  }
  componentDidMount(){
    $('#player').jPlayer({
      ready:function(){
        $(this).jPlayer('setMedia',{
          mp3:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
        }).jPlayer('play');
      },
      supplied:'mp3',
      wmode:'window'
    }
    );
    $('.player').bind($.jPlayer.event.timeupdate,(e) => {
      duration = e.jPlayer.status.duration;
      this.setState({
        progress: Math.round(e.jPlayer.status.currentPercentAbsolute)
      });
    });
    // this.setState({
    //   progress: 'Math.round(e.jPlayer.status.currentTime)'
    // });
  }
componentWillUnmount(){
  $('.player').unbind($.jPlayer.event.timeupdate);
}
progressHandleChange(progress){
  $('#player').jPlayer('play',duration*progress);
  console.log('progress='+progress);
  
}

  render() {
    return (
      <div className="index">
      <HeaderComponents/>
      <ProgressComponents componentChange={this.progressHandleChange} progress={this.state.progress}/>
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
