import React, { useState } from 'react';
import Grid from './Grid';
import Panel from './Panel';
import TagViews from './TagViews';
import { Modal, Form, Select, Input, Button } from 'antd';
const { Option } = Select;


function handleChange(value) {
  console.log(`selected ${value}`);
}
export default () => {
  const [tempData, setTempData] = useState({});
  const [visible, showModal] = useState(false);
  return (
    <div className="dashboard-container" >
      <div className="dashboard-container-header">
        <div className="dashboard-container-header-title">
          <span className="label">个性化工作台</span>
          <img src={require('../../assets/images/bg-dashboard-headerl.png')} alt="" />
        </div>
        <div className="dashboard-container-header-btn">
          <img src={require('../../assets/images/bg-dashboard-header.png')} alt="" />
          <ul>
            <li className="btn-item" onClick={() => { showModal(true); }}>新建</li>
            <li className="btn-item">保存</li>
            <li className="btn-item">另存为</li>
            <li className="btn-item">删除</li>
            <li className="btn-item">重置</li>
            <li className="btn-item">预览</li>
            <li className="btn-item">发布</li>
            <li className="btn-item">共享</li>
            <li className="btn-item">关闭</li>
          </ul>
        </div>
      </div>
      <div className="dashboard-container-body">
        <div className="dashboard-container-body-panel">
          {/* <div className="droppable-element" draggable unselectable="on" /> */}
          <Panel setTempData={setTempData} />
        </div>
        <div className="dashboard-container-body-content">
          <TagViews />
          <Grid tempData={tempData} />
        </div>
      </div>
      <Modal
        centered
        // title="Basic Modal"
        closable = {false}
        visible={visible}
        footer = {null}
        onOk={() => { showModal(false); }}
        onCancel={() => { showModal(false); }}
      >
        <Form>
          <Form.Item label="添加组：">
            <Select placeholder="请选择组名" style={{ width: 120 }} onChange={handleChange}>
              <Option value="1">个人模板</Option>
            </Select>
          </Form.Item>
          <Form.Item label="添加组：">
            <Input
              style={{ width: 200 }}
              placeholder="请填写配置名"
            />
          </Form.Item>
          <Form.Item>
            <Button className="global-btn global-btn-cancel " onClick={() => { showModal(false); }}>取消</Button>
            <Button className="global-btn">确定</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
