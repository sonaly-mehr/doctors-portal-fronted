import React from 'react';

const Button = (props) => {
    return (
        <button className={`button gradient__effect rounded-lg px-${props.px} py-${props.py} uppercase`}>
            {props.text}
        </button>
    );
};

export default Button;