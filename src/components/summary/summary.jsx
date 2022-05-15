import axios from "axios";
import React, { useEffect, useState } from "react";
import { Title } from "../../common/components/title/title";
import { Line, Column } from '@ant-design/plots';
import './summary.less'



export const Summary = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios('http://localhost:8088/api/summary').then(res => {
      console.log(13, res.data)
      setData(res.data)
    })
  }, [])

  const linePlotConfig = {
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
      // axis setting 'null' means not display
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
    // Y axis settings
    yAxis: {
      // max: 3000
      label: {
        autoRotate: false,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
        // value formating
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
      title: {
        text: 'AMOUNT',
        style: {
          fontSize: 16,
        },
      },
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
      // hide overlapping label
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
      }
    }
  };

  const groupColumnConfig = {
    data: data?.yearly || [],
    isGroup: true,
    xField: 'month',
    yField: 'amount',
    seriesField: 'type',
    //color: ['#1ca9e6', '#f88c24'],
    // marginRatio: 0.1,
    label: {
      position: 'middle',
      // 'top', 'middle', 'bottom'
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
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
      <Title text="Weekly Chart" />
      <div className="weekly-container">
        <Line className="weekly" {...linePlotConfig} />
      </div>
      <Title text='Yearly Chart' />
      <div className="yearly-container">
        <Column className="yearly" {...groupColumnConfig} />
      </div>
      <div className="placeholder"></div>
    </div>
  )
}