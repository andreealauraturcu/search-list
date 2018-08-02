import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import CatResultRow from "./CatResultRow";
import "./CatResults.css";

class CatResults extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-cat-results">
        {this.props.catData.map(catData => (
          <CatResultRow
            key={catData.title}
            symbol={catData.symbol}
            title={catData.title}
          />
        ))}
      </div>
    );
  }
}
CatResults.propTypes = {
  catData: PropTypes.array
};
export default CatResults;
