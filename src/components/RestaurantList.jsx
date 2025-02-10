const RestaurantList = (props) => {
    const { resData } = props;
    return (
        <div className='flex flex-wrap gap-5 border px-[40px]'>
            {resData.map((restaurant) => {
                return (
                    <div key={restaurant.info.id} className="flex flex-col w-[387px] h-[417px]  rounded-2xl border border-gray-200 overflow-hidden">
                        <img 
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${restaurant.info.cloudinaryImageId}`} 
                            alt={restaurant.info.name} 
                        className="h-[250px] w-full" />
                        <h3>{restaurant.info.name}</h3>
                        <h4>{restaurant.info.cuisines.join(", ")}</h4>
                        <h4>{restaurant.info.costForTwo}</h4>
                        <h4>{restaurant.info.avgRating} ⭐</h4>
                        <h4>{restaurant.info.sla.deliveryTime} minutes</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantList;
