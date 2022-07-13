import React, {useState} from 'react';
import { BsFillChatQuoteFill,BsFillCaretLeftFill,BsFillCaretRightFill } from "react-icons/bs"; 
import people from '../data';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,title,image,quote} = people[index];

  const randomPerson = ()=>{
    let newIndex = Math.trunc(Math.random()*people.length);
    setIndex(newIndex);
  }

  const prevPerson = ()=>{
    setIndex((index)=>{
      if(index === 0){
        let newIndex =people.length - 1;
        return newIndex;
      }
      else{
        let newIndex = index - 1;
        return newIndex;
      }
    })
  }

  const nextPerson = ()=>{
    setIndex((index)=>{
      if(index === people.length - 1){
        let newIndex = 0;
        return newIndex;
      }
      else{
        let newIndex = index + 1;
        return newIndex;
      }
    })
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className ='person-img'/>
        <span className='quote-icon'><BsFillChatQuoteFill/></span>
      </div>
      <div className='author'>
        {name}
      </div>
      <p className='job'>{title}</p>
      <p className='info'>{quote}</p>
      <div className='button-container'>
        <button className='prev-btn'  onClick={prevPerson}>
          <BsFillCaretLeftFill/>
        </button>
        <button className='next-btn' onClick={nextPerson}>
        <BsFillCaretRightFill/>
        </button>
      </div>
      <div className='random-btn' onClick={randomPerson}>
        Random User
      </div>
      </article>
  )
}

export default Review