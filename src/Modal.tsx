import React, { useState } from 'react';
import { iconClose } from '@/assets/icons';
import { translationSize, translationIngredients } from '@/Translations';
import './Modal.scss';

interface ModalProps {
  pizza: Pizza | null;
  onClose: () => void;
}

const API_URL = 'https://shift-backend.onrender.com';

const Modal: React.FC<ModalProps> = ({ pizza, onClose }) => {

    const [selectedToppings, setSelectedToppings] = useState<{ [key: string]: boolean }>({});

  if (!pizza) return null;

  const handleToppingClick = (topping: string) => {
    setSelectedToppings(prev => ({
      ...prev,
      [topping]: !prev[topping]
    }));
  };

  return (
    <div className="modal">
      <div className="modal_content">
        
        <img src={`${API_URL}${pizza.img}`} alt={pizza.name} className="modal_img" />

        <div className='modal_right'>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <h3>Размеры</h3>
            <div className="sizes">
            {pizza.sizes.map((size, index) => (
                <button key={index} className="size_button">
                    {translationSize[size.name] || size.name}</button>
            ))}
            </div>
            <h3>Добавить</h3>
            <div className="toppings">
            
            {pizza.toppings.map((topping, index) => (
                <div
                key={index}
                className={`topping_item ${selectedToppings[topping.name] ? 'selected' : ''}`}
                onClick={() => handleToppingClick(topping.name)}
                >
                <img src={`${API_URL}${topping.img}`} alt={topping.name} />
                <span>{translationIngredients[topping.name] || topping.name}</span>
                <span>{topping.cost} ₽</span>
                </div>
            ))}
            </div>
            <button className="add_to_cart">Добавить в корзину</button>
        </div>
        <img src={iconClose} alt="Close" className="close" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
