
export enum CarouselEnum {
    Main = 'Main',
    New = 'New',
    Sort = 'Sort'
}

export const CarouselConfig:Record<string, React.CSSProperties[]> = {
    [CarouselEnum.Main]: [
        {
            backgroundImage: `url(${require('../../assets/imgs/auto-config-files.png')})`,
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