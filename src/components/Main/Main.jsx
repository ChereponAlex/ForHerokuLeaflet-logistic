/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable */

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
// import L from 'leaflet';
import './main.css';
import './split.css';
import SplitPane from "react-split-pane";
import { RoutesList } from './RoutesList';

export const Main = () => {
  const { coordinates, selectedRoute } = useSelector(
    (state) => state.route
  );

  return (
    <Layout className="layout">
      <SplitPane
        split='vertical'
        minSize={200}
        maxSize={800}
        style={{ width: '100%', height: '100vh' }}
        primary="first"
        defaultSize={250}
        // defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
        onChange={(size) => localStorage.setItem('splitPos', size)}
      >
        <RoutesList />
        <Layout>
          <Layout.Header
            className="site-layout-sub-header-background"
            style={{ padding: 0, height: '5vh' }}
          />
          <div className="right-div" style={{ width: '100%', height: '100%' }} >
            <Layout.Content >
              <div className="leaflet-container" >
                <MapContainer
                  center={[55.755825, 37.617298]}
                  zoom={11}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {selectedRoute && (
                    <>
                      <Marker

                        position={[
                          selectedRoute.location[0],
                          selectedRoute.location[1],
                        ]}
                      >
                        <Popup
                          position={[
                            selectedRoute.location[0],
                            selectedRoute.location[1],
                          ]}
                        >
                          <div>{selectedRoute.title}</div>
                        </Popup>
                      </Marker>
                      <Marker
                        position={[
                          selectedRoute.locationTo[0],
                          selectedRoute.locationTo[1],
                        ]}
                      >
                        <Popup
                          position={[
                            selectedRoute.location[0],
                            selectedRoute.location[1],
                          ]}
                        >
                          <div>{selectedRoute.titleTo}</div>
                        </Popup>
                      </Marker>
                    </>
                  )}
                  {coordinates.length > 0 && (
                    <Polyline positions={coordinates} color="red" />
                  )}
                </MapContainer>
              </div>
            </Layout.Content>
          </div>
        </Layout>
      </SplitPane >
    </Layout >

  );
}
