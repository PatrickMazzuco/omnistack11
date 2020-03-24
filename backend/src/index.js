import express from 'express';

import routes from './routes';

const app = express();

// Init middleware
app.use(express.json());

// Init routes
routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
