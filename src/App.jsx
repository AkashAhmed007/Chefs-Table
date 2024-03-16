import Header from "./Components/Header"
import Banner from "./Components/Banner"
import './App.css'
import Recipe from "./Components/recipies/Recipe"
import Cards from "./Components/Recipiecards/Cards"
import RightSide from "./Components/RightSideCards/RightSide"
import { useState } from "react"
import Table from "./Components/RightSideCards/Table"
import Prepare from "./Components/prepare/Prepare"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cooking from "./Components/currentCooking/Cooking"


function App() {
const [card,setCard] = useState([]);
const [cookItem,setCookItem] = useState(0);
const [prepare,setPrepare] = useState([]);
const [cooked,setCooked] = useState(0);

function handleCard(item){
 const isExist = card.find(i=>i.recipe_id == item.recipe_id) 
 if(!isExist){
  setCard([...card,item]);
  setCookItem(cookItem+1);
 }
 else{
  toast("You already selected this item!");
 }
 
}

function handlePrepare(item){
  setPrepare([...prepare,item]);
  setCooked(cooked+1)
}
console.log(prepare);
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
          card.map(
          (i,index)=>
          <RightSide key={i.recipe_id} item = {i} index={index}  handlePrepare={handlePrepare}>
          </RightSide>)
         }

          <Cooking cooked={cooked}></Cooking>

         {
          prepare.map((i,index)=><Prepare key={i.recipe_id} item={i} index={index}></Prepare>)
         }
        </div>  
     </div>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
