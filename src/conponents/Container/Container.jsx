import PropTypes from 'prop-types'

export const Container = ({ children }) => {
  // console.log(children)
  return (<div>{children}</div>);
};

//   const Container = ({ childeren }) => {
//   return <div>{childeren}</div>;
// };
// export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};