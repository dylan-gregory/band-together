import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <div>
      Home
    </div>
    <div>
      Welcome home!
    </div>
    <button onClick={() => props.changePage()}> Go to other page via redux </button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/login')
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
