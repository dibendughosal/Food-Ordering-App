import './App.css'
import Header from './components/Header'
import Restaurant from './components/Restaurant'

function App() {

  return (
    <>
     <div className="w-screen h-screen overflow-x-hidden">
      <Header/>
      <Restaurant/>
     </div>
    </>
  )
}

export default App
