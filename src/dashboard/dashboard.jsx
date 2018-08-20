import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valuebox';
import Row from '../common/layout/row';

class Dashboard extends Component {
    render() {
        const { credit, debt } = this.props.summary; //Destructure (extrair)
        return (
            <div>
                <ContentHeader title='Dashboard' subtitulo='Versão 1.0' />
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

// const mapStateToProps = state => ({ summary: state.dashboard.summary });

export default connect(state => ({ summary: state.dashboard.summary }))(Dashboard); //Decorator (dentro do DashBoard retornado estará decorado um connect.)