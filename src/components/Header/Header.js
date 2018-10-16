import React, { Component } from "react";
import { Nav, NavItem, NavbarToggler, NavbarBrand } from "reactstrap";
import Select from "react-select";
const options = [{ value: "ar", label: "ar" }, { value: "en", label: "en" }];

class Header extends Component {
  constructor(props) {
    super(props);
    const lang = localStorage.getItem("default_Language");
    this.state = {
      selectedOption: null
    };
  }
  componentWillMount() {
    const lang = localStorage.getItem("default_Language");
    this.setState({selectedOption: {value: lang, label: lang} });
  }
  handleChange(selectedOption) {
    this.setState({ selectedOption });
    localStorage.setItem("default_Language", selectedOption.value);
    window.location.reload();
  }
  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle("sidebar-hidden");
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle("sidebar-minimized");
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle("sidebar-mobile-show");
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle("aside-menu-hidden");
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <NavbarBrand href="#" />
        <NavbarToggler
          className="d-md-down-none mr-auto"
          onClick={this.sidebarToggle}
        >
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <div className="select-languages">
          <Select
            value={selectedOption}
            onChange={event => this.handleChange(event)}
            options={options}
          />
        </div>
        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
      </header>
    );
  }
}

export default Header;
