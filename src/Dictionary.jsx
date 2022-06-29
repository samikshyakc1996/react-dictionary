import {React, useState} from 'react'
import axios from "axios"
import Result from './Result';
import "./Dictionary.css";
const Dictionary = (props) => {
    console.log("props from dict",props.defaultKeyword);
    console.log(typeof(props.defaultKeyword));
    const [keyword, setKeyword]=useState(props.defaultKeyword);
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
                       >
                           <label className='form-text'>What word are you looking for?</label>
                    <input type="search"  placeholder='Type a word . . '
                     onChange={handleKeywordChange}
                     defaultValue={props.defaultKeyword}
                     />
                     <p>Suggested words: sunset, glass, wine, weather ...</p>
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