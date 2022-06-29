import React from 'react'
import Antonyms from './Antonyms';
import Example from './Example';
import Synonyms from './Synonyms';

const Meaning = (props) => {
    
  return (
    <section className='Meaning'>
       <h2> <em>{props.meaning.partOfSpeech}</em></h2>
        {(props.meaning.definitions).map((item,index)=>(
          <ul key={index}>
            <li  style={{fontSize:"1.3rem"}}><em>{item.definition}</em></li>
            <Example example={item.example}/>
            </ul>
        ))}
        
        <Synonyms synonyms={props.meaning.synonyms}/>
        <Antonyms antonyms={props.meaning.antonyms}/>

    </section>
  )
}

export default Meaning