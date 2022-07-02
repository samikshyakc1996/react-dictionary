import {React, useState} from 'react'
import axios from "axios"
import Result from './Result';
import Photos from './Photos';
import "./Dictionary.css";
const Dictionary = (props) => {
    
    
    const [keyword, setKeyword]=useState(props.defaultKeyword);
    const [result,setResult]=useState(null);
    const [searched,setSearched]=useState(false);
    const [photos,setPhotos]=useState(null);
    function handleDictionaryResponse(response){
        
        setResult(response);
    }
    function handlePexelsResponse(response){
        console.log("pexels respo",response);
        setPhotos(response.data.photos);
    }

    function search(){
        setSearched(true);
        const apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        const pexelsApiKey="563492ad6f9170000100000107ee90cfc3d24804aef4012778314661";
        axios.defaults.headers.common = {'Authorization': `Bearer ${pexelsApiKey}`}
        const pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}`;
        axios.get(pexelsApiUrl).then(handlePexelsResponse);
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
                           <label className='form-text'>What word do you want to look for?</label>
                    <input type="search"  placeholder='Type a word . . '
                     onChange={handleKeywordChange}
                     defaultValue={props.defaultKeyword}
                     />
                     <p>Suggested words: sunset, glass, wine, weather ...</p>
                </form>
               
                    <Result result={result}/>
                    <Photos photos={photos}/>
            </div>
          )
    }
    else{
        search();
        return "Loading"
    }
  
}

export default Dictionary