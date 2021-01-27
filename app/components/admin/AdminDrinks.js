import React, { useState } from 'react';
import { AdminHeader } from "./AdminHeader"
import { AdminSidebar } from "./AdminSidebar"
import Container from '@material-ui/core/Container'

export const AdminDrinks = () => {
  const [open, setOpen] = useState(true)
  // const classes = useStyles();
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
      <Container>
        {"Drinks"}
      </Container>
    </>
  )
}
