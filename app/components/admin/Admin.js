import React from 'react';
import { DrinkForm } from "./DrinkForm"
import Container from "@material-ui/core/Container"

// import "../../styles/admin.less"

export const Admin = () => {
  return (
    <>
      <Container>
        <DrinkForm title="Add Drink"/>
      </Container>
    </>
  );
}
