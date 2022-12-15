export interface CarouselDTO {
    imgPath: string,
    description: string,
    style: React.CSSProperties
}
export interface MainPageDataDTO {
    data: {
        carouselList: CarouselDTO[],
        categoryList: CategoryDTO[],
    },
    code: number
}

export enum MoviePopularStatusEnum {
    HOT = 'HOT',
    POPULAR = 'POPULAR',
}

type popularStatusType = MoviePopularStatusEnum.HOT | MoviePopularStatusEnum.POPULAR

export interface CategoryDTO {
    imgPath: string,
    popularStatus: popularStatusType,
    hasNew: boolean,
    like: number,
}