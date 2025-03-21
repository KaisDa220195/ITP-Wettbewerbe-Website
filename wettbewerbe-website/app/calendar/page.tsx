/*"use client"
import { Calendar } from "@/components/ui/calendar";


export default function calendarPage(){
    return(
        <Calendar className="flex justify-center items-center"/>
    );
}*/

"use client";

import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarPage() {
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        async function fetchDate() {
            try {
                const response = await fetch("/api/getDate");
                const data = await response.json();
                const [day, month, year] = data.date.split(".");
                const [selectedDate, setSelectedDate] = useState<Date | null>(null);
            } catch (error) {
                console.error("Fehler beim Laden des Datums:", error);
            }
        }
        fetchDate();
    }, []);

    return <Calendar selected={selectedDate} className="flex justify-center items-center" />;
}



