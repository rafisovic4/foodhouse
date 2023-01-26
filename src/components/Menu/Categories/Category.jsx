const Category = ({ url, text }) => {
  return (
      
    <div className="menu-categories">
      <div className="menu-categories-elem">
        <img src={url} />
    
        <p className="categories-p">{text}</p>
      </div>
    </div>
  );
};

export default Category;
