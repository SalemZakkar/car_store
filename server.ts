import express from 'express';
import bp from 'body-parser';
import { carRouter } from './routes/car_routes';
const app = express();

const port = 3000;

app.use(bp.json());

app.use(bp.urlencoded({ extended: true }));

app.use('/cars', carRouter);

app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);
});


