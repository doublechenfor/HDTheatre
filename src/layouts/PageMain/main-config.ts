import React from "react";

export enum MainSectionStyle {
    Carousel = 'Carousel',
    Category = 'Category'
}

export const styleConfig: Record<MainSectionStyle, React.CSSProperties|null>  = {
    [MainSectionStyle.Carousel]: null,
    [MainSectionStyle.Category]: {
        width: '285px',
        height: '213.75px',
        overflow: 'hidden',
    }
}