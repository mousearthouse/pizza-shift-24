import React from 'react';
import { iconClose } from '@/assets/icons';
import { translationSize, translationIngredients } from '@/Translations';
import './Modal.scss';

interface ModalProps {
  pizza: Pizza | null;
  onClose: () => void;
}

const API_URL = 'https://shift-backend.onrender.com';

const Modal: React.FC<ModalProps> = ({ pizza, onClose }) => {
  if (!pizza) return null;

  return (
    <div className="modal">
      <div className="modal_content">
        <img src={iconClose} alt="Close" className="close" onClick={onClose} />
        <img src={`${API_URL}${pizza.img}`} alt={pizza.name} className="modal_img" />
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <div className="sizes">
          <h3>Размеры</h3>
          {pizza.sizes.map((size, index) => (
            <button key={index} className="size_button">
                {translationSize[size.name] || size.name}</button>
          ))}
        </div>
        <div className="toppings">
          <h3>Добавить по вкусу</h3>
          {pizza.toppings.map((topping, index) => (
            <div key={index} className="topping_item">
              <img src={`${API_URL}${topping.img}`} alt={topping.name} />
              <span>{translationIngredients[topping.name] || topping.name}</span>
              <span>{topping.cost} ₽</span>
            </div>
          ))}
        </div>
        <button className="add_to_cart">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default Modal;
