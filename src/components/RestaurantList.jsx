import { useState, useEffect } from 'react';
import resData from '../utils/resData';
import RestaurantCard from './RestaurantCard';
const RestaurantList = () => {
    const [resList, setResList] = useState(resData);
    const [searchText, setSearchText] = useState("");
    
    const fetchData = async () => {
        try {
            console.log("Fetching data...");
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62449999999&page_type=DESKTOP_WEB_LISTING");
            
            console.log("Response Status:", response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const jsonData = await response.json();
            console.log("API Response:", jsonData);
    
            const restaurants = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            if (!restaurants) {
                throw new Error("No restaurant data found.");
                
            }
    
            setResList(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    
    useEffect(() => {
        console.log('useEffect running...');
        fetchData();
    }, []);

    // if(resList.length === 0){
    //     return <p>Loading...</p>
    // }

    return (
        <>
         <div className="flex justify-center relative">
          <input type="text" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
            }} placeholder="Search for Restaurants, cuisine or a dish" className='w-[400px] border border-gray-300 py-[10px] rounded-l-2xl px-4 h-[50px]'/>

          <button className='w-200px py-[10px] px-5 border-2 border-gray-300 bg-[#f15928] rounded-r-2xl text-white font-bold h-[50.5px]' onClick={ () => {
            console.log(searchText);
            let filteredRes = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
          ); 
          setResList(filteredRes);
          }} >Search</button>
        </div>

        <div className='relative flex gap-5 w-full px-[40px] h-[350px] pt-[40px] flex-wrap justify-center'>
          <RestaurantCard src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" title="Order Online" subtitle="Stay home and order to your doorstep"/>
          <RestaurantCard src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" title="Dining" subtitle="View the city's favourite dining venues"/>
          <RestaurantCard src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*" title="Live Events" subtitle="Discover India's best events & concerts"/>
        </div>

        <div className='w-full h-[500px] flex flex-col gap-2 relative'>
            <div className="w-full flex flex-col gap-2 px-[80px] ">
                <h1 className='font-extrabold text-[26px] text-red-600 specialFont'>Restaurents..
                </h1>
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
            </div>
            <div className='relative py-4 flex gap-2 px-[80px]'>
                <button className='font-medium border border-gray-300 px-3 mb-5 rounded-md' onClick={() => {
                    let filteredList = resList.filter((resListItem) => resListItem.info.avgRating > 4.3);
                    setResList(filteredList);
                }}>Top-Rated Restaurents</button>
                <button className='font-medium border border-gray-300 px-3 mb-5 rounded-md' onClick={() => {
                    let filterPrice = resList.filter((resListItem) => {

                        let costForTwo =  resListItem.info.costForTwo
                        let cost = Number(costForTwo.replace(/\D/g, ""));
                        return cost <=300;
            });
            setResList(filterPrice)
                }}>Low Price Restaurents</button>
            </div>
            <div className='flex flex-wrap justify-between gap-2 px-[80px] relative '>
                {resList.map((restaurant) => {
                    return (
                        <div key={restaurant.info.id} className="flex flex-col w-[387px] h-[427px]  rounded-2xl border border-gray-200 overflow-hidden relative transition hover:scale-[1.02] duration-200 bg-cover">
                            <img 
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${restaurant.info.cloudinaryImageId}`} 
                                alt={restaurant.info.name} 
                            className="h-[250px] w-full" />
                            <h3 className="px-3 py-2 font-bold text-orange-600 text-[18px]">{restaurant.info.name}</h3>
                            <div className="px-3 flex flex-col gap-0.5">
                                <h4 className="font-medium">{restaurant.info.cuisines.join(", ")}</h4>
                                <h4 className="font-extrabold">{restaurant.info.costForTwo}</h4>
                                <h4 className="font-medium">{restaurant.info.avgRating} ⭐</h4>
                                <h4 className="font-light">{restaurant.info.sla.deliveryTime} minutes</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        
        </>
    );
};

export default RestaurantList;
