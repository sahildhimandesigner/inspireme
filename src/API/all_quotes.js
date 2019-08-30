import quotes from './quotes.json';
export const allQuoteList = () => new Promise(res => res(quotes));
