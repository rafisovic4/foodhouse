const Tovar = ({ tovar }) => {
  return (
      <div className="menu-tovar-card__elem">
        <img src={tovar.src} alt={tovar.name} className="tovar-image" />

        <div className="tovar-card-elem__text">
          <div className="card-elem__text">
            <p className="h1-elem">{tovar.name}</p>
            <p className="p-first_info">{tovar.description}</p>
            <p className="p-second_info">{tovar.info}</p>
          </div>
          <div className="card-elem__button">Добавить в корзину</div>
        </div>
      </div>
  );
};

export default Tovar;
