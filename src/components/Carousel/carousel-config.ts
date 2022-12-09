import { url } from "inspector"
import { lazy } from "react"

export enum CarouselEnum {
    Main = 'Main',
    New = 'New',
    Sort = 'Sort'
}

export const CarouselConfig:Record<string, React.CSSProperties[]> = {
    [CarouselEnum.Main]: [
        {
            backgroundImage: 'url(../../imgs/auto-config-files.PNG)',
            height: '300px'
        },
        {
            background: '#364d79',
            height: '300px'
        },
        {
            background: '#364d79',
            height: '300px'
        },
        {
            background: '#364d79',
            height: '300px'
        }
    ],
    [CarouselEnum.New]: [
        {
            background: 'green',
            height: '300px'
        },
        {
            background: 'green',
            height: '300px'
        },
        {
            background: 'green',
            height: '300px'
        },
        {
            background: 'green',
            height: '300px'
        }
    ],
    [CarouselEnum.Sort]: [
        {
            background: 'red',
            height: '300px'
        },
        {
            background: 'red',
            height: '300px'
        },
        {
            background: 'red',
            height: '300px'
        },
        {
            background: 'red',
            height: '300px'
        }
    ]
}