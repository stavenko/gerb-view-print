import { connect } from "react-redux";
import Layout from "../components/layout";
import { applicationActions, RootState } from "../redux";

export default connect(
  (state: RootState)  => {
    return { foo: state.application.foo };
  },
  {
    act: () => applicationActions.init("init"),
  }
)(Layout);
