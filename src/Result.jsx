import React from 'react'
import Meaning from './Meaning';
const Result = (props) => {
    
    if(props.result){
    const meanings=props.result.data[0].meanings;
  
  return (
    <div className='Result'>
        <h2> {props.result.data[0].word}</h2>
       {/* <p>{props.result.data[0].phonetics[1].text}</p> */}
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