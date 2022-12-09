import React from 'react'
import { Carousel } from 'antd';
import {CarouselConfig, CarouselEnum} from './carousel-config';

interface IConfig {
  name: string
}
export default function CarouselCard(props: IConfig) {
  // const contentStyle: React.CSSProperties = {
  //   height: '160px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };
  
  const CardList = CarouselConfig[props.name]?.map((item:React.CSSProperties, index: number)=>{
          return (
          <div key={index}>
            <h3 style={item}>1</h3>
          </div>
          )
        })
 
  return (
    <Carousel>
      {CardList}
    </Carousel>
  )
}
