import React from "react";

export const Title = (props) => {
    const {text} = props
    return (
        <h4 className="title-content">
            {text}
        </h4>
    )
}