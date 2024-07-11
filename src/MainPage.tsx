import React from 'react';
import Header from './Header';
import { useState, useCallback, useEffect } from 'react';
import { PizzaCard } from '@/assets/icons/exports';
import { getPizzaCatalog } from '@/GetPizzaCatalog';


const openModal = (pizza: Pizza) => {
  console.log(pizza);
};

const MainPage: React.FC = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  //const [loading, setLoading] = useState<boolean>(true);
  //const [error, setError] = useState<string | null>(null);

  const handleDataLoaded = useCallback(async () => {
    const pizzaData = await getPizzaCatalog();
    setPizzas(pizzaData);
  }, []);
  
  useEffect(() => {
    handleDataLoaded();
  }, [handleDataLoaded]);

  return (
    <div>
      <Header />
      <main>
        <div className="container_cards">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} openModal={openModal} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
