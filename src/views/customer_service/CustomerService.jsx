/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Button, Grid, TextField } from '@mui/material';
import React from 'react';

function CustomerService({
  // eslint-disable-next-line no-unused-vars
  customerServiceRef,
}) {
  return (
    <div
      style={{ textAlign: 'center' }}
    >
      {/* might change to some other user story, too hard to implement */}
      <h1>Welcome to the Customer Service</h1>
      <div>
        Please state what assistant do you need and our agent will get back to you shortly.
      </div>
    </div>

  );
}

export default CustomerService;
