"use client";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {AiOutlineArrowUp} from 'react-icons/ai';
import { Box } from '@mui/material';


const FAQs = [
  {
    "Q": " Can you tell us about the story or concept behind a specific collection or design?",
    "A": "Each collection is a narrative, and every design has a story to tell. Whether drawing inspiration from cultural influences, personal experiences, or global trends, we infuse meaning into our creations. Exploring the stories behind our designs adds depth and connection to the garments you choose to wear."
  },
  {
    "Q": " How do you ensure the quality of your products?",
    "A": "At our clothing brand, quality is the cornerstone of our commitment to excellence. We meticulously ensure the superior quality of our products by utilizing a combination of a 3-thread cotton blend and luxury high-quality fabrics. This meticulous selection of materials not only enhances the comfort and durability of our garments but also contributes to a refined and premium finish."
  },
  {
    "Q": "What is the expected delivery time for orders?",
    "A": "Within Beirut, delivery 1-3 days, while outside Beirut, it generally ranges from 2-5 days. Please note that international shipping may take longer. You will receive a tracking number once your order has been shipped."
  },
  {
    "Q": "What is your return/exchange policy?",
    "A": "We do not accept returns. Exchange requests are applicable within 3 days of receiving the product. Items must be in their original condition with tags intact for exchange eligibility."
  },
  {
    "Q": "How Do You Handle Sizing and Fit?",
    "A": "At Conceptual, we understand the importance of finding the perfect fit for your style and comfort. Our clothing is designed with a slightly oversized fit to offer a relaxed and effortless look. We recommend referencing our size chart available on our website to ensure you select the best size for your measurements."
  },
]

export default function FAQ() {
  return (
    <Box className='auto' sx={{maxWidth:'md',mt:3}}>
      {FAQs.map(qa=>{
        return <Accordion key={qa.Q} sx={{mt:0}}>
        <AccordionSummary
          expandIcon={<AiOutlineArrowUp />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{qa.Q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {qa.A}
          </Typography>
        </AccordionDetails>
      </Accordion>
      })}

     
    </Box>
  );
}