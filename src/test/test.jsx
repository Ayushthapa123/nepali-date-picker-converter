import React from 'react'

import { OurNepaliDatePicker, NepaliDate, EnglishDate } from '../components/dates';

export default function Test() {

    let nepalidate = NepaliDate();
    let englishdate = EnglishDate();

    console.log("nepeng", nepalidate, englishdate);
    return (
        <div>
            <OurNepaliDatePicker />
        </div>
    )
}
