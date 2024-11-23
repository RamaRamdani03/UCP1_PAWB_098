import express from "express";
import bodyParser from 'body-parser';
import bibitRoute from "./routes/bibit.js";
import pupukRoute from "./routes/pupuk.js";

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use("/mobil", mobilRoute);
app.use("/hp", hpRoute);
app.get("/", (req, res) => {
    console.log(["Get ROUTE"]);
    res.send("Selamat Pagiiiii");
});

app.listen(port, () =>
    console.log(
        `Server berjalan di port: http://localhost:${port}`)
);
