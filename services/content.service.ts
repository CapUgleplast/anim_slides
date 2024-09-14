import {$fetch} from "ofetch";
import type PromotionModel from "~/models/promotion.model";
import type CoverModel from "~/models/cover.model";



export default class ContentService {

    covers(): Promise<CoverModel[]> {
        return new Promise((resolve, reject) => {
            const imgProp: CoverModel[] = [
                {
                    id: 1,
                    src: '/images/image1.webp'
                },
                {
                    id: 2,
                    src: '/images/image2.webp'
                },
                {
                    id: 3,
                    src:  '/images/image3.webp',
                },
                {
                    id: 4,
                    src: '/images/image4.webp',
                },
                {
                    id: 5,
                    src: '/images/image5.webp',
                },
                {
                    id: 6,
                    src: '/images/image6.webp',
                },
                {
                    id: 7,
                    src: '/images/main.webp',
                },
            ]

            resolve(imgProp);
        })
    }

    promotion(): Promise<PromotionModel> {
        return new Promise((resolve, reject) => {
            const promotionObj =  {
                button: 'Акция',
                title: 'Квартиры месяца со скидкой -30%',
                link: '#'
            }

            resolve(promotionObj);
        })
    }
}
