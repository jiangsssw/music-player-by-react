import React from 'react'

class ProgressComponents extends React.Component{
    render(){
        return (<div className="progress-component">
        {this.props.progress}s
        </div>)
    }
}
export default ProgressComponents;