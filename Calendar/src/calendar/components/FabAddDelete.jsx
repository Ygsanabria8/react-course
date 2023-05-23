import { useCalendarStore } from "../../hooks";

export const FabAddDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore();


    const handleClickDelete = async() => {
        await startDeletingEvent();
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleClickDelete }
            style={{
                display: hasEventSelected ? '' : 'none'
            }}
        >
            <i className="fa fa-trash-alt"></i>
        </button>
    )
}
