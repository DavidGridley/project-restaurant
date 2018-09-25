import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header><h1>{this.props.heading}</h1></header>
                <img src={this.props.image}></img>
            </React.Fragment>
        )
    }
}

export default Header;