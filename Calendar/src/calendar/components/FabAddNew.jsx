import { addHours } from 'date-fns'


import { useUiStore, useCalendarStore } from "../../hooks";

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();


    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 5),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Yesid'
            }
        });
        openDateModal();
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fa fa-plus"></i>
        </button>
    )
}
