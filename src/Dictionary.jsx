import {React, useState} from 'react'

const Dictionary = () => {
    const [keyword, setKeyword]=useState("");
    function handleSearch(e){
        e.preventDefault();
        alert(`Searching for ${keyword}`);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
  return (
    <div className='Dictionary'>
        <form onSubmit={handleSearch}>
            <input type="search" placeholder='Type a word . . ' onChange={handleKeywordChange} />
        </form>
    </div>
  )
}

export default Dictionary