import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {getEditedData} from "../../../../BLL/store/selectors/editItemSelectors";


class DoneItemForm extends Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit}>
                <div className="textarea">
                    <Field component="textarea" name="comment" className="textarea__field" placeholder="Введите комментарий" />
                    <span className="textarea__bar"></span>
                </div>

                <input type="submit" className="button button--default" placeholder="Отправить"/>

            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        initialValues: getEditedData(state)
    }
};


export default connect(mapStateToProps)(reduxForm({form: 'doneItemForm'})(DoneItemForm));