import logotype from "../../assets/logotype.svg";
import basketIcon from "../../assets/basket-icon.svg";

const Header = () => {
    return (
        <header>
        <div className="container">
          <div className="header-osnova">
            <div className="logotype-header">
              <img
                src={logotype}
                alt="logotype"
                className="logotype-img"
              />
            </div>
            <nav className="menu-navigation">
              <a href="#" className="a-menu-navigation">
                Главная
              </a>
              <a href="#" className="a-menu-navigation">
                Меню
              </a>
              <a href="#" className="a-menu-navigation">
                Сервис
              </a>
              <a href="#" className="a-menu-navigation">
                О нас
              </a>
            </nav>
            <div className="basket-icon">
              <div className="basket-icon">
                <img src={basketIcon} alt="Корзина" />
              </div>
              <div className="number-div">12</div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;