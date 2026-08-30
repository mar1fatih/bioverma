export const CATEGORY_SLUGS = {
  SKIN_CARE: 'skin-care',
  MAKE_UP: 'make-up',
  BODY: 'body',
};

export const PRODUCTS = [
  {
    product_name: 'bioverma-creme-retinole',
    sku: 'creme-retanol',
    price: 149,
    price2: 189,
    price3: 239,
  },
  {
    product_name: 'bioverma-shampoing-anti-chute',
    sku: 'sham-anti-chute',
    price: 169,
    price2: 219,
    price3: 269,
  },
  {
    product_name: 'bioverma-shampoing-proteines',
    sku: 'shampoing-proteine',
    price: 179,
    price2: 239,
    price3: 299,
  },
  {
    product_name: 'bioverma-poudre-blanchiment-dents',
    sku: 'poudre-dents',
    price: 149,
    price2: 199,
    price3: 249,
  },
  {
    product_name: 'ecran_solaire',
    sku: 'ecran_solaire',
    price: 179,
    price2: 249,
    price3: 299,
  },
  {
    product_name: 'serum_niacinamide',
    sku: 'niacinamide',
    price: 169,
    price2: 229,
    price3: 289,
  },
  {
    product_name: 'serum-retanol',
    sku: 'serum-retanol',
    price: 169,
    price2: 219,
    price3: 269,
  },
  {
    product_name: 'eclat-zone-intime',
    sku: 'eclat-zone-intime',
    price: 159,
    price2: 219,
    price3: 279,
  },
  {
    product_name: 'serum-cheveux',
    sku: 'serum-cheveux',
    price: 169,
    price2: 219,
    price3: 269,
  },
  {
    product_name: 'pack visage',
    sku: 'pack-pack-visage-5146',
    price: 299,
  }
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
