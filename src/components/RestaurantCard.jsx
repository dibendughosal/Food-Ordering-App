const RestaurantCard = ( {src, title, subtitle} ) => {
    return (
      <div className="h-[230px] flex flex-col w-[360px] border border-gray-200 rounded-2xl overflow-hidden hover:scale-[1.03] transition duration-200">
        <img src={src} alt="Restaurant" className='h-[160px] object-cover' />
        <div className="h-[84px] text-[#363636] px-5 py-2">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-[1rem] text-[#4f4f4f]">{subtitle}</p>
        </div>
      </div>
    )
}
export default RestaurantCard;

