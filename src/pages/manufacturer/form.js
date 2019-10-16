import React, { useState } from 'react';
import { Input , Select , Radio } from 'antd';
import { Icon } from 'antd';
const { TextArea } = Input;

// eslint-disable-next-line complexity
const PropertyPanel = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const { Option } = Select;
  const selectData = [{ name: 'Jack',id: 0 },{ name: 'lucy',id: 1 },{ name: 'tom',id: 2 }];
  const typeData = [{ name: '柱状图',id: '0' },{ name: '饼状图',id: '1' },{ name: '折线图',id: '2' },{ name: '曲线图',id: '3' }];
  const numberData = [{ name: 'sandian',id: '0' },{ name: 'bingzhuang',id: '1' },{ name: 'zehxian',id: '2' },{ name: 'quxian',id: '3' }];
  const updateData = [{ name: '定时更新',id: '0' },{ name: '稍后更新',id: '1' },{ name: '晚点更新',id: '2' }];
  // 说明
  const [illustrate, setIllustrate] = useState({ value: '' });

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onBlur = () => {
    console.log('blur');
  };
  const onFocus = () => {
    console.log('focus');
  };
  const onSearch = (val) => {
    console.log('search:', val);
  };
  return (
    <div className="panel-box" >
      <div className="panel-box-item">
        <div className="btn" onClick={() => setVisible1(!visible1)}>
          <span>属性面板</span>
          <Icon style={{ marginLeft: '10px' }} type="double-left" />
        </div>
        <div className="content" style={{ paddingTop: visible1 ? 0 : '10px', maxHeight: visible1 ? 0 : '1000px' }}>
          {/* <Search placeholder="请输入模板名称" onSearch={value => console.log(value)} /> */}
          <div className="content-select">
            <span className="content-select-title">分组标题</span>
            <Select
              showSearch
              placeholder="请选择标题"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
            >
              { selectData.map((item) => <Option value={item.id} key={item.id} >{item.name}</Option>)}
            </Select>
          </div>
          <div className="content-select">
            <span className="content-select-title">图表类型</span>
            <Select defaultValue="2">
              { typeData.map((item) => <Option value={item.id} key={item.id} >{item.name}</Option>)}
            </Select>
          </div>
          <div className="content-select">
            <span className="content-select-title">数据绑定</span>
            <Select defaultValue="2">
              { numberData.map((item) => <Option value={item.id} key={item.id} >{item.name}</Option>)}
            </Select>
          </div>
          <div className="content-select">
            <span className="content-select-title">数据更新</span>
            <Select defaultValue="0">
              { updateData.map((item) => <Option value={item.id} key={item.id} >{item.name}</Option>)}
            </Select>
          </div>
          <div className="content-select">
            <span className="content-select-title explain">说明</span>
            <TextArea
              className="text-area"
              value={illustrate.value}
              onChange={e => {
                setIllustrate({
                  value: e.target.value
                });
              }}
              placeholder="请输入说明内容"
              autosize={{ minRows: 4, maxRows: 4 }}
            />
          </div>
        </div>
      </div>
      <img style={{ margin: '10px -5px',width: '220px' }} src={require('../../assets/images/l-panel.png')} alt="" />
      <div className="panel-box-item">
        <div className="btn" onClick={() => setVisible2(!visible2)}>
          <span>应用套件</span>
          <Icon style={{ marginLeft: '10px' }} type="double-left" />
        </div>
        <div className="content" style={{ paddingTop: visible2 ? 0 : '10px', maxHeight: visible2 ? 0 : '1000px' }}>
          <div className="content-radio">
            <span className="content-radio-title">放大</span>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>禁用</Radio>
            </Radio.Group>
          </div>
          <div className="content-radio">
            <span className="content-radio-title">过滤</span>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>禁用</Radio>
            </Radio.Group>
          </div>
          <div className="content-radio">
            <span className="content-radio-title">导出</span>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>禁用</Radio>
            </Radio.Group>
          </div>
          <div className="content-radio">
            <span className="content-radio-title">明细</span>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>禁用</Radio>
            </Radio.Group>
          </div>
          <div className="content-select">
            <span className="content-select-title">数据绑定</span>
            <Select defaultValue="2">
              { numberData.map((item) => <Option value={item.id} key={item.id} >{item.name}</Option>)}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPanel;
