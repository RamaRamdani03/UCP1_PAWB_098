import express, { Router } from "express";
const router = express.Router();
const pupuk = [
    {
        NamaPupuk: "Rama Urea",
        JenisPupuk: "Kimia",
        Harga: "15000",
        Stok: "250",
    },
    {
        NamaPupuk: "Kandang",
        JenisPupuk: "Organik",
        Harga: "13000",
        Stok: "25000",
    }
];
router.get("/", (req, res) => {
    res.send(pupuk);
})
export default router;