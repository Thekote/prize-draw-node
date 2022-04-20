const app = require("./server/index.js");

const PORT = 3005;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server started at port ${PORT}.`));
}

module.exports = app;
