const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const { logger } = require('./middleware/logEvents');
const { log } = require('console');
const cors = require('cors');
const errorHandler = require('./middleware/errors');
const corsOptions = require('./config/corsOption');


app.use('/', require('./Routes/root'))
app.use(cors(corsOptions));
app.use(logger)
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, './public')));
app.use('/subdir', express.static(path.join(__dirname, './public')));


app.use('/subdir', require('./Routes/subdir'));
app.use('/employee',require('./Routes/api/employee'));

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
