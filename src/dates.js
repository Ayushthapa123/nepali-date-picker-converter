import React from 'react'
import { useDate } from "./components/contexts/dateContext";
import { Datepicker } from "./components/Datepicker";

export function NepaliDate() {
    const { nepaliDate } = useDate();
    return nepaliDate;
}

export function EnglishDate() {
    const { englishDate } = useDate();
    return englishDate;
}




export function NepaliDatePicker() {
    return (
        <div>
            <Datepicker />
        </div>
    )
}


