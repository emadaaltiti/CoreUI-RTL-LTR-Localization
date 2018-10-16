import React, { Component } from "react";
import { FormattedMessage } from 'react-intl';

export default {
  items: [
    {
      name: <FormattedMessage id="_nav.Dashboard" />,
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    }
  ]
};
