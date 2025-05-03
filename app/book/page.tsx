'use client';
import React from 'react'

export default function Book() {
  const bookList = [
    {
      name:"圖解考試的科學：高效率學習的關鍵",
      image: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/096/47/0010964719.jpg&v=64ca306ck&w=348&h=348",
      site: "https://www.books.com.tw/products/0010964719?sloc=main",
      price: "432"
    },
    {
      name:"法律人的第一本書（7版）",
      image: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/099/24/0010992430.jpg&v=666c1bb8k&w=348&h=348",
      site: "https://www.books.com.tw/products/0010992430?sloc=main",
      price: "380"
    },
    {
      name:"圖解憲法：國家考試的第一本書（第五版）",
      image: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/099/91/0010999157.jpg&v=66c7135dk&w=348&h=348",
      site: "https://www.books.com.tw/products/0010999157?sloc=main",
      price: "675"
    },
    {
      name:"圖解民法：國家考試的第一本書（第五版",
      image: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/093/99/0010939969.jpg&v=6357bafak&w=348&h=348",
      site: "https://www.books.com.tw/products/0010939969?sloc=main",
      price: "675"
    },
    {
      name:"圖解刑法：國家考試的第一本書（第七版）",
      image: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/098/33/0010983319.jpg&v=65d7224ck&w=348&h=348",
      site: "https://www.books.com.tw/products/0010983319?sloc=main",
      price: "612"
    },
    {
      name:"圖解行政法：國家考試的第一本書（第五版）",
      image: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/097/49/0010974918.jpg&v=655f2a30k&w=348&h=348",
      site: "https://www.books.com.tw/products/0010974918?sloc=main",
      price: "675"
    },
  ];

  const total = bookList.reduce((sum, book) => sum + parseInt(book.price), 0);

  return (
<div>
  {bookList.map((book, index) => (
    <div key={index}>
      <img src={book.image} alt={book.name} />
      <button
        className="hover:text-blue-500"
        onClick={() => window.open(book.site, "_blank")}
      >
        {book.name}
      </button>
      <div>價格：{book.price} 元</div>
    </div>
  ))}
  <div>累積金額：{total} 元</div>
</div>

  );
}
