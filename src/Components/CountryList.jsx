import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountryList({searchValue}) {
    const [countryData, setCountryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9); 

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then(data => {
                setCountryData(data); 
            })
            .catch((error) => console.error('Error fetching country data:', error));
    }, []);

    // Filter countries based on searchValue
    const filteredData = countryData.filter((country) => 
        country.name.common.toLowerCase().includes(searchValue.toLowerCase()) || 
        country.region.includes(searchValue)
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage; // 9
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 9-9 = 0
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem); //

    // Change page handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div>
            <section className="w-[80%] max-w-[1200px] mx-auto flex justify-between focus:outline-1 mt-8 flex-wrap gap-16">
                {currentItems.map((country) => (
                    <CountryCard 
                        key={country.cca3} 
                        name={country.name.common} 
                        region={country.region} 
                        population={country.population.toLocaleString('en-IN')} 
                        capital={country.capital} 
                        img={country.flags.png}  
                    />
                ))}
            </section>

            {/* Pagination Controls */}
            <div className="pagination-controls w-[80%] max-w-[1200px] mx-auto mt-8 flex flex-wrap justify-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button 
                        key={i + 1} 
                        onClick={() => paginate(i + 1)} 
                        className={`pagination-button ${currentPage === i + 1 ? 'active' : ''} px-4 py-1 rounded-sm bg-slate-300`}
                    >
                       {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
