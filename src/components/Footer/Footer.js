import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span><a href="">Emad :) </a> &copy; 2018 </span>
        <span className="ml-auto">Updated  by <a href="https://github.com/emadaaltiti">Emad altiti</a></span>
      </footer>
    )
  }
}

export default Footer;
