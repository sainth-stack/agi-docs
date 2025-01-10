import React from 'react';

const ReactContext = React.createContext({
    themeValue:'light',
    changeTheme : () => {},
})



export default ReactContext