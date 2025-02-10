const RestaurantList = (props) => {
    const { resData } = props;
    return (
        <div className='flex flex-wrap justify-between gap-5 px-[60px] relative top-[-100px]'>
            {resData.map((restaurant) => {
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
    );
};

export default RestaurantList;
