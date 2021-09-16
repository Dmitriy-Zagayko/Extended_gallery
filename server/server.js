const express = require('express');

const PORT = 4050;
const app = express();

app.listen(PORT, () => console.log(`app start on port:${PORT}`));
