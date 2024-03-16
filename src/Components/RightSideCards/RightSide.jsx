export default function RightSide({item,index}) {
  return (
    <div className="bg-slate-200 mb-3">
        <div className="flex justify-between items-start gap-8 p-3">
        {index+1}
        <p>{item.recipe_name}</p>
          <p>{item.preparing_time}</p>
          <p>{item.calories}</p>
          <button className="px-5 py-2 bg-[#0be58a] rounded-full mr-5">Preparing</button>
        </div>
    </div>
  )
}
