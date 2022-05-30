const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from over Smarty Smarty node !!!');
})

const users = [
    { id: 1, name: 'Tolon', email: 'zs.tolon73@gmail.com', phone: '123445567' },
    { id: 2, name: 'Tolon', email: 'zs.tolon73@gmail.com', phone: '123445567' },
    { id: 3, name: 'Tolon', email: 'zs.tolon73@gmail.com', phone: '123445567' },
    { id: 4, name: 'Tolon', email: 'zs.tolon73@gmail.com', phone: '123445567' },
    { id: 5, name: 'Tolon', email: 'zs.tolon73@gmail.com', phone: '123445567' },
    { id: 6, name: 'Tolon', email: 'zs.tolon73@gmail.com', phone: '123445567' },
    { id: 7, name: 'Tolon1', email: 'zs.tolon73@gmail.com', phone: '123445567' }
]

app.get('/users', (req, res) => {
    // filter by query perameter
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request:', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port);
})
