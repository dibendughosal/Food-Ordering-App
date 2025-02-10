

const RestaurantList = (props) => {
    const { resData } = props;
  return (
    <div className='flex border'>
        {resData.map(resData) => {

            return(
                <div key={resData.info.id} className="flex flex-col w-[310px] ">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/` + resData.info.cloudinaryImageId} alt="" />
                    <h3>{resData.info.name}</h3>
                    <h4>{resData.info.cuisines.join(", ")}</h4>
                    <h4>{resData.info.costForTwo}</h4>
                    <h4>{resData.info.avgRating} ⭐</h4>
                    <h4>{resData.info.sla.deliveryTime} minutes</h4>
                </div>
            );
        })}
    </div>
  );
};

export default RestaurantList;
