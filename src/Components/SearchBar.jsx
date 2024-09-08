


export default function SearchBar({setSearchValue}) {

  return (
    <div className="w-[80%]  md:w-[40%] shadow-[0_4px_15px_rgba(0,0,0,0.3)]" >
        <input type="text" placeholder="search country " className="py-2 px-4 w-[100%] md:w-[80%] max-w-[400px] outline-none"  onChange={(e) => setSearchValue(e.target.value)}/>
    </div>
  )
}
