import React, {Component} from 'react';
import AuthLink from './authLink/authLink';
import LogoutLink from './logoutLink/logoutLink';
import {connect} from 'react-redux';


class Toolbar extends Component {
    render() {
        return (
            <nav>
                {!this.props.isAuthorized &&
                    <div>
                        <AuthLink />
                    </div>
                }
                {this.props.isAuthorized &&
                    <div>
                        <span>{this.props.login}</span>
                        <LogoutLink />
                    </div>
                }
            </nav>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized
    }
};


export default connect(mapStateToProps)(Toolbar);