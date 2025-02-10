import './App.css'
import Header from './components/Header'
import Restaurant from './components/Restaurant'
import RestaurantList from './components/RestaurantList'
import resData from './utils/resData'

function App() {

  return (
    <>
     <div className="w-screen h-screen overflow-x-hidden">
      <Header/>
      <Restaurant/>
      <RestaurantList resData = {resData}/>
     </div>
    </>
  )
}

export default App
