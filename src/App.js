import React, { Component } from 'react';
import { Box, Button, Collapsible, Heading, Layer, Grommet, ResponsiveContext } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import theme from './theme';
import AppBar from './AppBar';
import AppContent from './AppContent';

class App extends Component {

    state = { showSidebar: false }

    render() {
        return (
            <div className="App">
                <Grommet theme={theme} full>
                <ResponsiveContext.Consumer>
                    {size => (
                        <Box fill>
                            <AppBar>
                                <Heading level='3' margin='none'>My App</Heading>
                                <Button icon={<Notification />} onClick={() => { this.setState({ showSidebar: !this.state.showSidebar })}} />
                            </AppBar>
                            <AppContent>
                                <Box flex align='center' justify='center'>
                                    app body
                                </Box>
                                {(!this.state.showSidebar || size !== 'small') ? (
                                    <Collapsible direction="horizontal" open={this.state.showSidebar}>
                                        <Box flex width='medium' background='light-2' elevation='small' align='center' justify='center'>sidebar</Box>
                                    </Collapsible>
                                ): (
                                <Layer>
                                    <Box background='light-2' tag='header' justify='end' align='center' direction='row'>
                                        <Button icon={<FormClose />} onClick={() => this.setState({ showSidebar: false })} />
                                    </Box>
                                    <Box fill background='light-2' align='center' justify='center'>sidebar</Box>
                                </Layer>
                                )}
                            </AppContent>
                        </Box>
                    )}
                </ResponsiveContext.Consumer>
                </Grommet>
            </div>
        );
    }
}

export default App;
