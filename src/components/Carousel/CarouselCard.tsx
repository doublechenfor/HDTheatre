import React, { useCallback, useState } from 'react'
import { Carousel } from 'antd';
import './index.styl';
import { CarouselDTO } from '../../service/mainPage.d'; 

interface IConfig {
  name: string,
  data?: CarouselDTO[]
  style?: React.CSSProperties,
}
export default function CarouselCard(props: IConfig) {

  const [currentDescription, setCurrentDescription] = useState<number>(0);

  const CardList = props.data?.map((item:CarouselDTO, index: number)=>{
    return (
    <div key={index}>
      <img style={item.style} src={item.imgPath}/>
      {
        index === currentDescription ?
        <span className='img-description animate__animated animate__fadeInUp'>
        {item.description}
      </span> : null
      }
    </div>
    )
  })
  const onChange = (currentSlide: number) => {
    setCurrentDescription(currentSlide);
  };

  return (
    <Carousel autoplay afterChange={onChange} style={props.style}>
      {CardList}
    </Carousel>
  )
}
