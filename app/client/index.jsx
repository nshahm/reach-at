import { Header } from './chat/layout/header/Header';
import  React, { Component } from 'react';
import  ReactDOM  from 'react-dom';


export class ReachatApp extends React.Component {
    
    render() {
        return (<div>
                   <Header title="Chat App using React, webpack, Relay, GraphQL etc"/>
                </div>);
    }
}
    
const app = document.getElementById("app");
ReactDOM.render(<ReachatApp/>, app);
