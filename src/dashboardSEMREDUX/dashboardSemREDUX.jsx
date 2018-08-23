import React, { Component } from 'react';
import axios from 'axios';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valuebox';
import Row from '../common/layout/row';

const BASE_URL = 'http://localhost:3003/api';

export default class Dashboard2 extends Component {
    constructor(props) {
        super(props);
        this.state = { credit: 0, debt: 0 };
    }
    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(x => this.setState(x.data));
    }

    render() {
        const { credit, debt } = this.state;
        return (
            <div>
                <ContentHeader title='Dashboard' subtitulo='Versão 2.0 - SEM REDUX ' /> 
                <Row>
                    <Content>
                        <ValueBox cols='12 4' color='green' value={`R$ ${credit}`} text='Créditos' icon='plus' />
                        <ValueBox cols='12 4' color='red' value={`R$ ${debt}`} text='Débitos' icon='minus' />
                        <ValueBox cols='12 4' color='blue' value={`R$ ${credit - debt}`} text='Total' icon='money' />
                    </Content>
                </Row>
            </div>
        );
    }
}
