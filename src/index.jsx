import React from 'react';
import ReactDOM from 'react-dom';
import Inner from './mainpagecomponents/Inner.jsx'
import Header from './mainpagecomponents/Header.jsx'

class MainWebPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Inner />
            </div>
        );
    }
}

ReactDOM.render(
    <MainWebPage />,
    document.getElementById('root')
);
