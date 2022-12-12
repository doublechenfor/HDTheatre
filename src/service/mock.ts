import { CarouselDTO, MainPageDataDTO } from './mainPage.dto';
const Mock = require('mockjs');
// 输出结果
Mock.mock('/api/pageMainView','get', ():MainPageDataDTO => {
    const data:CarouselDTO[] = [
        {
            imgPath: 'https://www.pkmp4.com/upload/vod/20220824-1/f5bba0a735ee96bf8e34bc2710a0fca2.jpeg',
            description: '[包宝宝]导演石之予将执导迪士尼·皮克斯动画长片[变红](Turning Red，暂译)。该片讲述少女Mei在兴奋的时候会变成一只巨大的红色小熊猫。该片将于2022年3月11日北美上映。',
            style: {
                width: '600px',
                height: '450px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
        },
        {
            imgPath: 'https://www.pkmp4.com/upload/vod/20211009-1/0aa700a2d92e2082368ed87b59d42acd.jpg',
            description: '[包宝宝]导演石之予将执导迪士尼·皮克斯动画长片[变红](Turning Red，暂译)。该片讲述少女Mei在兴奋的时候会变成一只巨大的红色小熊猫。该片将于2022年3月11日北美上映。',
            style: {
                width: '600px',
                height: '450px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
        },
        {
            imgPath: 'https://www.pkmp4.com/upload/vod/20220319-1/8ae5bb737d820e6d18cdecce4386ca11.jpg',
            description: '[包宝宝]导演石之予将执导迪士尼·皮克斯动画长片[变红](Turning Red，暂译)。该片讲述少女Mei在兴奋的时候会变成一只巨大的红色小熊猫。该片将于2022年3月11日北美上映。',
            style: {
                width: '600px',
                height: '450px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
        },
        {
            imgPath: 'https://www.pkmp4.com/upload/vod/20211107-1/49d31e16f56d137770e9f999777888da.jpg',
            description: '[包宝宝]导演石之予将执导迪士尼·皮克斯动画长片[变红](Turning Red，暂译)。该片讲述少女Mei在兴奋的时候会变成一只巨大的红色小熊猫。该片将于2022年3月11日北美上映。',
            style: {
                width: '600px',
                height: '450px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
        }
    ]
    return {
        code: 0,
        data: {
            carouselList: data
        }
    }
})