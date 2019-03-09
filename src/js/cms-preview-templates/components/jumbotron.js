import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return <div>
      <h1>
        { title }
      </h1>
      {subtitle && <p>{ subtitle }</p>}
    </div>;
  }
}
