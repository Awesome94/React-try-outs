// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/header';

class App extends React.Component{
    render(){
        return (
            <div className="container-fluid">
            <Header/>
            {this.props.children}
            <p>Footer here...</p>
            </div>
        );
    }
}
App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;