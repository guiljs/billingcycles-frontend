import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valuebox';
import Row from '../common/layout/row';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' subtitulo='Versão 1.0' />
                <Row>
                    <Content>
                        <ValueBox cols='12 4' color='green' value='R$ 10,00' text='Créditos' icon='plus' />
                        <ValueBox cols='12 4' color='red' value='R$ 10,00' text='Débitos' icon='minus' />
                        <ValueBox cols='12 4' color='blue' value='R$ 0,00' text='Total' icon='money' />
                    </Content>
                </Row>
            </div>
        );
    }
}

export default Dashboard;