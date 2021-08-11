//This Function Determines What will be provided to your resolvers via context

module.exports = (req, res) => {
  // console.log(args)
  return { req, res };
};
