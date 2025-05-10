import React, { useState } from 'react'
import Container from '@mui/material/Container'
import QuoteBox from './QuoteBox';

const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" }
  ];
function QuoteGenerator() {
    const [quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }


  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>

      <QuoteBox quote={quote} getRandomQuote={getRandomQuote} />
      
    </Container>
  )
}

export default QuoteGenerator