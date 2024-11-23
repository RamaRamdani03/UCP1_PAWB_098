import express, {Router} from "express";
const router = express.Router();
const bibit = [
{
    namaBibit: "Padi Unggul",
    Jenis_Tanaman: "Padi",
    Harga: "5000",
    Stok: "100",
},
{
    namaBibit: "Jagung manis",
    Jenis_Tanaman: "Jagung",
    Harga: "10000",
    Stok: "200",   
},
];
router.get("/", (req, res) => {
    res.send(bibit);
})
export default router;