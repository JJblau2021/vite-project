import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  // DatasetComponentOption,
  TransformComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'bar',
    },
  ],
};
const DEFAULT_WIDTH = '100%',
  DEFAULT_HEIGHT = 300;
const CommonChart = ({ width, height, resizetrigger }) => {
  const chartRef = useRef();
  const divRef = useRef();
  useEffect(() => {
    initChart();
    window.addEventListener('resize', resizeChart);
    return () => {
      window.removeEventListener('resize', resizeChart);
      disposeChart();
    };
  }, []);
  useEffect(() => {
    resizeChart();
  }, [resizetrigger]);
  const initChart = () => {
    chartRef.current = echarts.init(divRef.current);
    chartRef.current.setOption(option);
  };
  const resizeChart = () => chartRef.current && chartRef.current.resize();
  const disposeChart = () => chartRef.current && chartRef.current.dispose();

  return (
    <div
      ref={divRef}
      style={{
        width: width || DEFAULT_WIDTH,
        height: height || DEFAULT_HEIGHT,
      }}
    >
      CommonCharts
    </div>
  );
};

export default CommonChart;