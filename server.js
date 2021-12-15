const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('isomorphic-fetch');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

const handleSend = (req, res) => {
    const secret_key = '6Ld9WaIdAAAAAFlnoVQhhH4Kh93JxuKv__65mvge'
    const token = req.query.token;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    fetch(url, {
        method: 'post'
    })
        .then(response => response.json())
        .then(google_response => res.json({ google_response }))
        .catch(error => res.json({ error }));
};

app.post('/recaptcha', handleSend);

app.listen(port, () => console.log(`Listening on port ${port}`));