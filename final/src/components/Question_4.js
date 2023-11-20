import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

export default function Question_4() {
  const [displayText, setDisplayText] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    if (isButtonActive) {
      setIsButtonActive(false);
      setDisplayText('');
    } else {
      setIsButtonActive(true);
      setDisplayText(
        `Yes, we offer comprehensive travel insurance packages to provide peace of mind and coverage for unexpected situations during your journey.`
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
      Do you offer travel insurance options?
        <span className={`chevron ${isButtonActive ? 'active' : ''}`}>
          {isButtonActive ? <ChevronUp /> : <ChevronDown />}
        </span>
      </p>
      <p className="answer">{displayText}</p>
    </button>
  );
}