import React from 'react';

import SideBar from '../SideBar';
import * as Style from './styles';

type Props = {
  children: Node,
}

const MainLayout = ({children}: props) => {
  return(
    <>
      <Style.MainContainer>
        <Style.LeftContainer>
          <SideBar />
        </Style.LeftContainer>
        <Style.ContentContainer>
          {children}
        </Style.ContentContainer>
      </Style.MainContainer>
    </>
  )
}

export default MainLayout;