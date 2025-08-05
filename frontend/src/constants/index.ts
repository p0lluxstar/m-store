export const MAIN_MENU_ITEMS = [
  {
    name: 'Главная',
    url: '/',
  },
  {
    name: 'Каталог',
    url: '/catalog',
  },
  {
    key: 'about',
    name: 'О нас',
    url: '/about',
  },
  {
    name: 'Контакты',
    url: '/contact',
  },
];

export const SECONDARY_MENU_ITEMS = [
  {
    name: 'Изабранное',
    url: '/wishlist',
  },
  {
    name: 'Корзина',
    url: '/cart',
  },
];

export const PRODUCT_TAGS = {
  SALE: {
    id: '',
    value: 'sale',
  },
  NEW: {
    id: '',
    value: 'new',
  },
  HIT: {
    id: 'ptag_01K1JD5MJPF8TS29YXMMP5S381',
    value: 'hit',
  },
};

export const PRODUCT_TAGS_NAME = ['sale', 'new', 'hit'];

export const STORE_NAME = 'M-Store';

export const MAIN_SLIDER_ITEMS = [
  {
    id: 1,
    imgUrl: '/main-slider/1.png',
    title: 'Уникальные новинки',
    description: 'от классики до смелых современных форм',
  },
  {
    id: 2,
    imgUrl: '/main-slider/2.png',
    title: 'Роскошные материалы',
    description: 'натуральная кожа, экокожа, металлическая фурнитура',
  },
  {
    id: 3,
    imgUrl: '/main-slider/3.png',
    title: 'Идеальный комфор',
    description: 'удобные ручки, регулируемые ремни, продуманные отделения',
  },
];

export const BRAND_SLIDER_ITEMS = [
  { id: 1, name: 'Easpak', imgUrl: '/brand-slider/easpak.jpg' },
  { id: 2, name: 'Gaston Luga', imgUrl: '/brand-slider/gaston-luga.jpg' },
  { id: 3, name: 'Jansport', imgUrl: '/brand-slider/jansport.jpg' },
  { id: 4, name: 'Kusto', imgUrl: '/brand-slider/kusto.jpg' },
  { id: 5, name: 'Patagonia', imgUrl: '/brand-slider/patagonia.jpg' },
  { id: 6, name: 'Wandrd', imgUrl: '/brand-slider/wandrd.jpg' },
];

export const SPECIAL_OFFER = {
  title: 'Рюкзаки Jansport ',
  description: 'Скидка до 30% на весь брэнд Jansport',
  imgsUrl: ['/special-offer/1.jpg', '/special-offer/2.jpg'],
  link: '/catalog/jansport',
};

export const OUR_COMPANY = {
  imgUrl: '/our-company/1.jpg',
  description:
    'Мы — команда энтузиастов, которая верит, что качественный рюкзак — это не просто аксессуар, а надежный спутник в повседневной жизни, путешествиях, учебе и работе. Наша компания специализируется на продаже стильных, функциональных и долговечных рюкзаков, созданных для тех, кто ценит комфорт, практичность и современный дизайн.',
};

export const OUR_TEAM_ITEMS = [
  {
    imgUrl: '/our-team/1.jpg',
    name: 'Алексей Петров',
    position: 'Коммерческий директор',
  },
  {
    imgUrl: '/our-team/2.jpg',
    name: 'Екатерина Смирнова',
    position: 'Менеджер по закупкам',
  },
  {
    imgUrl: '/our-team/3.jpg',
    name: 'Анна Морозова',
    position: 'Менеджер по продажам',
  },
  {
    imgUrl: '/our-team/4.jpg',
    name: 'Дмитрий Кузнецов',
    position: 'Маркетолог',
  },
];

export const CLIENT_FEEDBACK_ITEMS = [
  {
    id: 1,
    client: 'Алексей, 24 года',
    text: 'Купил городской рюкзак — удобный, легкий и стильный. Отлично помещается ноутбук, а карманов хватает для всех мелочей. Рекомендую!',
    imgUrl: '/client-feedback/1.jpg',
  },
  {
    id: 2,
    client: 'Марина, 30 лет',
    text: 'Заказывала рюкзак для путешествий. Качество на высоте: швы прочные, молнии надежные. Теперь это мой must-have в поездках!',
    imgUrl: '/client-feedback/2.jpg',
  },
  {
    id: 3,
    client: 'Иван, 19 лет',
    text: 'Ношу каждый день в универ. Удобные лямки, не давит на плечи, даже когда забиваю под завязку. И дизайн крутой!',
    imgUrl: '/client-feedback/3.jpg',
  },
  {
    id: 4,
    client: 'Ольга, 27 лет',
    text: 'Понравился выбор расцветок. Взяла розовый — материал не пачкается, легко чистится. Очень довольна покупкой!',
    imgUrl: '/client-feedback/4.jpg',
  },
  {
    id: 5,
    client: 'Дмитрий, 35 лет',
    text: 'Искал рюкзак для работы — этот идеален. Отделение для документов, защита от дождя. Выглядит солидно, хоть в офис, хоть в командировку.',
    imgUrl: '/client-feedback/5.jpg',
  },
];

export const DISCOUNT_VALUE = 1500;

// сколько показывать товаров по умолчанию и по скольку догружать
export const COUNT_ITEMS_PRODUCT_LOADING = 9;

export const PRICE_FILTER_VALUE = {
  min: 3000,
  max: 15000
}
