import './Card.css';
import FAQImage from './FAQImage';
import FAQList from './FAQList';

export default function Card() {
  return (
    <div className="card">
      <FAQImage />
      <FAQList />
    </div>
  );
}