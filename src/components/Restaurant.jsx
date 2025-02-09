import RestaurantCard from './RestaurantCard';
import '../App.css';
function Restaurant(){
    return (
      <div className="">
        <div className="search">
          <input type="text" placeholder="Search for food" />
          <button>Search</button>
        </div>
        <div className='restaurants bg-black'>
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
export default Restaurant;