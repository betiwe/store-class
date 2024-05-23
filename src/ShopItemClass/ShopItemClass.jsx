import { Component } from 'react';
import style from './shopItemClass.module.css';

export default class ShopItemClass extends Component {
  render() {
    const {brand, title, description, descriptionFull, currency, price} = this.props.item;
    return (
      <div className={style['main-content']}>
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className={style['description']}>{descriptionFull}</div>
        <div className={style['highlight-window mobile']}>
          <div className={style['highlight-overlay']}></div>
        </div>
        <div className={style['divider']}></div>
        <div className={style['purchase-info']}>
          <div className={style['price']}>
            {currency}
            {price}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}
