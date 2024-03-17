export default function Header() {
  return (
    <div className="flex justify-around items-center p-5 m-5">
        <h1 className="text-3xl font-bold">Recipe Calories</h1>
        <ul className="flex justify-center items-center gap-8 text-xl text-gray-800">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
        </ul>
        <div className="flex justify-between items-center gap-4 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-2 right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search" className="w-24 md:w-auto outline-none border-1 bg-[#150b2b0d] rounded-full px-8 py-2" />
            <img className="w-10" src="https://i.ibb.co/HXfpY1F/user.png" alt="userPic" />
        </div>
    </div> 
  )
}
