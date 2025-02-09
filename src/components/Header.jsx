function Header(){
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt="Logo" className />
        </div>
        <div className="">
          <ul className="flex gap-4">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About Us</li></a>
            <a href="#"><li>Contact Us</li></a>
            <a href="#"><li>Cart</li></a>
            
          </ul>
        </div>
      </div>
    )
  }

export default Header;