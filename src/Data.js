import React from "react";
export const items = [
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/719n1jcKdnL._AC_SL1500_.jpg",
    name: "Lenovo IdeaPad 3 11 Chromebook",
    price: "219.99",
    tag: "laptop",
    amount: 1,
  },
  {
    id: 2,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/716t4UWQ2PL._AC_SL1500_.jpg",
    name: "Lenovo IdeaPad Flex 5 ",
    price: "681.00",
    tag: "laptop",
    amount: 1,
  },
  {
    id: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71AmKW4yuMS._AC_SL1500_.jpg",
    name: "Acer Aspire 5",
    price: "388.12",
    tag: "laptop",
    amount: 1,
  },
  {
    id: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg",
    name: "Razer Blade 15",
    price: "1149.99",
    tag: "laptop",
    amount: 1,
  },
  {
    id: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg",
    name: "SAMSUNG 50-Inch Class Crystal UHD AU8000 ",
    price: "1100",
    tag: "tv",
    amount: 1,
  },
  {
    id: 6,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61piX33QmAL._AC_SL1000_.jpg",
    name: "Toshiba 43LF421U21 43-inch Smart HD 1080p TV",
    price: "269.99",
    tag: "tv",
    amount: 1,
  },

  {
    id: 7,
    image:
      "https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY327_QL65_.jpg",
    name: "SAMSUNG QN32Q50RAFXZA 32-inch QLED 4K 32Q50",
    price: "330.00",
    tag: "tv",
    amount: 1,
  },
  {
    id: 8,
    image:
      "https://m.media-amazon.com/images/I/71gzlKauNQL._AC_UY327_QL65_.jpg",
    name: "Hisense 40-Inch Class H4 Series LED Roku Smart TV",
    price: "249.99",
    tag: "tv",
    amount: 1,
  },
  {
    id: 9,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61qDaY5NTkL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Wireless Earbuds with Immersive Sound True 5.0 Bluetooth ",
    price: "25.99",
    tag: "gadget",
    amount: 1,
  },
  {
    id: 10,
    image:
      "https://m.media-amazon.com/images/I/71wIa3xGUcS._AC_UY327_FMwebp_QL65_.jpg",
    name: "Wireless Keyboard and Mouse Combo, TopMate 2.4G Backlit Rechargeable",
    price: "44.77",
    tag: "gadget",
    amount: 1,
  },
];

export function compareAsc(a, b) {
  const a_price = parseInt(a.price);
  const b_price = parseInt(b.price);
  if (a_price < b_price) {
    return -1;
  }
  if (a_price > b_price) {
    return 1;
  }
}
export function compareDsc(a, b) {
  const a_price = parseInt(a.price);
  const b_price = parseInt(b.price);
  if (a_price < b_price) {
    return 1;
  }
  if (a_price > b_price) {
    return -1;
  }
}

export const sortAsc = items.slice(0).sort(compareAsc);

export const sortDsc = items.slice(0).sort(compareDsc);
