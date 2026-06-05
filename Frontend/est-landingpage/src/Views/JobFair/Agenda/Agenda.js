import React, { useState } from 'react';

function Agenda() {
  const [showAll, setShowAll] = useState(false);

  const initialAgendaItems = [
    { time: '8h15', event: 'Check in & Registration' },
    { time: '9h00', event: 'Opening Ceremony' },
    { time: '9h30', event: 'Partner Keynote' },
    { time: '9h45', event: 'Partner Keynote' }
  ];

  const additionalAgendaItems = [
    { time: '10h00', event: 'Break' },
    { time: '10h15', event: 'Innovation Camp part 1' },
    { time: '12h30', event: 'Networking Space' },
    { time: '14h00', event: 'Lunch' },
    { time: '14h00', event: 'Innovation Camp part 2' },
    { time: '14h00', event: 'Panel BCX' },
    { time: '14h00', event: 'Closing Ceremony' }
  ];

  const containerStyle = {
    padding: '4rem 2rem',
    textAlign: 'center',
    color: 'white',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '4rem',
    letterSpacing: '2px'
  };

  const agendaListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '3rem'
  };

  const agendaRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  const timeStyle = {
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderRadius: '25px',
    padding: '12px 24px',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '500',
    minWidth: '120px',
    textAlign: 'center'
  };

  const eventStyle = {
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderRadius: '25px',
    padding: '12px 32px',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '500',
    minWidth: '450px',
    textAlign: 'center',
    flex: '1',
    maxWidth: '600px'
  };

  const arrowButtonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    margin: '0 auto'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Agenda</h1>
      
      <div style={agendaListStyle}>
        {initialAgendaItems.map((item, index) => (
          <div key={index} style={agendaRowStyle}>
            <div style={timeStyle}>
              {item.time}
            </div>
            <div style={eventStyle}>
              {item.event}
            </div>
          </div>
        ))}
        
        {showAll && additionalAgendaItems.map((item, index) => (
          <div key={`additional-${index}`} style={agendaRowStyle}>
            <div style={timeStyle}>
              {item.time}
            </div>
            <div style={eventStyle}>
              {item.event}
            </div>
          </div>
        ))}
      </div>

      <div 
        style={arrowButtonStyle}
        onClick={() => setShowAll(!showAll)}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          width="24"
          height="24"
          style={{
            transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </div>
    </div>
  );
}

export default Agenda;