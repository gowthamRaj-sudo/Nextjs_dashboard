import React from "react";
import style from "@/app/ui/dashboard/products/singleProduct/SingleProduct.module.css";
import Image from "next/image";
const SingleProductPage = () => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.imgContainer}>
          <Image src="/832.jpg" alt="user" fill />
        </div>
        Gowtham
      </div>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Gowtham" />
          <label>Price</label>
          <input type="number" name="price" placeholder="gowtham@gmail.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="Gowtham" />

          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="Kovalam" />
          <label>Catagories</label>
          <select name="cat" id="cat">
            <option value={"Kitchen"}>Kitchen</option>
            <option value={"computer"}>Computer</option>
            <option value={"phone"}>Phone</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
