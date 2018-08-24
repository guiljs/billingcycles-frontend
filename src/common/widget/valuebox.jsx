import React from 'react';
import Grid from '../layout/grid';

export default props => ('ValueBox',
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className='inner'>
                <h3>{props.value}</h3>
                <p>{props.text}</p>
            </div>
            <div className='icon'>
                <i className={`fa fa-${props.icon}`} />
            </div>
        </div>
    </Grid>
);