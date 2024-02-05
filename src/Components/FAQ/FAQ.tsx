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
    "Q": "How long does shipping take?",
    "A": "Shipping times may vary depending on your location and the shipping method you choose. We offer standard shipping which usually takes 3-5 business days within the Beirut. Please note that international shipping may take longer. You will receive a tracking number once your order has been shipped."
  },
  {
    "Q": "What is your return policy?",
    "A": "We want you to be 100% satisfied with your purchase, so we offer a 5-day money-back guarantee on all our products. If you’re not happy with your purchase, simply contact us and we’ll be happy to assist you with a return or exchange."
  },
  {
    "Q": "Do you offer any discounts or promotions?",
    "A": "Yes, we do! We offer regular discounts and promotions for our loyal customers. Sign up for our newsletter to stay in the loop about our latest deals and discounts. You can also follow us on social media for exclusive offers and giveaways."
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