import React, { useState } from 'react';
import { Icon } from 'antd';

export default ({ tags, curId, setTags, setFormInfo, handleCurIndex }) => {
  // [
  //   {
  //     id: 1,
  //     label: '分析研判岗-通用模板1'
  //   },
  //   {
  //     id: 2,
  //     label: '分析研判岗-通用模板1'
  //   }
  // ];
  return (
    <div className="tag-views">
      <ul >
        {
          tags.map((item,index) => (
            <li className={ curId === item.cucId ? 'tag-views-item active-tag-views' : 'tag-views-item' } style={{ cursor: 'pointer' }}
              key={index} onClick={
                () => {
                  handleCurIndex(item.cucId);
                }
              }>{item.cucName}
              <Icon type="close" style={{ float: 'right', marginTop: '8px', marginRight: '10px', cursor: 'pointer' }} onClick={
                e => {
                  e.preventDefault();
                  // filter：当前这一项在数组中存在，需要删除这一项，用不等于，留下其他项;删除当前项；使用等于，留下当前这一项，删除其他项
                  setTags(tags.filter(tag => tag.cucId !== item.cucId));
                  setFormInfo([]);
                }
              } />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
