
import { useDate } from "./contexts/dateContext";
import { Datepicker } from "./Datepicker";

export function NepaliDate() {
    const { nepaliDate } = useDate();
    return nepaliDate;
}

export function EnglishDate() {
    const { englishDate } = useDate();
    return englishDate;
}





