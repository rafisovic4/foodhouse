import Category from "./Categories/Category";
import Tovar from "./Tovars/Tovar";
import { useEffect, useState } from "react";
import { initialCategories } from "../../data/categories.js";
import { initialProducts } from "../../data/products.js";

const Menu = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProducts);

  const [selectedCategory, setSelectedCategory] = useState("none");

  const onChangeSelectedCategory = (type) => {
    setSelectedCategory(type);
  };

  useEffect(() => {
    setProducts((prevState) => {
      prevState = [...prevState];

      prevState = initialProducts.filter(
        (product) => product.type === selectedCategory
      );

      if (selectedCategory === "none") {
        prevState = initialProducts;
      }

      return prevState;
    });
  }, [selectedCategory]);


  return (
    <section className="menu-tovar">
      <div className="container">
        <h2 className="menu-h2">Наше меню</h2>
        <div className="h2-underline"></div>
        <div className="menu-categories">
          {categories.map((category) => {
            return (
              <Category
                category={category}
                onChangeSelectedCategory={onChangeSelectedCategory}
              />
            );
          })}
        </div>
        <div className="menu-tovar-card">
          {
              products.length === 0 ? <h1>Продуктов в данной категории нет</h1> : products.map((tovar) => {
                return <Tovar tovar={tovar} />;
              })
          }
        </div>
        <div className="more-tovar-button">Показать ещё</div>
      </div>
    </section>
  );
};

export default Menu;
