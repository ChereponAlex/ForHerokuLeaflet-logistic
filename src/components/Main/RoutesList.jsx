/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable */

import React, { useState } from 'react';
import { Layout, Table, Select, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getRouteSaga } from '../../store/actions/routeAction';
import dataSelect from '../../data/dataSelect';
import './main.css';
import './split.css';
import data from '../../data/data';

export const RoutesList = () => {
  const [locations, changeLocations] = useState(data.map(item => ({ ...item, key: item.id })))
  const dispatch = useDispatch();

  const { selectedRoute } = useSelector(
    (state) => state.route
  );

  const columns = [
    {
      title: 'Номер заявки',
      key: 'id',
      render: item => {
        return (
          <>
            <Button
              onClick={() => { dispatch(getRouteSaga(item)) }}
              size='small'
              style={{ width: '100%' }}
            >
              <div style={{ width: '100%' }}>Маршрут {item.id}</div>
            </Button>
          </>
        )
      },
      width: 130,
    },
    {
      title: 'Откуда',
      dataIndex: 'title',
      key: 'title',
      width: 270,
      minWidth: 120,
      render: (title, item) => {
        return (
          <Select
            style={{ width: '100%' }}
            defaultValue={title}
            options={dataSelect.map(item => ({ value: item.id, label: item.title }))}
            onChange={(index) => {
              changeLocations((prev) => {
                const selectData = dataSelect.find(l => l.id === index)
                const spreaded = [...prev]
                const newLocations = spreaded.map(l => l.id === item.id ? ({ ...l, title: selectData.title, location: selectData.location }) : l)
                return newLocations
              })
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          />)
      },
    },
    {
      title: 'Куда',
      dataIndex: 'titleTo',
      key: 'titleTo',
      width: 270,
      minWidth: 120,
      render: (title, item) => {
        return (
          <Select
            style={{ width: '100%' }}
            defaultValue={title}
            options={dataSelect.map(item => ({ value: item.id, label: item.title }))}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onChange={(index) => {
              changeLocations((prev) => {
                const selectData = dataSelect.find(l => l.id === index)
                const spreaded = [...prev]
                const newLocations = spreaded.map(l => l.id === item.id ? ({ ...l, titleTo: selectData.title, locationTo: selectData.location }) : l)
                return newLocations
              })
            }}
          />)
      }

    },
  ];
  return (
    <div className="left-div" style={{ width: '100%', height: '100vh', background: '#001529' }} >
      <Layout.Sider
        breakpoint="lg"
        collapsedWidth="0"
        width='100%'
      >
        <div className="logo">
          <span className="logo__span">все заявки</span>
        </div>
        <Table
          style={{ marginLeft: '10px' }}
          dataSource={locations}
          columns={columns}
          bordered={true}
          pagination={false}
          scroll={{ y: '80vh' }}
          background='unset'
          rowClassName={(record, index) => selectedRoute !== null && selectedRoute.id === index + 1 ? 'table-row-dark' : 'table-row-light'}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                event.preventDefault();
                event.stopPropagation();
                dispatch(getRouteSaga(record))
              }, // click row
            };
          }}
        />
      </Layout.Sider>
    </div>
  )
}
