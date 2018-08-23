import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

class Menu extends Component{
    render(){
        const { credit, debt } = this.props.summary; //Destructure (extrair)
        const total = `Saldo = R$ ${credit - debt}`;

        return(
            <ul className="sidebar-menu">
                <MenuItem path='#/' label='Dashboard' icon='dashboard' />
                <MenuItem path='#/dashboard2' label='Dashboard2 Sem Redux' icon='dashboard' />
                <MenuTree label='Cadastro' icon='edit'>
                    <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd' />
                </MenuTree>

                <MenuItem path='#/' label={total} icon='money' />
                
                
            </ul>

        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary });
export default connect(mapStateToProps) (Menu);