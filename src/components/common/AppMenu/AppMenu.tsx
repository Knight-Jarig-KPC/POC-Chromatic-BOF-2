import React, { useState, useMemo, forwardRef } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Paper'
import Container from '@mui/material/Container'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import InventoryIcon from '@mui/icons-material/Inventory'
import { SxProps, Theme } from '@mui/material/styles'

interface ListItemLinkProps {
  icon?: React.ReactElement
  primary: string
  to: string
  sx?: SxProps<Theme>
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to, sx } = props;

  const renderLink = useMemo(
    () =>
      forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
        itemProps,
        ref,
      ) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
      <ListItemButton component={renderLink} sx={sx}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItemButton>
  )
}


export default function AppMenu() {
    const [isOpen, setOpen] = useState(true)

    const handleClick = () => {
      setOpen(!isOpen);
    }

    return (
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        <ListItemLink to="/order/list" primary="Order" icon={<ShoppingCartIcon />} />
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Product" />
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemLink to="/product/list" primary="Product List" sx={{ pl: 9 }} />
          </List>
        </Collapse>
      </List>
    )
}