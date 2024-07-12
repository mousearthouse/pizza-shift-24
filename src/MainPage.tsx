import React from 'react';
import Header from './Header';
import { useState, useCallback, useEffect } from 'react';
import { PizzaCard } from '@/assets/icons/exports';
import { getPizzaCatalog } from '@/GetPizzaCatalog';
import Modal from './Modal';


const openModal = (pizza: Pizza) => {
  console.log(pizza);
};

const MainPage: React.FC = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);

  const handleDataLoaded = useCallback(async () => {
    const pizzaData = await getPizzaCatalog();
    setPizzas(pizzaData);
  }, []);
  
  useEffect(() => {
    handleDataLoaded();
  }, [handleDataLoaded]);

  const openModal = (pizza: Pizza) => {
    setSelectedPizza(pizza);
  };

  const closeModal = () => {
    setSelectedPizza(null);
  };

  return (
    <div className='main'>
      <Header />
      <div className='container_description'>
          <div className='name'>
            Мы - ШИФТ ПИЦЦА.
          </div>
          <div className='description'>
            В приготовлении пиццы достигли космических высот - доставим даже на Марс! :)
          </div>
        </div>

        <div className="container_cards">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} openModal={openModal} />
          ))}
        </div>

      <Modal pizza={selectedPizza} onClose={closeModal} />
    </div>
  );
}

export default MainPage;
