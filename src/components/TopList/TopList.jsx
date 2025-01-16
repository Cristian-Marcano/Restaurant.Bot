import React from "react";
import CachapaQuesoImg from '../../assets/cachapa-queso.webp'
import CachapaQuesoCochinoImg from '../../assets/cachapa-queso-cochino.webp'
import ClubHouseClasicoImg from "../../assets/club-house-clasico.webp"
import ClubHouseEspecialImg from '../../assets/club-house-especial.webp'
import PizzaMargaritaImg from '../../assets/pizza-margarita.webp'
import PizzaPepperoniImg from '../../assets/pizza-pepperoni.webp'
import HamburguesaClasicaImg from '../../assets/hamburguesa-clasica.webp'
import HamburguesaBBQImg from '../../assets/hamburguesa-bbq.webp'
import PastichoCarneImg from '../../assets/pasticho-carne.webp'
import PastichoPolloImg from '../../assets/pasticho-pollo.webp'
import ShawarmaPolloImg from '../../assets/shawarma-pollo.webp'
import ShawarmaEspecialImg from '../../assets/shawarma-especial.webp'

const FoodData = [
  {
    image: CachapaQuesoImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "5.5$",
    name: "Cachapa con Queso",
    desc: "Elaborada con maiz tierno y queso telita.",
  },
  {
    image: CachapaQuesoCochinoImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "7.50$",
    name: "Cachapa con Queso y Cochino",
    desc: "Elaborada con maiz tierno, queso telita y cochino frito.",
  },
  {
    image: ClubHouseClasicoImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "7.00$",
    name: "Club House Clasico",
    desc: "Papas fritas, sandwiches con pollo, jamon, queso, lechuga, tomate, mayonesa.",
  },
  {
    image: ClubHouseEspecialImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "8.50$",
    name: "Club House Especial",
    desc: "Papas fritas, sandwiches con pollo, tocineta, salami, queso lechuga, tomate, mayonesa.",
  },
  {
    image: PizzaMargaritaImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "10.00$",
    name: "Pizza Margarita",
    desc: "Pizza de queso mozzarela, con salsa napolitana.",
  },
  {
    image: PizzaPepperoniImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "12.00$",
    name: "Pizza Pepperoni",
    desc: "Pizza de queso mozzarela, con salsa napolitana y pepperoni.",
  },
  {
    image: HamburguesaClasicaImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "8.00$",
    name: "Hamburguesa Clasica",
    desc: "Hamburguesa con carne, queso, lechuga, tomate y cebolla.",
  },
  {
    image: HamburguesaBBQImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "9.50$",
    name: "Hamburguesa BBQ",
    desc: "Hamburguesa con carne, tocineta, queso, lechuga, tomate, cebolla y salsa BBQ.",
  },
  {
    image: PastichoCarneImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "7.50$",
    name: "Pasticho de Carne",
    desc: "Pasticho con carne molida, queso y salsa de tomate.",
  },
  {
    image: PastichoPolloImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "8.00$",
    name: "Pasticho de Pollo",
    desc: "Pasticho con pollo molida, queso y salsa de blanca.",
  },
  {
    image: ShawarmaPolloImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "5.50$",
    name: "Shawarma de Pollo",
    desc: "Shawarma con tomate, lechuga, pollo, salsa de ajo y pan arabe.",
  },
  {
    image: ShawarmaEspecialImg,
    rating: "⭐⭐⭐⭐⭐",
    price: "7.00$",
    name: "Shawarma Especial",
    desc: "Shawarma con tomate, lechuga, pollo, carne, pepino, aji dulce, salsa de ajo y pan arabe.",
  },
];

const TopList = () => {
  return (
    <div className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Menu</h1>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
