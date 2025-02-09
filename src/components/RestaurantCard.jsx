import '../App.css';
const RestaurantCard = () => {
    return (
      <div className="restaurant-card">
        <img src="https://biryanimenu.com/wp-content/uploads/2023/11/Dada-Boudi-Biriyani-min-1024x576.png" alt="Restaurant" className='w-[200px]' />
        <h3>Dada Boudi Restaurant</h3>
        <p>Mutton Biriyani</p>
        <p>4.4 ⭐</p>
        <button>Order Now</button>
      </div>
    )
}
export default RestaurantCard;