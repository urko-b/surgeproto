// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// const PrivateRoute = ({ component: Component, auth, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             auth.isAuthenticated === true ? (
//                 <Component {...props} />
//             ) : (
//                 <Navigate to="/sign_in" />
//             )
//         }
//     />
// );
// PrivateRoute.propTypes = {
//     auth: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//     auth: state.auth
// });
// export default connect(mapStateToProps)(PrivateRoute);