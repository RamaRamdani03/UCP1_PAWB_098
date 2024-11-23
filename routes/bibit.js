import express, { Router } from "express";
const router = express.Router();

const bibit = [
    {
        id: 1,
        namaBibit: "Padi Unggul",
        Jenis_Tanaman: "Padi",
        Harga: "5000",
        Stok: "100",
    },
    {
        id: 2,
        namaBibit: "Jagung manis",
        Jenis_Tanaman: "Jagung",
        Harga: "10000",
        Stok: "200",
    },
];
router.get("/", (req, res) => {
    res.send(bibit);
});

router.post('/', (req, res) => {
    const newbibit = {
        id: bibit.length + 1,
        namaBibit: req.body.namaBibit,
        Jenis_Tanaman: req.body.Jenis_Tanaman,
        Harga: req.body.Harga,
        Stok: req.body.Stok
    };
    bibit.push(newbibit);
    res.status(201).json(newbibit);
});