import image from '../../assets/time.png';
import image2 from '../../assets/calories.png';
export default function Card({card}) {
  return (
    <div className="card w-1/2 min-h-screen bg-base-100 shadow-xl mb-3">
        <figure className="px-10 pt-10">
        <img src= {card.recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-2">{card.recipe_name}</h2>
            <p className='mb-4 text-gray-600'>{card.short_description}</p>
            <hr/>
            <p className='font-bold mt-2'>Ingredients: {card.ingredients.length}</p>
            <ol>
                <li>1. {card.ingredients[0]}</li>
                <li>2. {card.ingredients[1]}</li>
                <li>3. {card.ingredients[2]}</li>
            </ol>
        </div>
        <div className='flex items-center gap-4 pl-8 pb-2 mb-2'>
            <div className='flex gap-3 mb-2'>
                <img className="text-3xl" src={image} alt="time-picture" />
                <p>{card.preparing_time}</p> 
            </div>
            <div className='flex gap-3'>
                <img className="text-3xl" src={image2} alt="time-picture" />
                <p>{card.preparing_time}</p> 
            </div>
        </div>
        <button className='px-5 py-2 bg-[#0be58a] rounded-full ml-5'>Want to Cook</button>

    </div>   
  )
}
