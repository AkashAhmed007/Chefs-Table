
export default function Cooking({cooked}) {
  return (
    <div className="p-8">
       <h1  className="text-2xl font-bold mb-3 text-center">Currently Cooking:{cooked}</h1>
       <hr />
        <table className="text-gray-600 mb-2 mt-2">
            <thead>
            <tr>
                <th className="pr-40">Name</th>
                <th>Time</th>
                <th className="pl-20">Calories</th>
            </tr>
            </thead>
        </table>
   </div>
  )
}
