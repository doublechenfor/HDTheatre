import React from 'react'
import { Carousel } from 'antd';
import './index.styl';
import { CarouselDTO } from '../../service/mainPage.dto'; 

interface IConfig {
  name: string,
  data?: CarouselDTO[]
}
export default function CarouselCard(props: IConfig) {
  const CardList = props.data?.map((item:CarouselDTO, index: number)=>{
    return (
    <div key={index}>
      <img style={item.style} src={item.imgPath}/>
      <span className='img-description'>
        {item.description}
      </span>
    </div>
    )
  })
 
  return (
    <Carousel>
      {CardList}
    </Carousel>
  )
}
