import { useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';

const localizer = momentLocalizer(moment)


export default function DashboardCalendar() {
    const now = new Date();
    const events = [
        {
            id: 11,
            title: 'Alexa Birthday',
            start: new Date(2023, 9, 11, 0, 0, 0),
            end: new Date(2023, 9, 11, 0, 0, 0),
        },
        {
            id: 15,
            title: 'Gabobee Birthday',
            start: now,
            end: now,
        },
        {
            id: 16,
            title: 'Sarah Lee Birthday',
            start: now,
            end: now,
        },
        {
            id: 17,
            title: 'Vero moda Birthday',
            start: now,
            end: now,
        },
    ];

    const { views } = useMemo(
        () => ({
            views: {
                month: true
            },
        }),
        []
    )
    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={views}
            popup
        />
    );
}