import { ReactNode } from "react"

export interface staticDataInterface{
    id: number,
    title: string,
    description: string,
    offer: string,
    img?: string,
}

export interface staticDataCardInterface{
    data:{
    id: number,
    title: string,
    description: string,
    offer: string,
    img?: string,}
}


export const staticData = [
    {
        id: 1,
        title: 'Low Price',
        description: 'High Coziness',
        offer: 'UPTO 50% OFF',
        img: 'src/assets/images/imagesHome/home-coziness.png'
    },
    {
        id: 2,
        title: 'Beyoung Presents',
        description: 'Breezy Summer Style',
        offer: 'UPTO 50% OFF',
        img: 'src/assets/images/imagesHome/home-summer-style.png'
    }
]