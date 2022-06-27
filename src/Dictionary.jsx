import {React, useState} from 'react'
import axios from "axios"
import Result from './Result';

const Dictionary = () => {
    const [keyword, setKeyword]=useState("");
    const [result,setResult]=useState(null);
    function handleResponse(response){
        console.log(response);
        setResult(response);
    }

    //Documentation: apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/pickles`
    function handleSearch(e){
        e.preventDefault();
        // alert(`Searching for ${keyword}`);
        const apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
  return (
    <div className='Dictionary'>
        <form onSubmit={handleSearch}>
            <input type="search" placeholder='Type a word . . ' onChange={handleKeywordChange} />
        </form>
       
            <Result result={result}/>
    </div>
  )
}

export default Dictionary