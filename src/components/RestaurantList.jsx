import { useState } from 'react';
import resData from '../utils/resData';
const RestaurantList = () => {
    let [resList, setResList] = useState(resData);


    return (
        <>
        <div className='relative -top-25 flex gap-2 px-[80px]'>
            <button className='font-medium border border-gray-300 px-3 mb-5 rounded-md' onClick={() => {
                let filteredList = resList.filter((resListItem) => resListItem.info.avgRating > 4.3);
                setResList(filteredList);
            }}>Top-Rated Restaurent</button>
            <button className='font-medium border border-gray-300 px-3 mb-5 rounded-md' onClick={() => {
                let filterPrice = resList.filter((resListItem) => {

                    let costForTwo =  resListItem.info.costForTwo
                    let cost = Number(costForTwo.replace(/\D/g, ""));
                    return cost <=300;
        });
        setResList(filterPrice)
            }}>Low Price Restaurent</button>
        </div>
        <div className='flex flex-wrap justify-between gap-5 px-[60px] relative top-[-100px]'>
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
        </>
    );
};

export default RestaurantList;
