import React, { useState } from 'react';
// import { DrinkForm } from "./DrinkForm"
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AdminHeader } from "./AdminHeader"
import { AdminSidebar } from "./AdminSidebar"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: 'relative'
  },
  contentSidebarOpen: {
    left: 240,
    width: `calc(100% - ${272}px)` 
  },
  contentSidebarClosed: {
    left: 40,
    width: `calc(100% - ${72}px)`
  },
}))

export const AdminHome = () => {
  const [open, setOpen] = useState(true)
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AdminHeader open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <AdminSidebar open={open} />
      {/* <DrinkForm title="Add Drink"/> */}
      <main className={clsx(classes.content, {
          [classes.contentSidebarOpen]: open,
          [classes.contentSidebarClosed]: !open,
        })}>
        <div className={classes.toolbar} />
        <Container>
          {"stuff"}
        </Container>

      </main>
    </>
  );
}
