import React, { useEffect, useState } from 'react'
import axiosService from '../../service/index';
import {CarouselEnum} from '../../components/Carousel/carousel-config';
import CarouselCard from '../../components/Carousel/CarouselCard';
import './index.styl';
import '../../service/mock';
import { MainPageDataDTO, CarouselDTO, CategoryDTO } from '../../service/mainPage.d';
import { AxiosResponse } from 'axios';
import  CategoryCard from '../../components/CategoryCard/CategoryCard';
import { styleConfig, MainSectionStyle } from './main-config';
import {CardEnum} from '../../components/CategoryCard/CategoryCard';

export default function index() {

  const [carouselList, setCarouselList] = useState<CarouselDTO[]>();
  const [categoryList, setCategoryList] = useState<CategoryDTO[]>();

  useEffect(()=>{
    axiosService.get('/api/pageMainView').then((res: AxiosResponse<MainPageDataDTO>): void=>{
      setCarouselList(res.data.data.carouselList ?? [])
      setCategoryList(res.data.data.categoryList ?? []);
    })
  },[])
  return (
    <div>
      <div className='page-main-top'>
        <div className='page-main-carousel'>
          <CarouselCard name={CarouselEnum.Main} data={carouselList}/>
        </div>
        <div className='page-main-category'>
          <CategoryCard style={styleConfig[MainSectionStyle.Category]} data={categoryList} model={CardEnum.FULL}/>
        </div>
      </div>
    </div>

  )
}
