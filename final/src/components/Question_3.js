import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

export default function Question_3() {
  const [displayText, setDisplayText] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    if (isButtonActive) {
      setIsButtonActive(false);
      setDisplayText('');
    } else {
      setIsButtonActive(true);
      setDisplayText(
        `Absolutely! We offer personalized itineraries to tailor your trip according to your interests, so you can have the experience you desire.`
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
      Can I customize my travel itinerary 
to suit my preferences?
        <span className={`chevron ${isButtonActive ? 'active' : ''}`}>
          {isButtonActive ? <ChevronUp /> : <ChevronDown />}
        </span>
      </p>
      <p className="answer">{displayText}</p>
    </button>
  );
}