import { Link } from "react-router-dom";


export default function CountryCard({name, region, capital, population, img}) {
  return (
    <Link  className="max-w-[250px] shadow-lg hover:scale-105 transition-all" to={`/${name}` }>
    <img src={img} alt={`${name} flag`} className="w-60 h-48 border-2 border-slate-300 "/>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-3">{name}</h3>
      <p><b>Population: </b>{population}</p>
      <p><b>Region: </b>{region}</p>
      <p><b>Capital: </b>{capital}</p>
    </div>
  </Link>
  )
}
