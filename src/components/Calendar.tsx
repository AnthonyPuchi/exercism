import { Calendar } from 'antd';
import React, { useState } from 'react';

function isLeap(year: number): boolean {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function LeapYearCalendar() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  function onPanelChange(value: any) {
    setCurrentYear(value.year());
  }

  const dateCellRender = (date: any) => {
    const year = date.year();
    const isCurrentYear = year === currentYear;
    const isLeapYear = isLeap(year);

    if (isCurrentYear && isLeapYear) {
      return <div className="leap-year">{date.date()}</div>;
    }

    return date.date();
  };

  return (
    <div className="leap-year-calendar">
      <Calendar onPanelChange={onPanelChange} dateCellRender={dateCellRender} />
    </div>
  );
}

export default LeapYearCalendar;
