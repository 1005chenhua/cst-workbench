/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Input } from 'antd';
import { Icon } from 'antd';

const { Search } = Input;

// eslint-disable-next-line complexity
export default ({ setTempData }) => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  return (
    <div className="panel-box" >
      <div className="panel-box-item">
        <div className="btn" onClick={() => setVisible1(!visible1)}>
          <span>工作台模板</span>
          <Icon style={{ marginLeft: '10px' }} type="double-left" />
        </div>
        <div className="content" style={{ paddingTop: visible1 ? 0 : '10px', maxHeight: visible1 ? 0 : '1000px' }}>
          <Search placeholder="请输入模板名称" onSearch={value => console.log(value)} />

          <div className="group-btn" onClick={() => setVisible2(!visible2)}>
          公共模板
            <span className="group-btn-iconbox">
              <Icon type="caret-down" />
            </span>
          </div>
          <ul className="group-list" style={{ paddingBottom: visible2 ? 0 : '10px', maxHeight: visible2 ? 0 : '1000px' }}>
            <li>分析研判岗-通用模板一</li>
            <li>分析研判岗-通用模板二</li>
            <li>分析研判岗-通用模板三</li>
          </ul>

          <div className="group-btn" onClick={() => setVisible3(!visible3)}>个人模板<span className="group-btn-iconbox"><Icon type="caret-down" /></span></div>
          <ul className="group-list" style={{ paddingBottom: visible3 ? 0 : '10px', maxHeight: visible3 ? 0 : '1000px' }}>
            <li>分析研判岗-通用模板一</li>
          </ul>

        </div>
      </div>
      <img style={{ margin: '10px 0' }} src={require('../../assets/images/l-panel.png')} alt="" />
      <div className="panel-box-item">
        <div className="btn" onClick={() => setVisible4(!visible4)}>应用套件<Icon style={{ marginLeft: '10px' }} type="double-left" /></div>
        <div className="content" style={{ paddingTop: visible4 ? 0 : '10px', maxHeight: visible4 ? 0 : '1000px' }}>
          <div className="temp-btn" onClick={() => setVisible5(!visible5)}>
            <span>大数据平台</span>
            <span className="temp-btn-iconbox">
              <Icon type="caret-down" />
            </span>
          </div>
          <ul className="temp-list" style={{ maxHeight: visible5 ? 0 : '1000px' }}>
            <li draggable onDragStart={() => setTempData({ type: 'bar', title: 'AB门管理', minW: 2, minH: 4, w: 4, h: 8 }) } unselectable="on" >
              <img src={require('../../assets/images/tempIcons/1.png')} alt="" />
              <div className="title">AB门管理...</div>
            </li>
            <li draggable onDragStart={() => setTempData({ type: 'line', title: '在监警力统计分析', minW: 2, minH: 4, w: 4, h: 8 }) } unselectable="on" >
              <img draggable={false} src={require('../../assets/images/tempIcons/1.png')} alt="" />
              <div className="title">在监警力统计分析...</div>
            </li>
            <li draggable onDragStart={() => setTempData({ type: 'pie', title: '罪犯在押状态统计', minW: 2, minH: 2, w: 3, h: 8 }) } unselectable="on" >
              <img src={require('../../assets/images/tempIcons/1.png')} alt="" />
              <div className="title">罪犯在押状态统计</div>
            </li>
            <li draggable onDragStart={() => setTempData({ type: 'sct', title: '报警信息', minW: 2, minH: 2, w: 3, h: 8 }) } unselectable="on" >
              <img src={require('../../assets/images/tempIcons/1.png')} alt="" />
              <div className="title">报警信息</div>
            </li>
            <li draggable onDragStart={() => setTempData({ type: 'sta', title: '三类罪犯统计', minW: 2, minH: 2, w: 3, h: 8 }) } unselectable="on" >
              <img src={require('../../assets/images/tempIcons/1.png')} alt="" />
              <div className="title">三类罪犯统计</div>
            </li>
            <li draggable onDragStart={() => setTempData({ type: 'sta', title: '设备情况（完好率）', minW: 2, minH: 2, w: 3, h: 8 }) } unselectable="on" >
              <img src={require('../../assets/images/tempIcons/1.png')} alt="" />
              <div className="title">设备情况</div>
            </li>
            <li draggable onDragStart={() => setTempData({ type: 'sta', title: '安全指数分析', minW: 2, minH: 2, w: 3, h: 8 }) } unselectable="on" >
              <img src={require('../../assets/images/tempIcons/1.png')} alt="" />
              <div className="title">安全指数分析</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
