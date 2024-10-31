import React from 'react';
import { IconButton, Tooltip, Stack } from '@mui/material';
import { IconBell } from '@tabler/icons';

const IconSizeButtons = () => (
  <Stack spacing={1} direction="row" justifyContent="center">
    <Tooltip title="Bell">
      <IconButton variant="contained" aria-label="small-bell">
        <IconBell width={16} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton variant="contained" size="medium" aria-label="medium-bell">
        <IconBell width={19} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton variant="contained" aria-label="large-bell">
        <IconBell width={21} />
      </IconButton>
    </Tooltip>
  </Stack>
);

export default IconSizeButtons;