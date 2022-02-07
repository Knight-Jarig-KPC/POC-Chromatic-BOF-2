import React from "react";
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

type TabProps = {
    menu: string[],
    JSXList: JSX.Element[],
}

const Tabs = ({ menu, JSXList }: TabProps): JSX.Element => {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                {menu.map(element => <Tab>{element}</Tab>)}
            </TabsList>
            {JSXList.map((JSXComponent, index) => (
                <TabPanel key={index} value={index}>
                    {JSXComponent}
                </TabPanel>
            ))}
        </TabsUnstyled>
    )
}

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #0072E5;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 20%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #3399FF;
    color: white;
  }

  &:focus {
    color: #F0F7FF;
    border-radius: 3px;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #0072E5;
    color: #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: auto;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: left;
  justify-content: left;
  align-content: space-between;
  border: 1px solid #ddd;
`;

export default Tabs;