

export default function SelectMenu({setSearchValue}) {
  return (
    <div className="shadow-[0_4px_15px_rgba(0,0,0,0.3)] w-[80%] md:w-[40%] flex items-center justify-center p-2  " >
        <select className="w-[100%] md:w-[80%] outline-none" onChange={(e)=> setSearchValue(e.target.value) }>
            <option hidden >Filter by region </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
        </select>
    </div>
  )
}
