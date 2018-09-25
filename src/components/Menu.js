import React from 'react';




class Menu extends React.Component{
    render(){
        return (
                <li>{this.props.name}: {this.props.price}</li>
        );
    }
}

export default Menu;