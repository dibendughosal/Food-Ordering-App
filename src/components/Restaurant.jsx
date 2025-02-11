import RestaurantCard from './RestaurantCard';
import '../App.css';
function Restaurant(){
    return (
      <div className="w-full">
        <div className="flex justify-center">
          <input type="text" placeholder="Search for Restaurants, cuisine or a dish" className='w-[400px] border border-gray-300 py-[10px] rounded-l-2xl px-4 h-[50px]'/>
          <button className='w-200px py-[10px] px-5 border-2 border-gray-300 bg-[#f15928] rounded-r-2xl text-white font-bold h-[50.5px]' >Search</button>
        </div>
        <div className='flex gap-5 w-full px-[40px] h-[500px] pt-[40px] flex-wrap justify-center'>
          <RestaurantCard src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" title="Order Online" subtitle="Stay home and order to your doorstep"/>
          <RestaurantCard src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" title="Dining" subtitle="View the city's favourite dining venues"/>
          <RestaurantCard src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*" title="Live Events" subtitle="Discover India's best events & concerts"/>
        </div>
        <h1 className='relative top-[-120px] px-[80px] font-extrabold text-[26px] transform-stroke stroke-[10px] text-red-600 specialFont inline-block'>Restaurents..
          <div className='flex gap-2'>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
            <div className='w-2 h-2 bg-indigo-800 rounded-[50%]'></div>
          </div>
        </h1>
      </div>
    )
}
export default Restaurant;