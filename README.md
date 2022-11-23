# What This package Does?
1. Provides Nepali Date Picker
2. Provides Nepali Date in string format.
3. Converts Nepali Date to equivalent english date.
4. Provides English Date in string format

## How to use?
You can use them simply by importing functions and components.

import {NepaliDate,EnglishDate,NepaliDatePicker} from ...

## Your Component



import React from 'react'
import { NepaliDate,EnglishDate,NepaliDatePicker } from ...

export default function Mycomponent() {
    let nepalidate = NepaliDate();
    let englishdate = EnglishDate();
    console.log(nepalidate,englishdate);

    return (
        <div>
        <NepaliDatePicker/>
        </div>
    )
}
