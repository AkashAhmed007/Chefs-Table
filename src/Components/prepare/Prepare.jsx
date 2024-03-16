export default function Prepare({item,index}) {
  return (
    <>
    <div className="bg-slate-200 mb-3">
        <div className="flex justify-between items-start gap-4 p-3">
            {index + 1}
            <p>{item.recipe_name}</p>
            <p>{item.preparing_time}</p>
            <p>{item.calories}</p>
        </div>
    </div>
    </>
  )
}
