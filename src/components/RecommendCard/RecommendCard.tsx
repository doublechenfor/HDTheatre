import React from 'react'
import './index.styl';
import { Card, Avatar } from 'antd';
import { MainRecommendDTO } from '../../service/mainPage';
import { CardEnum } from '../CategoryCard/CategoryCard';

interface IProps {
    data: MainRecommendDTO[];
    style?: React.CSSProperties;
    model?: CardEnum;
  }
export default function RecommendCard(props: IProps) {

    const { Meta } = Card;
    const cardList = props.data?.map((item: MainRecommendDTO, index: number) => {
        let elementTORender: JSX.Element = null;
    
        switch (props.model) {
          case CardEnum.FULL:
            const finalStyle = (index + 1) % 6 === 0 && index !== 0 ? props.style: {marginRight: '12px', ...props.style};
            elementTORender = (
              <Card key={index} style={finalStyle} cover={<img alt="category" src={item.imgPath} style={props?.style}/>}>
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
              </Card>
            )
            break;
          case CardEnum.Description:
            // elementTORender = <Card key={index} style={props.style} cover={<img alt="example" src={item.imgPath} style={props?.style} />} />
            break;
        }
        return elementTORender;
      })
  return (
    <>
    { cardList }
    </>
  )
}
