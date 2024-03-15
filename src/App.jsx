import Header from "./Components/Header"
import Banner from "./Components/Banner"
import './App.css'
import Recipe from "./Components/recipies/Recipe"
import Cards from "./Components/Recipiecards/Cards"
import LeftSide from "./Components/LeftSideCards/LeftSide"
function App() {
  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <Recipe></Recipe>
     <div className="grid grid-cols-12 mx-12">
        <div className="col-span-8">
          <Cards></Cards>
        </div>
        <div className="col-span-4">
          <LeftSide></LeftSide>
        </div>
     </div>
    </>
  )
}

export default App
