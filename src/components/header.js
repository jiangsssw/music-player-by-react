import React from 'react'

class HeaderComponents extends React.Component{
    render(){
        return (<div className="component-header">
        <img/>
        <h1 className="caption">Music player</h1>
        </div>);
    }


}

HeaderComponents.defaultProps = {
};

export default HeaderComponents;