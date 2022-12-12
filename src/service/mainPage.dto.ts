export interface CarouselDTO {
    imgPath: string,
    description: string,
    style: React.CSSProperties
}
export interface MainPageDataDTO {
    data: {
        carouselList: CarouselDTO[]
    },
    code: number
}