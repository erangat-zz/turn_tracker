import React, { Component } from "react";
import { connect } from "react-redux";

const mapState = state => ({
  data: state.players.data
});

class PlayerComponent extends Component {
  render() {
    const { data } = this.props;

    return <div>Data from redux: {data}</div>;
  }
}

export default connect(mapState)(PlayerComponent);
