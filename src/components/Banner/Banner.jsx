import bannerImage from "../../assets/basket-img.png";

const Banner = () => {
    return (
        <section className="banner">
        <div className="container">
          <div className="banner-osnova">
            <div className="leftside-info">
              <div className="leftside-text-info">
                <p className="leftside-p-active">
                  Экспресс-доставка от Яндекс.Еды
                </p>
                <h1 className="leftside-h1">Быстро и вкусно <span className="tochka">.</span></h1>
                <p className="leftside-p">Сеть быстрого питания #1 в Казани</p>
              </div>
              <div className="leftside-button-info">
                <a href="#" className="buy-button">Сделать заказ</a>
                <a href="#" className="free-delivery-button">бесплатная доставка <br /> от 500 рублей</a>
              </div>
            </div>
            <div className="rightside-info">
              <img src={bannerImage} alt="" className="banner-image" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Banner;