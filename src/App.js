import React, { Component } from 'react';
import './App.css';

import { Layout, Card, Button, Row, Col } from 'antd';

const {app} = window.require('electron').remote;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card bodyStyle={{margin: "0px"}} id="card">

          <Row id="display" style={{height:"60px"}}>
              <input value="0000" id="display-text"/>
          </Row>
          <Row gutter={[8, 8]} justify="space-around" align="middle">
            <Col span={6} ><Button type="primary">1</Button></Col>
            <Col span={6} ><Button type="primary">2</Button></Col>
            <Col span={6} ><Button type="primary">3</Button></Col>
            <Col span={6} ><Button type="secondary">+</Button></Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={6} ><Button type="primary">4</Button></Col>
            <Col span={6} ><Button type="primary">5</Button></Col>
            <Col span={6} ><Button type="primary">6</Button></Col>
            <Col span={6} ><Button type="secondary">-</Button></Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={6} ><Button type="primary">7</Button></Col>
            <Col span={6} ><Button type="primary">8</Button></Col>
            <Col span={6} ><Button type="primary">9</Button></Col>
            <Col span={6} ><Button type="secondary">*</Button></Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={6} ><Button type="danger">C</Button></Col>
            <Col span={6} ><Button type="primary">0</Button></Col>
            <Col span={6} ><Button type="secondary">.</Button></Col>
            <Col span={6} ><Button type="secondary">÷</Button></Col>
          </Row>
          <Row gutter={[8, 0]}>
            <Col span={12} ></Col>
            <Col span={12} ><Button id="calculate-btn" type="danger">=</Button></Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default App;
