export default function Table({cookItem}) {
  return (
    <div className="p-5">
       <h1  className="text-2xl font-bold mb-2 text-center"> Want to cook:{cookItem}</h1>
       <hr />
        <table className="text-gray-600 mb-2 mt-2">
            <thead>
            <tr>
                <th className="pr-10">Name</th>
                <th>Time</th>
                <th className="pl-10">Calories</th>
            </tr>
            </thead>
        </table>
   </div>
  )
}
