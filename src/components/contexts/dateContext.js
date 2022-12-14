import React, { useContext, useState, useEffect } from "react"


const DateContext = React.createContext();


export function useDate() {
    return useContext(DateContext)
}

export function DateProvider({ children }) {


    const [nepaliDate, setNepaliDate] = useState("2000-1-1");
    const [englishDate, setEnglishDate] = useState("1943-4-14");

    const value = {

        nepaliDate,
        setNepaliDate,
        englishDate,
        setEnglishDate
    }

    return (
        <DateContext.Provider value={value}>
            {children}
        </DateContext.Provider>
    )
}