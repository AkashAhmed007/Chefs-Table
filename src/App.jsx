import Header from "./Components/Header"
import Banner from "./Components/Banner"
import './App.css'
import Recipe from "./Components/recipies/Recipe"
import Cards from "./Components/Recipiecards/Cards"
import RightSide from "./Components/RightSideCards/RightSide"
import { useState } from "react"
import Table from "./Components/RightSideCards/Table"

function App() {
const [card,setCard] = useState([]);
const [cookItem,setCookItem] = useState(0);

function handleCard(item){
 const isExist = card.find(i=>i.recipe_id == item.recipe_id) 
 if(!isExist){
  setCard([...card,item]);
  setCookItem(cookItem+1);
 }
 else{
  alert('This item has selected already')
 }
 
}

  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <Recipe></Recipe>
     <div className="flex gap-5 w-10/12 mx-auto">
        <div className="flex flex-wrap">
          <Cards handleCard={handleCard}></Cards>
        </div>
        <div className="w-10/12 border-2 rounded-2xl">
         <Table cookItem={cookItem}></Table>
         {
          card.map((i,index)=><RightSide key={i.recipe_id} item = {i} index={index}></RightSide>)
         }
        </div>
     </div>
    </>
  )
}

export default App
