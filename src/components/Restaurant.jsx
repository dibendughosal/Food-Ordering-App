import RestaurantCard from './RestaurantCard';
import '../App.css';
function Restaurant(){
    return (
      <div className="">
        <div className="flex justify-center">
          <input type="text" placeholder="Search for Restaurants, cuisine or a dish" className='w-[400px] border border-gray-300 py-[10px] rounded-l-2xl px-4 h-[50px]'/>
          <button className='w-200px py-[10px] px-5 border-2 border-gray-300 bg-[#f15928] rounded-r-2xl text-white font-bold h-[50.5px]' >Search</button>
        </div>
        <div className='flex gap-5 w-full px-[40px] h-[500px] py-[40px] flex-wrap justify-center'>
          <RestaurantCard src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" heading="Order Online" para="Stay home and order to your doorstep"/>
          <RestaurantCard src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" heading="Dining" para="View the city's favourite dining venues"/>
          <RestaurantCard src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*" heading="Live Events" para="Discover India's best events & concerts"/>
        </div>
      </div>
    )
}
export default Restaurant;