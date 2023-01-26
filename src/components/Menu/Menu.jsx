import salat from '../../assets/cat-salat.svg';
import margarita from '../../assets/car-margarita.svg';
import burger from '../../assets/car-burger.svg';
import free from '../../assets/car-potato-free.svg';
import pizza from '../../assets/cat-piza.svg';
import discount from '../../assets/cat-discount.svg';
import Category from './Categories/Category';

//Картинки товаров

import salatFirst from '../../assets/item__image.png';
import Tovar from './Tovars/Tovar';
const Menu = () => {

    const categories = [
        {
            src: salat,
            text: 'Салаты',
        },
        {
            src: margarita,
            text: 'Напитки',
        },
        {
            src: burger,
            text: 'Бургеры',
        },
        {
            src: free,
            text: 'Закуски',
        },
        {
            src: pizza,
            text: 'Пицца',
        },
        {
            src: discount,
            text: 'Акции',
        }
    ]

    const tovars = [
        {
            src: salatFirst,
            name: 'Салат "Греческий"',
            description: '300 грамм - 1 порция',
            info: '36 - белков, 11 - жиров, 55 - углеводов',
        },
        {
            src: salatFirst,
            name: 'Салат "Греческий"',
            description: '300 грамм - 1 порция',
            info: '36 - белков, 11 - жиров, 55 - углеводов',
        },
        {
            src: salatFirst,
            name: 'Салат "Греческий"',
            description: '300 грамм - 1 порция',
            info: '36 - белков, 11 - жиров, 55 - углеводов',
        },
        {
            src: salatFirst,
            name: 'Салат "Греческий"',
            description: '300 грамм - 1 порция',
            info: '36 - белков, 11 - жиров, 55 - углеводов',
        },

    ]

    return (
        <section className="menu-tovar">
        <div className="container">
          <h2 className="menu-h2">Наше меню</h2>
          <div className="h2-underline"></div>
          <div className="menu-categories">
              {
                  categories.map((category) => {
                      return (
                          <Category url={category.src} text={category.text} />
                      )
                  })
              }
          </div>
          <div className="menu-tovar-card">
            <div className="menu-tovar-card__elem">
              {
                  tovars.map((tovar) => {
                      return (
                          <Tovar tovar={tovar}/>
                      )
                  })
              }
              </div>
          </div>
          <div className="more-tovar-button">
            Показать ещё
          </div>
        </div>
      </section>
    )
}

export default Menu;