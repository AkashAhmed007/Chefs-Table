import { useEffect, useState } from "react"
import Card from "../card/Card";
export default function Cards({handleCard}) {
  const [cards,setCards] = useState([]);

  useEffect(()=>{
    fetch('recipie.json')
    .then(res => res.json())
    .then(data => setCards(data));
  },[])

  return (
    <>
     {
      cards.map((card) =><Card key={card.recipe_id} card={card} handleCard={handleCard}></Card>)
     }
    </>
  )
}


