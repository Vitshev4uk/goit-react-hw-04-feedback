import React from "react";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOption from "./FeedbackOption/FeedbackOption";
import NotificationMessage from "./NotificationMessage/NotificationMessage";

function App() {
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);

  const handleFeedBackClick = (type) => {
    if (type === 'good') {
          setGood(prevGood => prevGood +1)
    } else if (type === 'neutral') {
      setNeutral(prevNeutral => prevNeutral +1)
    } else if (type === 'bad') {
      setBad(prevBad => prevBad + 1)
        }
  };

  const  countTotalFeedback = () => {
    return good + neutral + bad;
  };
    const countPositiveFeedbackPercentage = () => {
      const total = good + neutral + bad;
      const positivPercentage = (good / total) * 100;
      return positivPercentage.toFixed(0);
    };
  
  return (
      <div style={{
        margin: 200
      }}>
         <Section title="Please leave feedback">
          <FeedbackOption
            types={['good', 'neutral', 'bad']}
            handleFeedBackClick={handleFeedBackClick}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() !== 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          /> : <NotificationMessage message="There is no feedback" />}
        </Section>
      </div>
    )
}
export default App;

 
