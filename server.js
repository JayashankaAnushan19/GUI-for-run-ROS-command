const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
const port = 3000;

// Use the CORS middleware
app.use(cors());

app.get('/run-command', (req, res) => {
    exec('dir', (error, stdout, stderr) => {
        if (error) {
            res.send(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            res.send(`Stderr: ${stderr}`);
            return;
        }
        res.send(`Output: <pre>${stdout}</pre>`);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
