import React, { useEffect, useState } from 'react'
import axiosService from '../../service/index';
import {CarouselEnum} from '../../components/Carousel/carousel-config';
import CarouselCard from '../../components/Carousel/CarouselCard';
import './index.styl';
import '../../service/mock';
import { MainPageDataDTO, CarouselDTO } from '../../service/mainPage.dto';
import { AxiosResponse } from 'axios';

export default function index() {

  const [carouselList, setCarouselList] = useState<CarouselDTO[]>();
  useEffect(()=>{
    axiosService.get('/api/pageMainView').then((res: AxiosResponse<MainPageDataDTO>): void=>{
      setCarouselList(res.data.data.carouselList ?? [])
    })
  },[])
  return (
    <div className='page-main-carousel'>
      <CarouselCard name={CarouselEnum.Main} data={carouselList}/>
    </div>
  )
}
