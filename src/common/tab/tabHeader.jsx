import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab } from './tabActions';

class TabHeader extends Component {

    render() {
        const selected = this.props.tab.selected === this.props.target;
        return (
            'TabHeader',
            <li className={selected ? 'active' : ''}>
                <a href='javascript:;' //Para que o click fique controlado pelo React e não pelo Bootstrap
                    data-togge='tab'
                    onClick={() => this.props.selectTab(this.props.target)}
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li >
        );
    }
}

const mapStateToProps = state => ({ tab: state.tab }); //O tab está vindo de reducers.js é o resultado da função lá no reducer
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);