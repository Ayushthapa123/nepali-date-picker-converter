# What This package Does?
1. Provides Nepali Date Picker
2. Provides Nepali Date in string format.
3. Converts Nepali Date to equivalent english date.
4. Provides English Date in string format

## How to use?
You can use them simply by importing functions and components.
```
import { NepaliDate, EnglishDate } from 'nepali-date-picker-converter-react';
import { Datepicker } from 'nepali-date-picker-converter-react/dist/Datepicker';

```
## Must Wrap dateProvider on the parent component eg: app.js
```
import { DateProvider } from 'nepali-date-picker-converter-react/contexts/dateContext';

function MyComp() {

  return (
    <div className="mycomp">
      <DateProvider>
        <Your Components Here/>
      </DateProvider>
    </div>
  );
}

export default MyComp;


```

## Your Component


```
import React from 'react'
import { NepaliDate, EnglishDate } from 'nepali-date-picker-converter-react';
import { Datepicker } from 'nepali-date-picker-converter-react/dist/Datepicker';


export default function Mycomponent() {
    let nepalidate = NepaliDate();
    let englishdate = EnglishDate();
    console.log(nepalidate,englishdate);

    return (
        <div>
        <Datepicker/>
        </div>
    )
}
```

## css hint 

```
.date-picker-container {
    position: relative;
    width:270px;
    height:auto;
}
```


## Screenshot

![DatePicker Image](https://firebasestorage.googleapis.com/v0/b/hosteltrend.appspot.com/o/photos%2Fdatepicker.png?alt=media&token=ef9ad6af-2286-4650-ab9c-782aa69cd27b)