import React, {Component} from 'react';
import AuthLink from './authLink/authLink';


export default class Toolbar extends Component {
    render() {
        return (
            <nav>
                <AuthLink />
            </nav>
        )
    }
}