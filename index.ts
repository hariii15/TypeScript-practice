import express from 'express';
import todoRoutes from './todo'
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use('/', todoRoutes)


app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("sucess!")
})

