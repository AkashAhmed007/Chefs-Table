import image from '../../assets/time.png';
import image2 from '../../assets/calories.png';
export default function Card({card,handleCard}) {
  return (
    <div className="card w-1/2 bg-base-100">
        <figure className="p-5">
        <img src= {card.recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-2">{card.recipe_name}</h2>
            <p className='mb-4 text-gray-600'>{card.short_description}</p>
            <hr/>
            <p className='font-bold mt-2'>Ingredients: {card.ingredients.length}</p>
            <ul>
                <li>{card.ingredients[0]}</li>
                <li>{card.ingredients[1]}</li>
                <li>{card.ingredients[2]}</li>
                
            </ul>
        </div>
        <hr/>
        <div className='flex items-center gap-4 pl-8 pb-2 mt-2 mb-2'>
            <div className='flex gap-3 mb-2'>
                <img className="text-3xl" src={image} alt="time-picture" />
                <p>{card.preparing_time}</p> 
            </div>
            <div className='flex gap-3'>
                <img className="text-3xl" src={image2} alt="time-picture" />
                <p>{card.calories}</p> 
            </div>
        </div>
        <button onClick={()=>handleCard(card)} className='px-5 py-2 bg-[#0be58a] rounded-full ml-5 mb-4'>Want to Cook</button>

    </div>   
  )
}
