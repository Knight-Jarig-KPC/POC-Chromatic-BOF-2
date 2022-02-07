import React, { useEffect } from 'react'
import Routes from 'Routes'
import { Routes as ReactRoutes, Route, Navigate, useLocation } from 'react-router-dom'

import MainTemplate from 'templates/MainTemplate'
import OrderListView from 'pages/order/OrderListView'
import OrderDetailView from 'pages/order/OrderDetailView'
import {
  ProductListView,
  ImportProductDetailPage,
  ExportProductDetailPage,
  EditProductDetailPage,
} from 'pages/product'
import LoginView from 'pages/authentication/LoginView'
import axiosInstance from "axiosClient";
import { StaticPageListPage } from 'pages/cms/StaticPage'

import { useAuth } from 'context/authentication'
import { client } from "graphqlClient";

import 'App.css'


function RequireAuth({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

function RequireNoAuth({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default function App() {
  const { accessToken } = useAuth()

  if (accessToken) {
    client.setHeader('Authorization', `Bearer ${accessToken}`)
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

  return (
    <div className="App">
      <ReactRoutes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Navigate replace to="/order/list" />} />
          <Route path="order">
            <Route path="list" element={
              // <RequireAuth>
              <OrderListView />
              // </RequireAuth>
            } />
            <Route path=":orderId" element={
              <RequireAuth>
                <OrderDetailView />
              </RequireAuth>
            } />
          </Route>
          <Route path="product">
            <Route
              path="list"
              element={
                <RequireAuth>
                  <ProductListView />
                </RequireAuth>
              } />
            <Route path="import-product-detail" element={
              <RequireAuth>
                <ImportProductDetailPage />
              </RequireAuth>
            } />
            <Route path="export-product-detail" element={
              <RequireAuth>
                <ExportProductDetailPage />
              </RequireAuth>}
            />
            <Route path="edit-product-detail/:sku" element={
              <RequireAuth>
                <EditProductDetailPage />
              </RequireAuth>}
            />
          </Route>
          <Route path="static-page">
            <Route path="list" element={<StaticPageListPage />} />
          </Route>
        </Route>
        <Route
          path="login"
          element={
            <RequireNoAuth>
              <LoginView />
            </RequireNoAuth>
          }
        />
      </ReactRoutes>
    </div>
  )
}