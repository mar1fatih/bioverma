export const CATEGORY_SLUGS = {
  SKIN_CARE: 'skin-care',
  MAKE_UP: 'make-up',
  BODY: 'body',
};

export const PRODUCTS = [
  {
    product_name: 'bioverma-creme-retinole',
    sku: 'creme-retanol',
    price: 189,
  },
  {
    product_name: 'bioverma-shampoing-anti-chute',
    sku: 'sham-anti-chute',
    price: 199,
  },
  {
    product_name: 'bioverma-shampoing-proteines',
    sku: 'shampoing-proteine',
    price: 199,
  },
  {
    product_name: 'bioverma-poudre-blanchiment-dents',
    sku: 'poudre-dents',
    price: 189,
  },
]

export const CATEGORIES = [
  {
    slug: CATEGORY_SLUGS.SKIN_CARE,
    id: 'skinCare',
    imageSrc: '/category-skin-care.png',
  },
  {
    slug: CATEGORY_SLUGS.MAKE_UP,
    id: 'makeUp',
    imageSrc: '/category-makeup.png',
  },
  {
    slug: CATEGORY_SLUGS.BODY,
    id: 'body',
    imageSrc: '/category-body.png',
  },
];

export const PRODUCT_CATEGORIES = [
  {
    category: CATEGORY_SLUGS.SKIN_CARE,
    products: ['bioverma-creme-retinole'],
  },
  {
    category: CATEGORY_SLUGS.MAKE_UP,
    products: [],
  },
  {
    category: CATEGORY_SLUGS.BODY,
    products: ['bioverma-shampoing-anti-chute', 'bioverma-shampoing-proteines', 'bioverma-poudre-blanchiment-dents'],
  },
];
