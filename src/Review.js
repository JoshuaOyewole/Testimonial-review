import {React, useState} from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviewData from './data';

const Review = () =>{
  const [index, setIndex] = useState(0);
  const {id, name, image, job, text} = reviewData[index];


  const checkIndex = index =>{
    if (index > reviewData.length - 1){
      return 0;
    }
    if(index < 0){
      return reviewData.length -1;
    }
    return index;
  }

  const nextPerson = () =>{
    return setIndex(index =>{
    let newIndex = index + 1 ;
    return checkIndex(newIndex);
  })}

  const prevPerson = () =>{
    return setIndex(index =>{
    let newIndex = index - 1 ;
    return checkIndex(newIndex);
  })}


    const randomPerson = () =>{
      let no = Math.floor(Math.random() * 4);
  
        if(index === no){
          no =  index + 1;
        }
      return  setIndex(checkIndex(no))
    }

    return (
      <article className='review' key={id}>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
    </article>
  )
}

export default Review
