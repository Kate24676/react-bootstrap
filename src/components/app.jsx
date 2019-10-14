import React, { Switch, Route } from 'react';
import PropTypes from 'prop-types';
import '../styles/app.scss';
import NavBar from './NavBar';
import Properties from './properties';
import AddProperty from './AddProperty.jsx';

const App = (props) => {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </React.Fragment>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'Kate',
};

export default App;
