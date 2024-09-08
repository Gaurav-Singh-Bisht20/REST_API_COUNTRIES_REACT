
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountryList from './CountryList'
import { useState } from 'react'

export default function Home() {
    const [searchValue, setSearchValue] = useState('')
  return (
    <>
    <main className="w-[80%] max-w-[1200px] mx-auto flex flex-col gap-6 md:flex-row justify-between my-8 md:gap-12 ">
        <SearchBar setSearchValue = {setSearchValue}></SearchBar>
        <SelectMenu setSearchValue = {setSearchValue}></SelectMenu>
    </main>
    <CountryList  searchValue =  {searchValue}/>
  </>
  )
}
