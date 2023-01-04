import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import axiosService from '../../service/index';
import {CarouselEnum} from '../../components/Carousel/carousel-config';
import CarouselCard from '../../components/Carousel/CarouselCard';
import './index.styl';
import '../../service/mock';
import { MainPageDataDTO, CarouselDTO, CategoryDTO, MainRecommendDTO } from '../../service/mainPage';
import { AxiosResponse } from 'axios';
import  CategoryCard from '../../components/CategoryCard/CategoryCard';
import RecommendCard from '../../components/RecommendCard/RecommendCard';
import { styleConfig, MainSectionStyle } from './main-config';
import {CardEnum} from '../../components/CategoryCard/CategoryCard';

export default function index() {

  const [carouselList, setCarouselList] = useState<CarouselDTO[]>();
  const [categoryList, setCategoryList] = useState<CategoryDTO[]>();
  const [recommendMovieList, setRecommendMovieList] = useState<MainRecommendDTO[]>();

  useEffect(()=>{
    axiosService.get('/api/pageMainView').then((res: AxiosResponse<MainPageDataDTO>): void=>{
      setCarouselList(res.data.data.carouselList ?? [])
      setCategoryList(res.data.data.categoryList ?? []);
      setRecommendMovieList(res.data.data.recommendMovieList ?? [])
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
      <div className='page-main-center'>
        <div>
          <header>
            <h3>电影推荐</h3>
            <div>
              <Button type="text">换一批</Button>
              <Button type="text">更多</Button>
            </div>
          </header>
          <section className='main-center-recommend-movie'>
            <RecommendCard style={styleConfig[MainSectionStyle.RecommendMovie]} data={recommendMovieList} model={CardEnum.FULL}/>
          </section>
        </div>
        <div>
        <header>
            <h3>电视剧推荐</h3>
            <div>
              <Button type="text">换一批</Button>
              <Button type="text">更多</Button>
            </div>
          </header>
        </div>
      </div>
    </div>

  )
}
