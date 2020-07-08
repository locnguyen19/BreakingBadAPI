import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header'; 
import axios from 'axios'; 
import CharacterGrid from './Components/CharacterGrid'; 
import Search from './Components/Search'; 

const App =() => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])
  return (
    <div className="App">
      <Header></Header>
      <Search getQuery = {(q) => setQuery(q) }></Search>
      <CharacterGrid isLoading = {isLoading} items = {items}></CharacterGrid>
    </div>
  );
}

export default App;
