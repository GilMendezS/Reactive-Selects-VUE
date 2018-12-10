const express = require('express')
const app = express();
app.use(express.static('public'))
const stateRoutes = require('./routes/state');
app.use('/api/states',stateRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    `PORT : ${port}`
})
