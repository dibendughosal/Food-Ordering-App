import './App.css';
function Header(){
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About Us</li></a>
          <a href="#"><li>Contact Us</li></a>
          <a href="#"><li>Cart</li></a>
          
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img src="https://biryanimenu.com/wp-content/uploads/2023/11/Dada-Boudi-Biriyani-min-1024x576.png" alt="Restaurant" className='res-cardImg' />
      <h3>Dada Boudi Restaurant</h3>
      <p>Mutton Biriyani</p>
      <p>4.4 ⭐</p>
      <button>Order Now</button>
    </div>
  )
}

function Body(){
  return (
    <div className="body">
      <div className="content">
        <h1>Welcome to Our Food Delivery Website</h1>
        <p>We provide you with the best food delivery service in town.</p>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for food" />
        <button>Search</button>
      </div>
      <div className='restaurants'>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
}
export default App;