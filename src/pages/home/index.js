import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { getBarChart, getLineChart, getPieChart } from '@/utils/echarts';

export default () => {
  return (
    <div className="echartsd" style={{ height: '500px' }}>
      <ReactEcharts
        option={getBarChart()}
        notMerge
        lazyUpdate
        style={{ width: '100%',height: '100%' }}
      />
    </div>
  );
};
