import quotes from './quotes.json';

export const getQuote = (todayDate) => new Promise(res => res(quotes[todayDate + 1]));
export const getAllQuotes = () => new Promise(res => res(quotes));