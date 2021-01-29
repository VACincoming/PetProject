import React, { FC } from 'react';
import Header from 'components/Header';
import Routers from 'pages/Routers';
import { useLocation } from 'react-router-dom'

const Master: FC = () => {
  const pathname = useLocation().pathname;
  const isNeedHeader = () => {
    if (pathname !== '/login'
        && pathname !== '/registration') {
      return <Header />
    } 
    return null; 
  }

  return (
    <>
      { isNeedHeader() }
      <Routers />
    </>
  )
}

export default Master;