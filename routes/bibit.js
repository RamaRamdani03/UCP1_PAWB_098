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


router.put('/:id', (req, res) => {
    const bibitIndex = bibit.findIndex(t => t.id === parseInt(req.params.id));
    if (!bibitIndex === -1)
        return res.status(404).json({ message: 'Bibit tidak ditemukan' });

    bibit[bibitIndex] = {
        ...bibit[bibitIndex],
        namaBibit: req.body.namaBibit || bibit[bibitIndex].namaBibit,
        Jenis_Tanaman: req.body.Jenis_Tanaman || bibit[bibitIndex].Jenis_Tanaman,
        Harga: req.body.Harga || bibit[bibitIndex].Harga,
        Stok: req.body.Stok || bibit[bibitIndex].Stok
    };
});