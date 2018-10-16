import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';

import ar from './localization/ar';
import en from './localization/en';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'
let defaultLang = en;
const lang = localStorage.getItem('default_Language') ? localStorage.getItem('default_Language') : 'en';

if (lang === 'en') {
  defaultLang = en;
} else {
  defaultLang = ar;
  document.body.style.className = 'app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden';
  document.body.style.textAlign = 'right';
  document.body.style.direction = 'rtl';
  document.body.style.overflow = 'hidden';
  document.body.style.minHeight = '100%';
  document.body.style.height = '100%';
  document.body.style.position = 'relative';
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
  $('html').attr('dir', 'rtl');
  $('html').css('overflow', 'hidden');
  $('html').css('min-height', '100%');
  $('html').css('height', '100%');
  $('html').css('position', 'relative');
}
addLocaleData({ ...en, ...ar });

ReactDOM.render((
  <IntlProvider locale="en" messages={defaultLang}>
  <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </HashRouter>
  </IntlProvider>
), document.getElementById('root'));
