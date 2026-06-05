import React from "react";

const Attendance = () => {
  const wrapper = {
    color: 'white',
    padding: '6rem 1rem',
    display: 'flex',
    justifyContent: 'center'
  };

  const container = {
    width: '100%',
    maxWidth: '1100px',
    position: 'relative',
    textAlign: 'center'
  };

  const title = {
    fontFamily: 'Konnect, sans-serif',
    fontWeight: 700,
    fontStyle: 'Bold',
    fontSize: '80px',
    // leading-trim is experimental; included per request
    leadingTrim: 'NONE',
    lineHeight: '120%',
    letterSpacing: '0%',
    textAlign: 'center',
    margin: '0 0 1rem'
  };

  const subtitle = {
    marginTop: '130px',
    maxWidth: '760px',
    color: 'rgba(255,255,255,0.9)',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 200,
    fontStyle: 'Bold',
    fontSize: '17px',
    // leading-trim is experimental; included per request
    leadingTrim: 'NONE',
    lineHeight: '120%',
    letterSpacing: '0%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 3
  };

  const leftStack = {
    position: 'absolute',
    left: 0,
    top: '80px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flex-start'
  };

  const rightStack = {
    position: 'absolute',
    top: '120px',
    left: '800.93px',
    zIndex: 0,
    pointerEvents: 'none'
  };

  const smallImg = (rotate) => ({
    width: '200.0841275408615px',
    height: '200.99999034261532px',
    marginTop: '120px',
    objectFit: 'cover',
    borderRadius: '18px',
    transform: `rotate(${rotate}deg)`,
    boxShadow: '0 18px 30px rgba(0,0,0,0.6)',
    border: '3px solid rgba(255,255,255,0.06)',
    opacity: 1,
    position: 'relative',
    zIndex: 3
  });
  const smallImg2 = (rotate) => ({
    width: '185px',
    height: '185px',
    marginLeft: '95px',
    marginTop: '-370px',
    objectFit: 'cover',
    borderRadius: '18px',
    transform: `rotate(${rotate}deg)`,
    boxShadow: '0 18px 30px rgba(0,0,0,0.6)',
    border: '3px solid rgba(255,255,255,0.06)',
    opacity: 1,
    position: 'relative',
    zIndex: 1
  });

  const rightImgStyle = {
    width: '200.0841275408615px',
    height: '200.99999034261532px',
    objectFit: 'cover',
    borderRadius: '18px',
    transform: 'rotate(15.65deg)',
    boxShadow: '0 18px 40px rgba(0,0,0,0.6)',
    border: '3px solid rgba(255,255,255,0.06)',
    opacity: 1,
    zIndex: 0
  };

  const quoteWrap = {
    // layout and sizing per request
    width: '801px',
    height: '156px',
    margin: '3rem auto',
    padding: '1.25rem 1.75rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
    background: 'transparent',
    color: 'rgba(255,255,255,0.95)',
    border: '2px solid #1A88F0',
    borderRadius: '78px',
    opacity: 1,
    transform: 'rotate(0deg)',
    position: 'relative',
    zIndex: 3
  };

  const quoteText = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 500,
    fontSize: '17px',
    // leading-trim is experimental; included per request
    leadingTrim: 'NONE',
    lineHeight: '120%',
    letterSpacing: '0%',
    textAlign: 'center',
    margin: 0,
    padding: '0 1rem'
  };
  const desc = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 500,
    fontSize: '17px',
    // leading-trim is experimental; included per request
    leadingTrim: 'NONE',
    lineHeight: '120%',
    letterSpacing: '0%',
    textAlign: 'center',
    margin: 0,
    padding: '0 1rem',
    position: 'relative',
    zIndex: 3
  };

  const registerWrap = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5rem',
    gap: '135px'
  };

  const registerBtn = {
    width: '191px',
        marginTop: '50px',

    height: '60px',
    background: '#ffffff',
    color: '#50A4F3',
    // keep text centered
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '999px',
    textDecoration: 'none',
    fontWeight: 700,
    opacity: 1,
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={wrapper}>
      <div style={container}>
        <h1 style={title}>Why to attend</h1>
        <p style={subtitle}>
          <span style={{ display: 'block', marginBottom: '1rem' }}>
            Step into a world of opportunities at the AIESEC Career Fair!
          </span>
          From discovering exciting career paths to meeting recruiters from top companies<br/> and NGOs, this is your chance to connect, learn, and grow. Expand your<br/> professional network, explore international opportunities, and gain insights that<br/> will fuel your future success.
        </p>

        <div style={leftStack}>
          <img src="/images/people.jpeg" alt="people" style={smallImg(-12)} /> 
          <img src="/images/jobfair.jpeg" alt="jobfair" style={smallImg2(-12)} /> 
        </div>

        <div style={rightStack}>
           <img src="/images/girl.jpeg" alt="speaker" style={rightImgStyle} /> 
        </div>

        <div style={quoteWrap}>
          <p style={quoteText}>
            “Attending the Career Fair opened doors I never imagined. I connected with <br/> amazing recruiters, discovered internships abroad, and left inspired to take my<br/> career to the next level.”
          </p>
          <p>— Former Participant</p>
          
        </div>
        <div style={desc}>
        <p>This isn’t just a job fair, it’s a launchpad for your growth, learning, and<br/> unforgettable connections. ✨</p>
        </div>
        <div style={registerWrap}>
          <a href="/registration" style={registerBtn}>Register Now!</a>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
