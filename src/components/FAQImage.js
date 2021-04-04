import './FAQImage.css';

export default function FAQImage() {
  return (
    <div className="image-container">
      <div className="woman-image-container">
        <img className="woman-image" src="./images/illustration-woman-online-desktop.svg" />
      </div>
      <div className="box-image">
        <img src="./images/illustration-box-desktop.svg" />
      </div>
    </div>
  );
}