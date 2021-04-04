import { useRef } from 'react';
import './FAQItem.css';
import arrowIcon from '../icon-arrow-down.svg';

export default function FAQItem({ faqItem, toggleAnswer }) {

  let answerRef = useRef();
  let arrowClass = "arrow " + (faqItem.opened ? "arrow-up" : "");
  let answerStyle = {
    maxHeight: faqItem.opened ? answerRef.current.scrollHeight + 'px' : null
  };

  return (
    <div className="FAQItem">
      <div className="question-container" onClick={() => toggleAnswer(faqItem)}>
        <span className={"question " + (faqItem.opened ? "question-active" : "")}>{faqItem.question}</span>
        <div className={arrowClass}>
          <img src={arrowIcon} />
        </div>
      </div>
      <div className="answer" ref={answerRef} style={answerStyle}><p>{faqItem.answer}</p></div>
    </div>
  );
}