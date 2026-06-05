import React, { useEffect } from 'react';
import Calender from './Calender/Calender';
import Agenda from './Agenda/Agenda';
import Attendance from './Attendance/Attendance';

function JobFair(props) {
  useEffect(() => {
    if (props.callBack) {
      props.callBack();
    }
  }, [props]);

  return (
    <div 
      className="job-fair-page" 
      style={{
        backgroundColor: '#111923',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <Calender />
      <Agenda />
      <Attendance />
    </div>
  );
}

export default JobFair;