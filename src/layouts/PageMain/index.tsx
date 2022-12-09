import React from 'react'
import {CarouselEnum} from '../../components/Carousel/carousel-config';
import CarouselCard from '../../components/Carousel/CarouselCard';
import './index.styl';

export default function index() {
  return (
    <div className='page-main-carousel'>
      <CarouselCard name={CarouselEnum.Main}/>
    </div>
  )
}
