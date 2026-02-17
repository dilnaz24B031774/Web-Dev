import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-product-list',
  standalone:true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 17 Pro 256GB Orange',
      description: 'Latest Apple smartphone with A16 chip.',
      price: 755106,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 2025',
      description: 'Экран Liquid Retina 13.6 дюйма — яркие цвета и четкость изображения',
      price: 625990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf9/p3a/36844513.png?format=gallery-medium',
      images: ['https://via.placeholder.com/200'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw0w3ru-a-138152993/?c=750000000'
    },
    {
      id: 3,
        name: 'Пылесос Samsung Jet 75E Complete VS20B75ACR5/EV',
        description: 'для быстрой и эффективной уборки в вашем доме.',
        price: 185998,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p35/62849736.bin?format=gallery-medium',
        images: ['https://via.placeholder.com/200'],
        link: 'https://kaspi.kz/shop/p/samsung-jet-75e-complete-vs20b75acr5-ev-chernyi-seryi-115458824/?c=750000000'
    },
    {
      id: 4,
        name: 'Электрочайник Tefal Smart&Light KO851830 черный',
        description: 'Идеальный выбор для тех, кто ценит стиль, функциональность и комфорт на кухне.',
        price: 56990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p0e/p3a/71783922.jpg?format=gallery-medium',
        images: ['https://via.placeholder.com/200'],
        link: 'https://kaspi.kz/shop/p/elektrochainik-tefal-smart-light-ko851830-chernyi-101205274/?c=750000000'
    },

    {
      id:5,
      name:'Aulandi ирригатор HF-6 белый импульсный, портативный',
      description:'Можете использовать устройство в течение 30 дней без подзарядки.',
      price:15800,
      rating:4.7,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p89/p9d/31752603.jpeg?format=gallery-medium',
      images:['https://via.placeholder.com/200'],
      link:'https://kaspi.kz/shop/p/aulandi-irrigator-hf-6-belyi-impul-snyi-portativnyi-106935673/?c=750000000'
    },

    {
      id:6,
      name:'Умная колонка Яндекс Станция Миди черный',
      description:'Мощное звучание 24 Вт в таком компактном корпусе. ',
      price:83790,
      rating:4.8,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium' ,
      images:['https://via.placeholder.com/200'],
      link:'https://kaspi.kz/shop/p/jandeks-stantsija-midi-chernyi-114709674/?c=750000000'
    },
    {
      id:7,
      name:'Беговая дорожка GENAU Wander X электрическая',
      description:'Этот тренажёр от известного немецкого бренда GENAU создан для тех, кто ценит качество и комфорт.',
      price:89890,
      rating:4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p47/p79/78584359.png?format=gallery-medium' ,
      images:['https://via.placeholder.com/200'],
      link:'https://kaspi.kz/shop/p/begovaja-dorozhka-genau-wander-x-elektricheskaja-144345796/?c=750000000'
    },

    {
      id:8,
      name:'Кофемашина Delonghi ECAM220.50.BG бежевый',
      description:'Кофемашина DeLonghi Magnifica Start сочетает в себе множество возможностей для приготовления вкусного кофе.',
      price:229990,
      rating:4.7,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium' ,
      images:['https://via.placeholder.com/200'],
      link:'https://kaspi.kz/shop/p/kofemashina-delonghi-ecam220-50-bg-bezhevyi-145399057/?c=750000000'
    },

    {
      id:9,
      name:'Микроволновая печь LG MS-2042DB черный',
      description:'Микроволновая печь LG MS-2042DB выполнена в стильном черном цвете, что делает ее универсальной для кухни любого дизайна.',
      price:57555,
      rating:4.6,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h87/h60/63757616578590.jpg?format=gallery-medium' ,
      images:['https://via.placeholder.com/200'],
      link:'https://kaspi.kz/shop/p/lg-ms-2042db-chernyi-2900200/?c=750000000'
    },

    {
      id:10,
      name:'Укулеле концертная Levinson UTC-500 NA',
      description:'Этот инструмент идеально подходит для музыкантов, которые ищут компактный и качественный укулеле для игры дома, на улице или на сцене.',
      price:21000,
      rating:4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p6a/pc5/110365926.png?format=gallery-medium' ,
      images:['https://via.placeholder.com/200'],
      link:'https://kaspi.kz/shop/p/ukulele-kontsertnaja-levinson-utc-500-na-141491325/?c=750000000'
    },
    
  ];
}
