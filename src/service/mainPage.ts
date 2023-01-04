export interface CarouselDTO {
    imgPath: string,
    description: string,
    style: React.CSSProperties
}
export interface MainPageDataDTO {
    data: {
        carouselList: CarouselDTO[],
        categoryList: CategoryDTO[],
        recommendMovieList: MainRecommendDTO[]
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

export enum VideoTypeEnum {
    TV = 'TV',
    MOVIE = 'MOVIE',
    SHOW ='SHOW',
}

export interface MainRecommendDTO {
    imgPath: string,
    name: string,
    rate: number,
    time: number,
    city: string,
    language: string[],
    type: string[],
    like: number,
    definitionType: string,
    videoType: VideoTypeEnum,
    totalEpisodes?: number,
    updatedEpisodes?: number,
}