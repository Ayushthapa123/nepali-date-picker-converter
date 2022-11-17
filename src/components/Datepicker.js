import React, { useState, useEffect, useCallback } from 'react'

import { weeks, months, minyear, maxyear, endofmonths, leapyearsindex, allyears } from './datepicker/data';

import { findLeapNepaliYears } from './datepicker/findLeapNepaliYears';
import convertToAd from './datepicker/convertToAd';

import "./css/datepicker.css"


import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'


export default function Datepicker() {

  const [date, setDate] = useState('');
  const [currentyear, setCurrentyear] = useState(allyears[55]);
  const [currentmonth, setCurrentmonth] = useState(months[0]);
  const [endofmonth, setEndofmonth] = useState(endofmonths[0][0]);
  const [yearindex, setYearindex] = useState(0);
  const [monthindex, setMonthindex] = useState(0);
  const [day, setDay] = useState(1);
  const [showcalender, setShowcalender] = useState(false);

  const [start_week_padding, setStartWeekPadding] = useState('');
  const [start_week_padding_array, setStartWeekPaddingarray] = useState([]);



  let alldays = [];


  // let start_week_padding;
  // let start_week_padding_array=[]

  function changeColor(e) {
    let buttons = document.getElementsByClassName("daybuttons");
    for (let x = 0; x < buttons.length; x++) {
      buttons[x].style.backgroundColor = "";
      e.target.style.backgroundColor = "red";
    }
  }

  // function generateYears() {
  //   for (let i = minyear; i <= maxyear; i++) {
  //     years.push(i);

  //   }
  // }

  function setAlldays() {
    let d = [];
    for (let i = 1; i <= Number(endofmonth); i++) {
      d.push(i);
    }
    alldays = d;
    // setDays(d); 
  }

  function setMonthdays() {
    setEndofmonth(endofmonths[yearindex][monthindex]);

  }

  function weekStartDay() {
    console.log("yearindex", yearindex);
    console.log("monthindex", monthindex);

    let leapyear_included = 0;

    for (let i = 0; i < yearindex; i++) {
      if (leapyearsindex.includes(i)) {
        leapyear_included++;
      }
    }
    console.log("leap Year included", leapyear_included);
    //here 2 is: because 2000 baiskh was started with tuesday(3 rd of week remaining padding of 2)
    // let totaldays=3 + yearindex*365;
    let totaldays_with_padding = 4 + yearindex * 365 + leapyear_included;

    for (let j = 0; j <= monthindex; j++) {
      totaldays_with_padding = totaldays_with_padding + endofmonths[yearindex][j];
    }

    totaldays_with_padding = totaldays_with_padding - endofmonths[yearindex][monthindex]

    let padding = totaldays_with_padding % 7;

    setStartWeekPadding(padding);

    let x = [];
    for (let i = 0; i < padding; i++) {
      x.push("-");

    }

    setStartWeekPaddingarray(x);
    // start_week_padding_array= new Array(start_week_padding);

    console.log("padding array", start_week_padding_array);
    console.log("totaldays completed with padding", totaldays_with_padding);
    console.log("week padding", start_week_padding);

  }

  function findWeekStartDay() {
    let totalyeardays = 0;
    for (let i = 0; i < yearindex; i++) {
      for (let j = 0; j < 12; j++) {
        totalyeardays = totalyeardays + endofmonths[i][j];
      }
    }

    let totalmonthdays = 0;
    for (let j = 0; j < monthindex; j++) {

      totalmonthdays = totalmonthdays + endofmonths[yearindex][j];

    }

    let totaldayswithpadding = totalyeardays + totalmonthdays + 3;

    let padding = totaldayswithpadding % 7;
    let x = [];
    for (let i = 0; i < padding; i++) {
      x.push("-");

    }

    setStartWeekPaddingarray(x);

  }

  function ChangeMonth(value) {
    switch (value) {
      case "increase":
        let currentmonthindex2 = months.indexOf(currentmonth);
        if (currentmonthindex2 == 11) currentmonthindex2 = -1;
        setCurrentmonth(months[currentmonthindex2 + 1]);
        setMonthindex(currentmonthindex2 + 1);
        break;
      case "decrease":
        let currentmonthindex = months.indexOf(currentmonth);
        if (currentmonthindex == 0) currentmonthindex = 12;
        setCurrentmonth(months[currentmonthindex - 1]);
        setMonthindex(currentmonthindex - 1);
        break;
      default:
        break;
    }
  }


  function ChangeYear(value) {
    switch (value) {
      case "increase":
        let currentyearindex2 = allyears.indexOf(Number(currentyear));
        console.log(allyears);
        console.log("currentyear2", currentyear)
        console.log("cindex2", currentyearindex2)

        if (currentyearindex2 === 98) currentyearindex2 = -1;
        setCurrentyear(allyears[currentyearindex2 + 1]);
        setYearindex(currentyearindex2 + 1);

        break;
      case "decrease":
        let currentyearindex = allyears.indexOf(Number(currentyear));
        if (currentyearindex === 0) currentyearindex = 99;
        setCurrentyear(allyears[currentyearindex - 1]);
        setYearindex(currentyearindex - 1);
        break;
      default:
        break;
    }
  }

  // generateYears();
  setAlldays();
  let englishdate = convertToAd(yearindex, monthindex, day);

  useEffect(() => {

    setMonthdays();
    setDate(`${currentyear}-${monthindex + 1}-${day}`)
    // weekStartDay();
    findWeekStartDay();

  }, [yearindex, monthindex, day, start_week_padding])



  // findLeapNepaliYears();//finds all the years with 366 days


  return (
    <div className='date-picker-container'>
      <input placeholder='Select your Date' value={date} onChange={(e) => setDate(e.target.value)} onFocus={(e) => setShowcalender(!showcalender)} />

      {showcalender && <div className='date-picker'>
        <div className='month-year'>
          <span className='back-icon' onClick={(e) => { ChangeYear("decrease") }}><MdArrowBackIosNew /></span>
          {allyears && <select onChange={(e) => { setCurrentyear(e.target.value); setYearindex(e.target.selectedIndex) }} value={currentyear}>

            {allyears.map((allyear, index) => (
              <option value={allyear} id={index} key={index + 100}>
                {allyear}
              </option>
            ))}

          </select>}
          <span className='front-icon' onClick={(e) => { ChangeYear("increase") }}><MdArrowForwardIos /></span>



          <span className='back-icon' onClick={(e) => ChangeMonth("decrease")}><MdArrowBackIosNew /></span>
          {months &&
            <select onChange={(e) => { setCurrentmonth(e.target.value); setMonthindex(e.target.selectedIndex); }} value={currentmonth}>
              {months.map((month, index) => (
                <option value={month} key={index}>{month}</option>
              ))}

            </select>
          }
          <span className='front-icon' onClick={(e) => ChangeMonth("increase")}><MdArrowForwardIos /></span>
        </div>


        {weeks &&
          <div className='weeks'>
            {weeks.map((week, index) => (
              <span key={index}>
                {week}
              </span>

            ))

            }
          </div>}
        <div className='days'>

          {alldays &&
            <div className='day-buttons'>

              {start_week_padding_array?.map((i, index) => (
                <button key={index + 100}>{i}</button>
              ))}



              {alldays.map((day, index) => (
                <button key={index} onClick={(e) => { setDay(index + 1); changeColor(e); setShowcalender(false) }} className="daybuttons">{day}</button>
              ))}
            </div>
          }
        </div>

      </div>}

      {/* <div className='values'>
      <p>Year: {year}</p>
      <p>Month: {month}</p>
      <p>Day: {day}</p>
    </div> */}

      <div className='values'>
        <p>Year: {englishdate.year}</p>
        <p>Month: {englishdate.month + 1}</p>
        <p>Day: {englishdate.monthday}</p>
      </div>
    </div>
  )
}
