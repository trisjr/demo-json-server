const userRoutes = (app, fs) => {
  // variables
  const dataPath = './data/users.json';

  // READ
  app.get('/users', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  // GET USER BY ID
  app.get('/users/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      const users = JSON.parse(data);
      const userId = req.params['id'];
      const user = users[userId];

      res.send(user);
    });
  })
};

module.exports = userRoutes;
