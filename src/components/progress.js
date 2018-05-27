import React,{Component} from 'react'
import './progress.less'
class ProgressComponents extends Component{
    handleChange(e){
      
        let progressBar= this.refs.progressBar;
        let progress=(e.clientX-progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
       this.props.componentChange(progress);
    //    console.log(progress);
    //    e.preventDefault();
    //    e.stopPropagation();
    }
    
    render(){
        return (<div>
        <div className="progress-component" ref='progressBar'
         onClick={this.handleChange.bind(this)}>
        <div className="progress" style={{width:this.props.progress+'%'}}>
        </div>
        </div>
        </div>)
    }
}
export default ProgressComponents;