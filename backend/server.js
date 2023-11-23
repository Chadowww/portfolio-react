const express = require('express');
const port = 3001;
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
