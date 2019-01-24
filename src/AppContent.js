import React from 'react';
import { Box } from 'grommet';

export default (props) => (
    <Box 
        direction='row' 
        flex 
        overflow={{ horizontal: 'hidden' }}
        {...props}
    />
)