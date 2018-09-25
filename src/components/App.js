import React from 'react';
import Menu from './Menu';
import Restaurant from './Restaurants';
import Header from './header';

const restaurants = [
  {
    address: "Oxford Circus",
    telephone: "02071234455"
  },
  {
    address: "Chelsea",
    telephone: "02071234466"
  },
  {
    address: "Mayfair",
    telephone: "02071234477"
  }
]

const menuItems = [
  {
      id: 1,
      name: "Margherita",
      price: 9.99
  },
  {
      id: 2,
      name: "Pepperoni",
      price: 10.99
  },
  {
      id: 3,
      name: "Vege Supreme",
      price: 11.99
  }
];

const headerObject = {
  name: "Davide & Zuberio's Top Best Mega Pizza",
  src: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/alpine_pizza_32132_16x9.jpg"
};

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
      <Header heading={headerObject.name} image={headerObject.src}/>
      <div className="content">
        <div className="menu">
          <ul>
            {menuItems.map(menuItem => <Menu key={menuItem.id} name={menuItem.name} price={menuItem.price}/>)}
          </ul>
        </div>
        <div className="locations">
          <ul>
          {restaurants.map(restaurant => <Restaurant key={restaurant.address} address={restaurant.address} telephone={restaurant.telephone}/>)}
          </ul>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
