import React from 'react';
import { Tooltip } from 'react-bootstrap';
import {convertMonth} from '../../../utils/ConvertDate';

const DateToolpit = (date = 'Updated at') => {
    return(
        <Tooltip id="button-tooltip" >
            Updated at {convertMonth(date)}
        </Tooltip>
    )
}

export default DateToolpit;
