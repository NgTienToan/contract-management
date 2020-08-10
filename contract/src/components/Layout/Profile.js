import React from 'react'
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
function Profile() {
    return (
        <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    )
}

export default Profile
