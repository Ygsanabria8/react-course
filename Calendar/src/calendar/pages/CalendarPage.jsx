import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns'

import { Navbar } from "../components/Navbar";
import { localizer, getMessagesES } from '../../helpers';


const evenst = [
  {
    title: 'Cumpleaños',
    notes: 'Comprar torta',
    start: new Date(),
    end: addHours(new Date(), 5),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Yesid'
    }
  },
]

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({event, start, end, isSelected})
    const style = {
      backgroundColor: '#347CF5',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'

    }
    return style;
  }

  return (
    <>
      <Navbar />

      <div>
        <Calendar
          culture='es'
          localizer={localizer}
          events={evenst}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)'}}
          messages={ getMessagesES() }
          eventPropGetter={ eventStyleGetter }
        />
      </div>
    </>
  );
}
