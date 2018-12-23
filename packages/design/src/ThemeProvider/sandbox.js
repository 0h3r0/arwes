import React from 'react';
import withStyles, { ThemeProvider } from 'react-jss';

const App1 = withStyles({
  root: {
    display: 'block',
    margin: 20,
    backgroundColor: '#444'
  },
  title: {
    margin: [0, 0, 20],
    fontSize: 40,
    color: '#00ffff',
    textShadow: '1px 1px #11eeee'
  },
  content: {
    fontSize: 20,
    color: '#11eeee'
  }
})(({ classes }) => (
  <div className={classes.root}>
    <h1 className={classes.title}>JSS</h1>
    <p className={classes.content}>It is an awesome framework to build apps.</p>
  </div>
));

const App2 = withStyles({
  title: {
    border: '2px solid red'
  }
})(App1);

export default () => <App2 />;

/*
import React from 'react';
import createTheme from '../tools/createTheme';
import withStyles from '../tools/withStyles';
import ThemeProvider from './index';

const MyColor = withStyles(theme => ({
  root: {
    width: 300,
    height: 120,
    transition: `background-color ${theme.animTime}ms ease-out`,
    backgroundColor: theme.color.primary.base
  }
}))(props => <div className={props.classes.root} />);

export default class MyApp extends React.Component {
  constructor() {
    super(...arguments);
    const color = '#22179a';
    this.state = { color, theme: this.getTheme(color) };
    this.onChange = this.onChange.bind(this);
  }
  render() {
    const { color, theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <label htmlFor="colorPrimary">Primary Color: </label>
          <input id="colorPrimary" value={color} onChange={this.onChange} />
          <MyColor />
        </div>
      </ThemeProvider>
    );
  }
  onChange(ev) {
    const color = ev.target.value;
    const theme = this.getTheme(color);
    this.setState({ color, theme });
  }
  getTheme(color) {
    return createTheme({
      color: {
        primary: { base: color }
      }
    });
  }
}
*/
