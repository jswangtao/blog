import * as React from "react";
export function createContext(defaultValue) {
  class Provider extends React.Component {
    constructor(props) {
      super(props);
      Provider.value = defaultValue;
      this.state = {};
    }

    static getDerivedStateFromProps(nextProps, preState) {
      Provider.value = nextProps.value;
      return preState;
    }
    render() {
      return this.props.children;
    }
  }
  class Consumer extends React.Component {
    render() {
      return this.props.children(Provider.value);
    }
  }
  return { Provider, Consumer };
}
