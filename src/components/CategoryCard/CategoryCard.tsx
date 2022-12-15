import React from 'react'
import { Card } from 'antd';
import './index.styl';
import { LikeOutlined, FireFilled } from '@ant-design/icons';
import  { CategoryDTO, MoviePopularStatusEnum } from '../../service/mainPage.d';

export enum CardEnum {
  FULL = 'FULL',
  Description = 'Description'
}
interface IProps {
  data: CategoryDTO[];
  style?: React.CSSProperties;
  model: CardEnum;
}
export default function CategoryCard(props: IProps) {

  const cardList = props.data?.map((item: CategoryDTO, index: number) => {
    let elementTORender: JSX.Element = null;
    switch (props.model) {
      case CardEnum.FULL:
        elementTORender = (
          <Card key={index} style={props.style} cover={<img alt="category" src={item.imgPath} style={props?.style}/>}>
            <div className='category-description'>
              <span>
                <span><FireFilled style={item.popularStatus === MoviePopularStatusEnum.HOT ? {color: 'red'} : {display: 'none'}}/></span>
                <span><LikeOutlined/>{item.like}</span>
              </span>
              <span></span>
            </div>
          </Card>
        )
        break;
      case CardEnum.Description:
        elementTORender = <Card key={index} style={props.style} cover={<img alt="example" src={item.imgPath} style={props?.style}/>}/>
        break;
    }
    return elementTORender;
  })
  return (
    <>
      {cardList}
    </>
  )
}
