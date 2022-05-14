import axios from "axios";
import React, { useEffect, useState } from "react";
import { Title } from "../../common/components/title/title";
import { Line } from '@ant-design/plots';
import './summary.less'



export const Summary = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios('http://localhost:8088/api/summary').then(res => {
      console.log(13,res.data)
      setData(res.data)
    })
  }, [])

  const config = {
    data: data?.weekly || [],
    xField: 'day',
    yField: 'amount',
    seriesField: 'type',
    // X axis setting
    xAxis: {
      nice: true,
      // tickCount: 8,
      // text label
      label: {
        // autoRotate: false,
        rotate: Math.PI / 6,
        offset: 10,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
        formatter: (day) => day,
      },
      title: {
        text: 'DAY',
        style: {
          fontSize: 16,
        },
      },
      // 坐标轴线的配置项 null 表示不展示
      line: {
        style: {
          stroke: '#aaa',
        },
      },
      tickLine: {
        style: {
          lineWidth: 2,
          stroke: '#aaa',
        },
        length: 5,
      },
      grid: {
        line: {
          style: {
            stroke: '#ddd',
            lineDash: [4, 2],
          },
        },
        alternateColor: 'rgba(0,0,0,0.05)',
      },
    },
    // Y 轴相关配置
    yAxis: {
      // max: 3000,
      // 文本标签
      label: {
        autoRotate: false,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
      title: {
        text: 'AMOUNT',
        style: {
          fontSize: 16,
        },
      },
      // 坐标轴线的配置项 null 表示不展示
      line: {
        style: {
          stroke: '#aaa',
        },
      },
      tickLine: {
        style: {
          lineWidth: 2,
          stroke: '#aaa',
        },
        length: 5,
      },
      grid: {
        line: {
          style: {
            stroke: '#ddd',
            lineDash: [4, 2],
          },
        },
        alternateColor: 'rgba(0,0,0,0.05)',
      },
    },
    // label
    label: {
      layout: [
        {
          type: 'hide-overlap',
        },
      ],
      // 隐藏重叠label
      style: {
        textAlign: 'right',
      },
      formatter: (item) => item.value,
    },
    // point
    point: {
      size: 5,
      style: {
        lineWidth: 1,
        fillOpacity: 1,
      },
      shape: (item) => {
        if (item.category === 'Cement production') {
          return 'circle';
        }

        return 'diamond';
      },
    },
    annotations: [
      // chart title area
      {
        type: 'region',
        start: ['0%', '0%'],
        end: ['30%', '10%'],
        top: true,
        style: {
          fill: '#1890ff',
          fillOpacity: 1,
          opacity: 1,
        },
      }, // chart title
      {
        type: 'text',
        position: ['15%', '5%'],
        content: 'Weekly Income and Expenditure Statement',
        style: {
          fill: '#fff',
          fontSize: 15,
          textAlign: 'center',
          textBaseline: 'middle',
        },
      }
    ],
    legend: {
      position: 'top-right',
      itemName: {
        style: {
          fill: '#000',
        },
        formatter: (name) => name,
      },
    },
    // 度量相关配置
    meta: {
      // year 对应 xField || yField
      year: {
        range: [0, 1],
      },
    },
  };

  return (
    <div>
      <Title text='Summary' />
      <div className="cards-container">
        {data?.cards?.map((card, idx) => {
          return (
            <div className="card" key={idx}>
              <Title text={card.title} />
              <div className="amount">{card.amount}</div>
              <div className="money">{card.money}</div>
            </div>
          )
        })}
      </div>
      <Title text="Weekly chart"/>
      <div className="weekly-container">
        <Line className="weekly" {...config} />
      </div>
    </div>
  )
}