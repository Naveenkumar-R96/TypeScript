const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const logEvents = require('./middleware/logEvents');

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

app.get(['/', '/index.html','/index'], (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get(['/new-page','/new-page.html'], (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})
app.get(['/old-page','/old-page.html'], (req, res)=>{
    res.redirect(301, '/new-page.html');
})
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
