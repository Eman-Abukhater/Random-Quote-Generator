import React from 'react'
import { Button, Typography, Paper } from "@mui/material";

function QuoteBox({quote, getRandomQuote}) {
  return (
    <Paper elevation={3}>
        <Typography variant="h5" component="h2" sx={{ padding: 2 }}>
            "{quote.text}"
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ padding: 2 }}>
            - {quote.author}
        </Typography>
        <Button variant="contained" color="primary" onClick={getRandomQuote} sx={{ margin: 2 }}>
            Get New Quote
        </Button>


    </Paper>
  )
}

export default QuoteBox