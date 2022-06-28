import {React, useState} from 'react'
import axios from "axios"
import Result from './Result';

const Dictionary = () => {
    const [keyword, setKeyword]=useState("sunset");
    const [result,setResult]=useState(null);
    const [searched,setSearched]=useState(false);

    function handleResponse(response){
        console.log(response);
        setResult(response);
    }

    function search(){
        const apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        setSearched(true);
    }

    //Documentation: apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/pickles`
    function handleSearch(e){
        e.preventDefault();
        search();
       
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    if(searched){
        return (
            <div className='Dictionary'>
                <form onSubmit={handleSearch} 
                        style={{display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}>
                    <input type="search"  placeholder='Type a word . . ' onChange={handleKeywordChange}
                     />
                </form>
               
                    <Result result={result}/>
            </div>
          )
    }
    else{
        search();
        return "Loading"
    }
  
}

export default Dictionary