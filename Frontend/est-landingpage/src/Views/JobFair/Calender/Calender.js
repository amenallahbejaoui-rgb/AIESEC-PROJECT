import React, { useState, useEffect } from 'react';

function Calender() {
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 3,
    minutes: 1,
    seconds: 53
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    padding: '4rem 2rem',
    textAlign: 'center',
    color: 'white'
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '3rem',
    letterSpacing: '2px'
  };

  const countdownContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '4rem',
    flexWrap: 'wrap'
  };

  const timeBlockStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const timeNumberStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    lineHeight: '1'
  };

  const timeLabelStyle = {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '0.5rem'
  };

  const separatorStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#666'
  };

  const hotelSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    fontSize: '1.5rem'
  };



  return (
    <div className="calender-container" style={containerStyle}>
      <h1 style={titleStyle}>Mark Your Calendar</h1>
      
      <div style={countdownContainerStyle}>
        <div style={timeBlockStyle}>
          <span style={timeNumberStyle}>{String(timeLeft.days).padStart(2, '0')}</span>
          <span style={timeLabelStyle}>DAYS</span>
        </div>
        
        <span style={separatorStyle}>|</span>
        
        <div style={timeBlockStyle}>
          <span style={timeNumberStyle}>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span style={timeLabelStyle}>Hours</span>
        </div>
        
        <span style={separatorStyle}>|</span>
        
        <div style={timeBlockStyle}>
          <span style={timeNumberStyle}>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span style={timeLabelStyle}>Minutes</span>
        </div>
        
        <span style={separatorStyle}>|</span>
        
        <div style={timeBlockStyle}>
          <span style={timeNumberStyle}>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span style={timeLabelStyle}>Seconds</span>
        </div>
      </div>

      <div style={hotelSectionStyle}>
        <img 
          src="/loc.png" 
          alt="Location icon"
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'contain',
            filter: 'brightness(0) saturate(100%) invert(1) contrast(100%)',
            mixBlendMode: 'screen'
          }}
        />
        <span>Hotel ....</span>
      </div>
    </div>
  );
}

export default Calender;