import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

export default function Question() {
  const [displayText, setDisplayText] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    if (isButtonActive) {
      setIsButtonActive(false);
      setDisplayText('');
    } else {
      setIsButtonActive(true);
      setDisplayText(
        `Our 24/7 customer support hotline is available for any assistance or emergencies. You'll receive the contact details with your booking confirmation.`
      );
    }
  };
 

  return (
    <button
      type="button"
      className={`answer_wrapper ${isButtonActive ? 'active' : ''}`}
      onClick={handleButtonClick}
    >
      <p className="question">
        How can I contact your customer support during my trip?
        <span className={`chevron ${isButtonActive ? 'active' : ''}`}>
          {isButtonActive ? <ChevronUp /> : <ChevronDown />}
        </span>
      </p>
      <p className="answer">{displayText}</p>
    </button>
  );
}
