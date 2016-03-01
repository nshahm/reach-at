import  React, { Component } from 'react';
import { HeaderProps } from './HeaderProps';
import  headerStyle  from './Header.css';

export class Header extends React.Component<HeaderProps, {}> {
    
    render() {
        return (
            <div className={headerStyle.header}>
                <h1>ReachAT - {this.props.title} </h1>
            </div>
        );
    }
}