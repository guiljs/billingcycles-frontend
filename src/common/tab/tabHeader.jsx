import React, { Component } from 'react';

class TabHeader extends Component {

    render() {
        return (
            'TabHeader',
            <li>
                <a href='javascript:;' //Para que o click fique controlado pelo React e não pelo Bootstrap
                    data-togge='tab'
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        );
    }
}

export default TabHeader;