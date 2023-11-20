import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

export default function Question_2() {
  const [displayText, setDisplayText] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    if (isButtonActive) {
      setIsButtonActive(false);
      setDisplayText('');
    } else {
      setIsButtonActive(true);
      setDisplayText(
        `Absolutely! Many of our tours cater to solo travelers, and we can arrange shared accommodations or connect you with other like-minded travelers.`
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
      Are your tours suitable for 
solo travelers?
        <span className={`chevron ${isButtonActive ? 'active' : ''}`}>
          {isButtonActive ? <ChevronUp /> : <ChevronDown />}
        </span>
      </p>
      <p className="answer">{displayText}</p>
    </button>
  );
}