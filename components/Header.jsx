import React, { PropTypes, Component } from 'react';

import mui, {AppBar, Styles} from 'material-ui';
import MyRawTheme from '../src/material_ui_raw_theme_file';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  static get childContextTypes() {
    return { muiTheme: React.PropTypes.object };
  }

  getChildContext(){
    return {  muiTheme: Styles.ThemeManager.getMuiTheme(MyRawTheme)};
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
          <AppBar title="ACME Insurance" />
          <h1 style={defaultStyle}>Application</h1>
      </header>
    );
  }
}

Header.propTypes = {
};

export default Header;
