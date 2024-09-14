import {$fetch} from "ofetch";
import type PromotionModel from "~/models/promotion.model";
import type CoverModel from "~/models/cover.model";



export default class ContentService {

    covers(): Promise<CoverModel[]> {
        return new Promise((resolve, reject) => {
            const imgProp: CoverModel[] = [
                {
                    id: 1,
                    src: '/images/image1.png'
                },
                {
                    id: 2,
                    src: '/images/image2.png'
                },
                {
                    id: 3,
                    src:  '/images/image3.png',
                },
                {
                    id: 4,
                    src: '/images/image4.png',
                },
                {
                    id: 5,
                    src: '/images/image5.png',
                },
                {
                    id: 6,
                    src: '/images/image6.png',
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
                title: 'Квартиры месяца со скидкой -30%'
            }

            resolve(promotionObj);
        })
    }
}
