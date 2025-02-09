function Header(){
    return (
      <div className="flex justify-between items-center px-[80px]">
        <div className="logo-container">
          <img src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt="Logo" className ='w-[150px] h-[100px] object-fit' />
        </div>
          <ul className="flex gap-4 font-bold px-8 ">
            <a href="#" className="hover:text-[#f15928] transition duration-200"><li>Home</li></a>
            <a href="#" className="hover:text-[#f15928] transition duration-200"><li>Add Restaurant</li></a>
            <a href="#" className="hover:text-[#f15928] transition duration-200"><li>Investor Relation</li></a>
            <a href="#" className="hover:text-[#f15928] transition duration-200"><li>Login</li></a>
            <a href="#" className="hover:text-[#f15928] transition duration-200"><li>Sign Up</li></a>
            
          </ul>
      </div>
    )
  }

export default Header;