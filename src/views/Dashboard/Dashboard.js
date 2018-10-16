import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
       <FormattedMessage id="dashboard.text" />
      </div>
    )
  }
}

export default Dashboard;
