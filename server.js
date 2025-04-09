import express from 'express';
import http from 'http';
import cors from 'cors';  // Import the CORS package

const app = express();
const PORT = 3000;
app.use(cors()); // This enables CORS for all routes by default

app.get('/fetch-data', (req, res) => {
    const postData = '0x0055,0x0056'; // Data to send in the body

    const options = {
        hostname: 'md.morningstarcorp.com', // Removed 'http://' as it's handled by the library
        port: 51201,                       // Server port
        path: '/readreg',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Adjust if needed
            'Content-Length': Buffer.byteLength(postData),
        }
    };

    // Send the POST request with the data
    const request = http.request(options, response => {
        let data = '';

        response.on('data', chunk => {
            data += chunk;
        });

        response.on('end', () => {
            res.json({ message: 'Data fetched successfully', data: data });
        });
    });

    request.on('error', error => {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    });

    // Send the data in the request body
    request.write(postData);
    request.end();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
