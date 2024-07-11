export const API_URL = 'https://shift-backend.onrender.com';

export const getPizzaCatalog = async (): Promise<Pizza[]> => {
  const response = await fetch(`${API_URL}/pizza/catalog`);
  if (!response.ok) {
    throw new Error('Failed to fetch pizzas');
  }
  const data = await response.json();
  console.log('Fetched data');
  if (data && Array.isArray(data.catalog)) {
    return data.catalog;
  } else {
    throw new Error('Fetched data is not an array');
  }
  return data;
};
