import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Смартфоны' },
  { id: 2, name: 'Ноутбуки' },
  { id: 3, name: 'Наушники' },
  { id: 4, name: 'Планшеты' },
];

export const PRODUCTS: Product[] = [
  // ── Смартфоны (categoryId: 1) ──
  {
    id: 1, categoryId: 1,
    name: 'Samsung Galaxy S24',
    description: '6.2" AMOLED, Snapdragon 8 Gen 3, 50 Мп',
    price: 289990, rating: 4.8, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h60/h39/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-8gb-256gb-chernyj-120047286/',
  },
  {
    id: 2, categoryId: 1,
    name: 'Apple iPhone 15',
    description: '6.1" Super Retina XDR, A16 Bionic, 48 Мп',
    price: 389990, rating: 4.9, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h0e/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyj-110894907/',
  },
  {
    id: 3, categoryId: 1,
    name: 'Xiaomi 14',
    description: '6.36" AMOLED, Snapdragon 8 Gen 3, 50 Мп',
    price: 259990, rating: 4.7, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h05/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-14-12gb-256gb-chernyj-115975073/',
  },
  {
    id: 4, categoryId: 1,
    name: 'Google Pixel 8',
    description: '6.2" OLED, Google Tensor G3, 50 Мп',
    price: 269990, rating: 4.6, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h0a/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/google-pixel-8-8gb-128gb-chernyj-112840721/',
  },
  {
    id: 5, categoryId: 1,
    name: 'OnePlus 12',
    description: '6.82" AMOLED, Snapdragon 8 Gen 3, 50 Мп',
    price: 239990, rating: 4.7, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h12/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/oneplus-12-16gb-512gb-zelenyj-116124531/',
  },

  // ── Ноутбуки (categoryId: 2) ──
  {
    id: 6, categoryId: 2,
    name: 'Apple MacBook Air M2',
    description: '13.6" Liquid Retina, Apple M2, 8 ГБ RAM',
    price: 539990, rating: 4.9, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h6a/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-8gb-256gb-seryj-107738427/',
  },
  {
    id: 7, categoryId: 2,
    name: 'ASUS ROG Zephyrus G14',
    description: '14" QHD, AMD Ryzen 9, RTX 4060, 16 ГБ',
    price: 699990, rating: 4.8, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h71/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga403uv-qs010w-109827459/',
  },
  {
    id: 8, categoryId: 2,
    name: 'Lenovo ThinkPad X1 Carbon',
    description: '14" IPS, Intel Core i7, 16 ГБ RAM, 512 ГБ SSD',
    price: 629990, rating: 4.7, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h9f/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-11-16gb-512gb-chyornyj-112340891/',
  },
  {
    id: 9, categoryId: 2,
    name: 'Dell XPS 15',
    description: '15.6" OLED, Intel Core i7-13700H, RTX 4060',
    price: 749990, rating: 4.8, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/h3c/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/dell-xps-15-9530-16gb-512gb-serebristyj-112956723/',
  },
  {
    id: 10, categoryId: 2,
    name: 'HP Spectre x360',
    description: '14" OLED Touch, Intel Core i7, 16 ГБ, 1 ТБ',
    price: 679990, rating: 4.6, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h4d/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-ef2013dx-16gb-1tb-serebristyj-113042891/',
  },

  // ── Наушники (categoryId: 3) ──
  {
    id: 11, categoryId: 3,
    name: 'Sony WH-1000XM5',
    description: 'Беспроводные, ANC, 30 ч батарея',
    price: 119990, rating: 4.9, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/h9a/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chyornyj-106501889/',
  },
  {
    id: 12, categoryId: 3,
    name: 'Apple AirPods Pro 2',
    description: 'TWS, ANC, H2 чип, MagSafe кейс',
    price: 99990, rating: 4.8, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/h2e/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-belyj-108637891/',
  },
  {
    id: 13, categoryId: 3,
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'TWS, ANC, 360° Audio, 8 ч батарея',
    price: 59990, rating: 4.6, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h1b/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-grafitovyj-107837891/',
  },
  {
    id: 14, categoryId: 3,
    name: 'Bose QuietComfort 45',
    description: 'Беспроводные, ANC, 24 ч батарея',
    price: 89990, rating: 4.7, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h7f/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-chyornyj-107923451/',
  },
  {
    id: 15, categoryId: 3,
    name: 'JBL Tour One M2',
    description: 'Беспроводные, ANC, 50 ч батарея',
    price: 69990, rating: 4.5, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h8a/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/jbl-tour-one-m2-chyornyj-112034561/',
  },

  // ── Планшеты (categoryId: 4) ──
  {
    id: 16, categoryId: 4,
    name: 'Apple iPad Pro 12.9" M2',
    description: '12.9" Liquid Retina XDR, Apple M2, 8 ГБ',
    price: 479990, rating: 4.9, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h2c/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-m2-8gb-256gb-wi-fi-serebristyj-109234561/',
  },
  {
    id: 17, categoryId: 4,
    name: 'Samsung Galaxy Tab S9',
    description: '11" Dynamic AMOLED, Snapdragon 8 Gen 2',
    price: 259990, rating: 4.7, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/h3d/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-8gb-128gb-bezhevyj-112783451/',
  },
  {
    id: 18, categoryId: 4,
    name: 'Xiaomi Pad 6',
    description: '11" 2.8K IPS, Snapdragon 870, 144 Гц',
    price: 129990, rating: 4.6, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/h6b/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-pad-6-6gb-128gb-zolotoj-112034781/',
  },
  {
    id: 19, categoryId: 4,
    name: 'Lenovo Tab P12 Pro',
    description: '12.6" AMOLED 2K, Snapdragon 870, 8 ГБ',
    price: 189990, rating: 4.5, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4d/h9c/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/lenovo-tab-p12-pro-8gb-256gb-seryj-109456781/',
  },
  {
    id: 20, categoryId: 4,
    name: 'Huawei MatePad Pro 11',
    description: '11" OLED 2.5K, Kirin 9000E, 8 ГБ',
    price: 219990, rating: 4.6, likes: 0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h5e/85018573537310.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/huawei-matepad-pro-11-8gb-256gb-chyornyj-109823451/',
  },
];