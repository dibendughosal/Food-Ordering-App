import './App.css'
import Header from './components/Header'
import RestaurantList from './components/RestaurantList'
import resData from './utils/resData'

function App() {

  return (
    <>
     <div className="w-screen h-screen overflow-x-hidden">
      <Header/>
      <RestaurantList resData = {resData}/>
     </div>
    </>
  )
}

export default App;


