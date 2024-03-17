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
const [cookTime,setTime] = useState(0);
const [calories,setCalories] = useState(0);

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

function handlePrepare(item,item2,item3){
  const filter = prepare.filter(i=>i.recipe_id != item);

  setCard(filter)
  setPrepare([...filter,item]);

  setCooked(cooked + 1);
  setCookItem(cookItem - 1);

  let convertedTime = parseInt(item3.slice(0,3));
  let convertedCalories = parseInt(item2.slice(0,3));

  let time = cookTime + convertedTime;
  let newCalories = calories + convertedCalories;
  setTime(time);
  setCalories(newCalories);

}


  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <Recipe></Recipe>
     <div className="container mx-auto flex justify-center gap-5">
        <div className="flex flex-wrap w-1/2 border-2 rounded-xl">
          <Cards handleCard={handleCard}></Cards>
        </div>
        <div className="w-1/2 border-2 rounded-2xl">
         <Table cookItem={cookItem}></Table>
         
         {
          card.map(
          (i,index)=>
          <RightSide key={i.recipe_id} item = {i} index={index}  handlePrepare={handlePrepare}>
          </RightSide>)
         }

          <Cooking cooked={cooked}></Cooking>

         {
          prepare.map((item,index)=><Prepare key={item.recipe_id} item={item} index={index}></Prepare>)
         }
         <div className="text-xl font-bold text-right pr-3">
          <p>Total Time: {cookTime} minutes</p>
          <p>Total Calories: {calories} calories</p>
         </div>
        </div>  
     </div>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
