import React from 'react';

import * as Style from './styles';
import {Text} from '../styles';
import reactJSIcon from '../../assets/images/reactjs.svg';
import javaScriptIcon from '../../assets/images/javascript.svg';
import htmlIcon from '../../assets/images/html.svg';

const SideBar = () => (
  <>
    <Style.SidebarContainer>
      <Style.Titlecontent>
        <Text center fontSize='1.1rem' white padding='30px 0 20px 0' borderSidebar>
          MyBlog.com
        </Text>
      </Style.Titlecontent>
      <Style.ListTopicContainer>
        <Style.ListTopicContent>
          <img src={reactJSIcon} width="24" height="24" alt="" />
          <Text fontSize='1.1rem' white padding='0 10px'>ReactJs</Text>
        </Style.ListTopicContent>
        <Style.ListTopicContent>
          <img src={javaScriptIcon} width="24" height="24" alt="" />
          <Text fontSize='1.1rem' white padding='0 10px'>JavasCript</Text>
        </Style.ListTopicContent>
        <Style.ListTopicContent>
          <img src={htmlIcon} width="24" height="24" alt="" />
          <Text fontSize='1.1rem' white padding='0 10px'>HTML5/CSS3</Text>
        </Style.ListTopicContent>
      </Style.ListTopicContainer>
    </Style.SidebarContainer>
  </>
)

export default SideBar;