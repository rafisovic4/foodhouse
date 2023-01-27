const Category = ({ onChangeSelectedCategory, category }) => {
  return (
    <div className="menu-categories">
      <div
        className="menu-categories-elem"
        onClick={() => onChangeSelectedCategory(category.type)}
      >
        <img src={category.src} className="categories-image"/>

        <p className="categories-p">{category.text}</p>
      </div>
    </div>
  );
};

export default Category;
