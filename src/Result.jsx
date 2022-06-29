import React from 'react'
import Meaning from './Meaning';
import Phonetics from './Phonetics';
const Result = (props) => {
    
    if(props.result){
    const meanings=props.result.data[0].meanings;
  
  return (
    <div className='Result'>
        <section>
        <h2> {props.result.data[0].word}</h2>
       {/* <p>{props.result.data[0].phonetics[1].text}</p> */}

       {(props.result.data[0].phonetics).map((phonetic,index)=>(
           <div key={index}>
               <Phonetics phonetic={phonetic}/>
           </div>
           
       ))}
       </section>
       {meanings.map((meaning,index)=>(
           <div key={index}> 
               <Meaning meaning={meaning}/>

           </div>
           
       ))}
      
        </div>
  )
}
else{
    return null;
}

}
export default Result