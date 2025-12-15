export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
};

export const mockProducts: Product[] = [
  {
    id: "cherry-quartz",
    name: "Cherry Quartz",
    description: "Gelang handmade yang terbuat dari kombinasi batu alam dengan warna natural seperti krem, hijau, dan coklat.",
    price: "Rp15.000",
    imageUrl: "./public/images/2.jpg",
  },
  {
    id: "cherry-quartz1",
    name: "Cherry Quartz",
    description: "Gelang handmade dengan manik batu berwarna pink transparan yang memberikan kesan lembut dan feminin.",
    price: "Rp15.000",
    imageUrl: "./public/images/1.jpg",
  },
  {
    id: "moon-quartz",
    name: "Moon Quartz",
    description: "Gelang manik bening dengan detail kecil berbentuk hati sebagai aksen utama. Desainnya simpel, manis, dan ringan saat digunakan.",
    price: "Rp10.000",
    imageUrl: "./public/images/5.jpg",
  },
  {
    id: "moon-quartz1",
    name: "Moon Quartz",
    description: "Manik-manik ini didominasi warna bening transparan dengan kilau lembut yang memantulkan cahaya.",
    price: "Rp10.000",
    imageUrl: "./public/images/7.jpg",
  },
  {
    id: "cherry-quartz",
    name: "Cherry quartz",
    description: "Pantulan cahayanya terlihat lebih tegas dan berkarakter, menciptakan kesan dewasa, natural, dan eksklusif.",
    price: "Rp15.000",
    imageUrl: "./public/images/6.jpg",
  },
  {
    id: "italian-bracelet",
    name: "Italian Bracelet",
    description: "Gelang berbahan logam berwarna hitam keperakan dengan desain minimalis dan permukaan mengkilap.",
    price: "Rp20.000",
    imageUrl: "./public/images/4.jpg",
  },
];
