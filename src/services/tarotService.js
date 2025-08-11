import axios from 'axios';

const BASE_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

/**
 * Fetches all tarot cards from the API
 * @returns {Promise<Array>} Array of tarot cards
 */
export const getAllCards = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching all cards:', error);
    throw new Error('Failed to fetch tarot cards');
  }
};

/**
 * Fetches a single tarot card by its ID
 * @param {string} id - The ID of the tarot card to fetch
 * @returns {Promise<Object>} The tarot card data
 */
export const getCardById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching card with id ${id}:`, error);
    throw new Error('Failed to fetch tarot card details');
  }
};
