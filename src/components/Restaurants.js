import React from 'react';


class Restaurant extends React.Component {
    render(){
        return(
                    <li>{this.props.address}<br></br>{this.props.telephone}</li>
        )
    }
}

export default Restaurant;