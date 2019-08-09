import React, {Component} from 'react';
import AuthLink from './authLink/authLink';
import RegLink from './regLink/regLink';
import LogoutLink from './logoutLink/logoutLink';
import {connect} from 'react-redux';
import {getLogin, getIsAuthorized} from "../../../BLL/store/selectors/authSelectors";


class Toolbar extends Component {
    render() {
        return (
            <nav>
                {!this.props.isAuthorized &&
                    <div>
                        <AuthLink />
                        <RegLink />
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
        login: getLogin(state),
        isAuthorized: getIsAuthorized(state)
    }
};


export default connect(mapStateToProps)(Toolbar);