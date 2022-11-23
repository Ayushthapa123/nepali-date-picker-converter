import { endofmonths, englishmonths, englishleapmonths, englishleapyears, englishnonleapyears } from "./data";


import { useDate } from "../contexts/dateContext";





export default function ConvertToAd(yearindex, monthindex, day) {

    const { englishDate, setEnglishDate } = useDate();


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
    let totaldays = totalyeardays + totalmonthdays + day;



    //english reference date
    let year = 1943;
    let month = 3;
    let monthday = 13;
    let daycounts = Number(totaldays);

    for (let i = 1940; i <= 2056; i++) {

        if (englishnonleapyears.includes(i)) {

            if (daycounts > 365) {
                year = year + 1;
                daycounts = daycounts - 365;
            } else if (daycounts <= 365) {
                for (let j = 0; j < 14; j++) {//there may be 12 months remaining, for safety i have taken 14
                    if (daycounts > englishmonths[month]) {

                        month = month + 1;
                        daycounts = daycounts - englishmonths[month - 1];
                        if (month == 12) {
                            month = 0; year = year + 1;

                            if (englishleapyears.includes(year)) {
                                console.log("hii from alternate loop 1")

                                monthday = monthday + daycounts;

                                //loop here
                                for (let k = 0; k < 10; k++) {

                                    if (monthday > englishleapmonths[month]) {
                                        month = month + 1;//if month==12 assign 0

                                        monthday = monthday - englishleapmonths[month - 1];

                                        if (month == 12) { month = 0; year = year + 1; break }


                                    } else {

                                        break;
                                    }
                                }
                                break;
                            }
                        }
                    } else {
                        monthday = monthday + daycounts;

                        if (monthday > englishmonths[month]) {
                            month = month + 1;//if month==12 assign 0

                            // daycounts = daycounts - englishmonths[month - 1];
                            monthday = monthday - englishmonths[month - 1];
                            // console.log("daycounts", daycounts);

                            if (month == 12) {
                                month = 0; year = year + 1; break
                            }
                            break;

                        } else {

                            break;
                        }
                    }
                }
                break;
            }

        }

        if (englishleapyears.includes(i)) {


            if (daycounts > 366) {
                year = year + 1;
                daycounts = daycounts - 366;
            } else if (daycounts <= 366) {
                for (let j = 0; j < 14; j++) {
                    if (daycounts > englishleapmonths[month]) {

                        month = month + 1;
                        daycounts = daycounts - englishleapmonths[month - 1];
                        if (month == 12) {
                            month = 0; year = year + 1;
                            //needs alternate loop
                            if (englishnonleapyears.includes(year)) {
                                console.log("hii from alternate loop 2")

                                monthday = monthday + daycounts;

                                //loop here
                                for (let k = 0; k < 10; k++) {

                                    if (monthday > englishmonths[month]) {
                                        month = month + 1;//if month==12 assign 0

                                        monthday = monthday - englishmonths[month - 1];

                                        if (month == 12) { month = 0; year = year + 1; break }


                                    } else {

                                        break;
                                    }
                                }
                                break;
                            }

                        }
                    } else {
                        monthday = monthday + daycounts;
                        if (monthday > englishleapmonths[month]) {
                            month = month + 1;//if month==12 assign 0
                            // daycounts = daycounts - englishleapmonths[month - 1]
                            monthday = monthday - englishleapmonths[month - 1];
                            if (month == 12) { month = 0; year = year + 1; break }
                            break;

                        } else {
                            break;
                        }
                    }

                }
                break;
            }
        }

    }

    // console.log("year", year);
    // console.log("month", month);
    // console.log("monthday", monthday)

    setEnglishDate(`${year}-${month + 1}-${monthday}`)

    return ({ year, month: month + 1, monthday });

}