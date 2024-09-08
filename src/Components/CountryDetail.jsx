import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

export default function CountryDetail() {
  const [countryData, setCountryData] = useState();
  const params = useParams();
  const country = params.Country

 useEffect(()=>{
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(res => res.json())
  .then(([data])=>{
      setCountryData(data);
      console.log(data)
  }).catch((err)=>{
    console.log(err)
  })
 },[])

  return (
        <>{
          countryData ? (<main>
          <div className = "w-[80%] max-w-[1200px] mx-auto flex flex-col gap-6 md:flex-row justify-between  md:gap-12 ">
          <div className="w-full" >
            <div className="my-8 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.3)] px-4 py-1 inline-block" onClick={()=> history.back()} >
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:gap-16">
              <img src={countryData.flags.png} alt="" className=" w-[90%] md:w-[40%]"/>
              <div className="details-text-container">
                <h1>{countryData.name.common}</h1>
                <div className="details-text">
                  <p><b>Native Name: </b><span className="native-name">{Object.values(countryData.name.nativeName)?.[0].common}</span></p>
                  <p><b>Population: </b><span className="population">{countryData.population.toLocaleString('en-IN')}</span></p>
                  <p><b>Region: </b><span className="region">{countryData.region}</span></p>
                  <p><b>Sub Region: </b><span className="sub-region">{countryData.subregion}</span></p>
                  <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
                  <p>
                    <b>Top Level Domain: </b><span className="top-level-domain">{countryData.tld.join(',')}</span>
                  </p>
                  <p><b>Currencies: </b><span className="currencies">{Object.values(countryData.currencies)[0].name}</span></p>
                  <p><b>Languages: </b><span className="languages">{Object.values(countryData.languages)?.[0]}</span></p>
                </div>
                <div className="flex items-center">
                  <p><b>Border Countries: </b></p>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>): (<Shimmer/>
        )}
       </>
  )}

