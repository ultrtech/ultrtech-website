import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class Header extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <h1 className="centered">
                    Page in construction, come back later!
                </h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
  );