import React from "react";

function CTA(props) {
    return (
        <div>

            <div className="border">
                {props.children}
            </div>

        </div>
    )
}

export default CTA