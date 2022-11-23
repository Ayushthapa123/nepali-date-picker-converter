import React from 'react'

import { NepaliDate } from '../dates';
import { EnglishDate } from '../dates';

export default function Test() {

    let nepalidate = NepaliDate();
    let englishdate = EnglishDate();

    console.log("nepeng", nepalidate, englishdate);
    return (
        <div>test</div>
    )
}
