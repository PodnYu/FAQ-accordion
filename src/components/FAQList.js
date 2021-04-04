import { useState } from 'react';
import './FAQList.css';
import FAQItem from './FAQItem';

export default function FAQList() {

  const [faqItems, setFAQItems] = useState([
    {
      id: 1,
      question: "Item 1",
      answer: "Gorgeous shades of color, of course! Our color shades pages curate a selection of popular colors, whether you're looking for that wonderful soft baby blue or hyper lime green, check out the shades pages.",
      opened: false
    },
    {
      id: 2,
      question: "Item 2",
      answer: "Gorgeous shades of color, of course! Our color shades pages curate a selection of popular colors, whether you're looking for that wonderful soft baby blue or hyper lime green, check out the shades pages.",
      opened: false
    },
    {
      id: 3,
      question: "Item 3",
      answer: "Gorgeous shades of color, of course! Our color shades pages curate a selection of popular colors, whether you're looking for that wonderful soft baby blue or hyper lime green, check out the shades pages.",
      opened: false
    },
    {
      id: 4,
      question: "Item 4",
      answer: "Gorgeous shades of color, of course! Our color shades pages curate a selection of popular colors, whether you're looking for that wonderful soft baby blue or hyper lime green, check out the shades pages.",
      opened: false
    },
    {
      id: 5,
      question: "Item 5",
      answer: "Gorgeous shades of color, of course! Our color shades pages curate a selection of popular colors, whether you're looking for that wonderful soft baby blue or hyper lime green, check out the shades pages.",
      opened: false
    }
  ]);

  const toggleAnswer = (faqItem) => {
    faqItem.opened = !faqItem.opened;
    setFAQItems(prevItems => prevItems.map(item => {
      if (item.id == faqItem.id)
        return faqItem;
      return item;
    }));
  }

  return (
    <div className="FAQList-container">
      <h1>FAQ</h1>
      <div className="FAQList">
        {faqItems.map((item, index) => <FAQItem key={index} faqItem={item} toggleAnswer={toggleAnswer} />)}
      </div>
    </div>
  );
}