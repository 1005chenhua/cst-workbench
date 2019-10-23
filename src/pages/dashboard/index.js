import React, { useState, useRef } from 'react';
import Grid from './Grid';
import Panel from './Panel';
import TagViews from './TagViews';

import { Modal, Form, Select, Input, Button, message } from 'antd';
import { addTemp, getPersonalTemp, deleteTemp } from '@/api/index';
const { Option } = Select;
const { confirm } = Modal;

export default () => {
  const [tempData, setTempData] = useState({});
  const [visible, showModal] = useState(false);
  const [groupName, handleInputVal] = useState('');
  const [changeVal, handleChangeVal] = useState('请选择组名');
  const [tags, setTags] = useState([]);
  const [curIndex, handleCurIndex] = useState([]);// 当前模板id
  const [layouts, setLayouts] = useState([]);// layouts
  const [formInfo, setFormInfo] = useState([]);// formInfo
  const [selectId, setSelectId] = useState('');// formInfo选中Id
  const childRef = useRef();
  const handleChange = (value) => {
    handleChangeVal(value);
  };
  // eslint-disable-next-line no-trailing-spaces
  const addInfo = () => { 
    if (changeVal === '请选择组名' || groupName === ''){
      return message.warning('请选择组名或输入配置名');
    }
    addTemp({ cucName: groupName, cucStatus: changeVal }).then(res => {
      message.success(res.msg);
      showModal(false);
      handleInputVal('');
      handleChangeVal('请选择组名');
    }).then(() => {
      getPersonalTemp({}).then(res => {
        childRef.current.changeVal(res.data.rows);
      }).catch(error => {
        console.log(error);
      });
    }).catch(err => {
      console.log(err);
    });
  };
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
            <li className="btn-item" onClick={
              () => {
                if (!curIndex){
                  message.warning('请选择模板！');
                } else {
                  confirm({
                    title: '确定是否删除此模块?',
                    okText: '确认',
                    cancelText: '取消',
                    centered: true,
                    onOk() {
                      deleteTemp({ cucId: curIndex }).then(res => {
                        message.success(res.msg);
                      }).then(() => {
                        getPersonalTemp({}).then(res => {
                          childRef.current.changeVal(res.data.rows);
                          setTags(tags.filter(item => {
                            return item.cucId !== curIndex;
                          }));
                        }).catch(error => {
                          console.log(error);
                        });
                      }).catch(res => {
                        console.log(res);
                      });
                    },
                    onCancel() {},
                  });
                }
              }}
            >删除</li>
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
          <Panel
            ref={childRef}
            cRef={ childRef }
            tags={tags}
            setTags={setTags}
            curIndex={curIndex}
            handleCurIndex={handleCurIndex}
            setLayouts={setLayouts}
            setTempData={ setTempData }
            setFormInfo={setFormInfo}
          />
        </div>
        <div className="dashboard-container-body-content">
          {/* setTags={setTags} 将参数传给子组件 */}
          <TagViews tags={tags} setTags={setTags} curId={curIndex} handleCurIndex={handleCurIndex} setFormInfo={setFormInfo} />
          <Grid setSelectId={setSelectId} selectId={selectId} curIndex={curIndex} handleCurIndex={handleCurIndex} tempData={tempData} tags={tags} formInfo={formInfo} setFormInfo={setFormInfo} isDroppable />
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
            <Select placeholder="请选择组名" value={ changeVal } style={{ width: 120, color: '#ccc', }} onChange={handleChange}>
              <Option value="1">个人模板</Option>
            </Select>
          </Form.Item>
          <Form.Item label="配置名：">
            <Input
              style={{ width: 200, color: '#ccc', }}
              placeholder="请填写配置名"
              onChange = {e => {
                handleInputVal(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button className="global-btn global-btn-cancel " onClick={() => { showModal(false); }}>取消</Button>
            <Button className="global-btn" onClick={ () => { addInfo(); }}>确定</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
