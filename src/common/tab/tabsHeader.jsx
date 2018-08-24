import React from 'react';

export default props => ('tabsHeader',
    <ul className="nav nav-tabs">
        {props.children}
    </ul>
);