import './MainPage.scss';

export interface PizzaCardProps {
  pizza: Pizza;
  openModal: (pizza: Pizza) => void;
}

export const API_URL = 'https://shift-backend.onrender.com';

const PizzaCard = ({ pizza, openModal }: PizzaCardProps) => (
  <div key={pizza.id} className="pizza_card">
    <img src={`${API_URL}${pizza.img}`} alt={pizza.name} />
    <div>
    <h3>{pizza.name}</h3>
      <div className="pizza_card_information">
        
        <span>{pizza.description}</span>
      </div>
      <div className="pizza_price">
        <h3>от {pizza.sizes[0].price} ₽</h3>
      </div>
      <button className="animated-button" onClick={() => openModal(pizza)}>
        <span>Выбрать</span>
        <span></span>
      </button>
    </div>
  </div>
);

export default PizzaCard;