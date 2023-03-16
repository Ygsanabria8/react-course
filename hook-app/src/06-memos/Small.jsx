import React from "react";

export const Small = React.memo(({ value }) => {

    console.log('dibujado de nuevo :c')

    return (
        <small>{ value }</small>
    )
});
