import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddClick extends Component {
    state = {
        Timekeeper: ''
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.addclick(this.state.Timekeeper);
        this.setState({ Timekeeper: ''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value });

    render() {
        return (
            <form onClick={this.onClick} style={{display: 'flex'}}>
            <input
            name="Timekeeper"
            style={{flex: '10', padding: '5px'}}
            value={this.state.Timekeeper}
            onChange={this.onChange}
            />
            <input
            type="addclick"
            value="addclick"
            className="btn"
            style={{flex: '1'}}
            />
            </form>
        )
    }
}

AddClick.PropTypes = {
    addclick: PropTypes.func.isRequired
}

export default AddClick
