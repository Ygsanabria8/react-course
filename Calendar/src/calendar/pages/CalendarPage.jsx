import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar, CalendarBox, CalendarModal, FabAddNew, FabAddDelete } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks';

export const CalendarPage = () => {

  const [lastView] = useState(localStorage.getItem('lastView') || 'week');
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();

  const eventStyleGetter = () => ({
    backgroundColor: '#347CF5',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white'
  });


  const onDoubleClick = () => {
    openDateModal();
  }

  const onSelect = (event) => {
    setActiveEvent(event);
  }

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
  }

  return (
    <>
      <Navbar />

      <div>
        <Calendar
          culture='es'
          localizer={localizer}
          defaultView={ lastView }
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)'}}
          messages={ getMessagesES() }
          eventPropGetter={ eventStyleGetter }
          components={{
            event: CalendarBox
          }}
          onDoubleClickEvent={ onDoubleClick }
          onSelectEvent={ onSelect }
          onView={ onViewChange }
        />

        <CalendarModal />
        <FabAddNew />
        <FabAddDelete />
      </div>
    </>
  );
}
