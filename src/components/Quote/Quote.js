import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://quotes.rest/qod?category=inspire');
      const data = await response.json();
      setQuote(data.contents.quotes[0]);
    };

    fetchQuote();
  }, []);

  if (!quote) {
    return <p>Loading quote...</p>;
  }

  const { quote: quoteText, author } = quote;

  return (
    <div className='Quote'>
      <p>{quoteText}</p>
      <p>― {author}</p>
    </div>
  );
};

export default Quote;
