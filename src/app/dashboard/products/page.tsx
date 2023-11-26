import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "@/app/ui/dashboard/products/products.module.css";
const Product = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder="Search for a product..." />
        <Link href={"/dashboard/products/add"}>
          <button className={style.addButton}>Add New</button>
        </Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={style.product}>
                <Image
                  src={"/832.jpg"}
                  alt="user"
                  width={40}
                  height={40}
                  className={style.ProductImage}
                />
                IPhone
              </div>
            </td>
            <td>Desc</td>
            <td>₹30000</td>
            <td>28-09-1997</td>
            <td>88</td>
            <td>
              <div className={style.buttons}>
                {" "}
                <Link href={"/dashboard/products/test"}>
                  <button className={`${style.button} ${style.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${style.button} ${style.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Product;
