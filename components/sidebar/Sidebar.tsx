import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

type Props = {}

export function Sidebar({ }: Props) {
  return (
    <ProSidebar style={{
      "minHeight": "100vh",
    }}>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FontAwesomeIcon icon='gem' />}>My Task</MenuItem>
          <SubMenu title="Components" icon={<FontAwesomeIcon icon='heart' />}>
            <MenuItem>Create Request</MenuItem>
            <MenuItem>Pending Task</MenuItem>
          </SubMenu>
        </Menu>

      </SidebarContent>
    </ProSidebar>
  );
}