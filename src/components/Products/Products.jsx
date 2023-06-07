import React from "react";
import Product from "../Product";
import prod from "./products.module.css";
const Products = () => {
  const products = [
    {
      id: 1,
      name: "MacBook",
      price: 100000,
      left: 31,
      image: "http://intocode.ru/d/react-project-1/images/1.jpg",
    },
    {
      id: 2,
      name: "Galaxy",
      price: 35999,
      left: 11,
      image: "http://intocode.ru/d/react-project-1/images/2.jpg",
    },
    {
      id: 3,
      name: "Скутер",
      price: 65500,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/3.jpg",
    },
    {
      id: 4,
      name: "Монитор Samsung",
      price: 12000,
      left: 7,
      image: "http://intocode.ru/d/react-project-1/images/4.jpg",
    },
    {
      id: 5,
      name: "Респераторная маска",
      price: 500,
      left: 24,
      image: "http://intocode.ru/d/react-project-1/images/5.jpg",
    },
    {
      id: 6,
      name: "Стиральная машина",
      price: 100000,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/6.jpg",
    },
    {
      id: 7,
      name: "Белый холодильник",
      price: 43100,
      left: 18,
      image: "http://intocode.ru/d/react-project-1/images/7.jpg",
    },
    {
      id: 8,
      name: "Колонка",
      price: 3000,
      left: 1,
      image: "http://intocode.ru/d/react-project-1/images/8.jpg",
    },
    {
      id: 9,
      name: "Наушники",
      price: 1500,
      left: 5,
      image: "http://intocode.ru/d/react-project-1/images/9.jpg",
    },
  ];

  return (
    <table className={prod.products}  style = {{border: '1px solid black', margin: 'auto'}}>
      <thead  >
       <tr >
         <th style = {{border: '1px solid black'}}>
          image
        </th>
        <th style = {{border: '1px solid black'}}>
          price
        </th>
        <th style = {{border: '1px solid black'}}>
          name
        </th>
        <th style = {{border: '1px solid black'}}>
          id
        </th>
       </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              left={product.left}
              image={product.image}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Products;
