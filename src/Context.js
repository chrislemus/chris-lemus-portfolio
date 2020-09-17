import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        project: null,
        activePage: 1,
        resultsPerPage: 3
    };

    render() {
        const { 
            project,
            activePage,
            resultsPerPage
        } = this.state;
        const value = {
            project,
            activePage,
            resultsPerPage,
            actions: {
                refreshPage: this.refreshPage
            }
        };
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        );
    }

    //reloads page. helps update component info
    refreshPage = () => {
        window.location.reload(false);
    }

}

export const Consumer = Context.Consumer;

/**
* A higher-order component that wraps the provided component in a Context Consumer component.
* @param {class} Component - A React component.
* @returns {function} A higher-order component.
*/

export default function withContext(Component) {
    return function ContextComponent(props) {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        );
    }
}