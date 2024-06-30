import React from 'react';

import {
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import { useSamplesDrawerOpen } from '../../documents/editor/EditorContext';

import SidebarButton from './SidebarButton';
import logo from './waypoint.svg';

export const SAMPLES_DRAWER_WIDTH = 240;

export default function SamplesDrawer() {
  const samplesDrawerOpen = useSamplesDrawerOpen();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={samplesDrawerOpen}
      sx={{
        width: samplesDrawerOpen ? SAMPLES_DRAWER_WIDTH : 0,
      }}
    >
      <Stack
        spacing={3}
        py={1}
        px={2}
        width={SAMPLES_DRAWER_WIDTH}
        justifyContent="space-between"
        height="100%"
      >
        <Stack
          spacing={2}
          sx={{
            '& .MuiButtonBase-root': {
              width: '100%',
              justifyContent: 'flex-start',
            },
          }}
        >
          <Typography variant="h6" component="h1" sx={{ p: 0.75 }}>
            EmailBuilder
          </Typography>

          <Stack alignItems="flex-start">
            <SidebarButton href="#">Trống</SidebarButton>
            <SidebarButton href="#sample/welcome">
              Mẫu email chào mừng
            </SidebarButton>
            <SidebarButton href="#sample/one-time-password">
              Mẫu email OTP
            </SidebarButton>
            <SidebarButton href="#sample/reset-password">
              Mẫu đặt lại mật khẩu
            </SidebarButton>
            <SidebarButton href="#sample/order-ecomerce">
              Mẫu hóa đơn mua hàng
            </SidebarButton>
            <SidebarButton href="#sample/subscription-receipt">
              Mẫu hóa đơn đăng ký
            </SidebarButton>
            <SidebarButton href="#sample/reservation-reminder">
              Mẫu nhắc nhở đặt chỗ
            </SidebarButton>
            <SidebarButton href="#sample/post-metrics-report">
              Mẫu email báo số liệu
            </SidebarButton>
            <SidebarButton href="#sample/respond-to-message">
              Mẫu phản hồi tin nhắn
            </SidebarButton>
          </Stack>
        </Stack>
      </Stack>
    </Drawer>
  );
}
