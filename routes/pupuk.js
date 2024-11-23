import express, { Router } from "express";
const router = express.Router();
const pupuk = [
    {
        id: 1,
        NamaPupuk: "Rama Urea",
        JenisPupuk: "Kimia",
        Harga: "15000",
        Stok: "250",
    },
    {
        id: 2,
        NamaPupuk: "Kandang",
        JenisPupuk: "Organik",
        Harga: "13000",
        Stok: "25000",
    }
];
router.get("/", (req, res) => {
    res.send(pupuk);
});

router.post('/', (req, res) => { 
    const newPupuk = { 
        id: pupuk.length + 1, 
        NamaPupuk: req.body.NamaPupuk, 
        JenisPupuk: req.body.JenisPupuk,
        Harga: req.body.Harga,
        Stok: req.body.Stok
    }; 
    pupuk.push(newPupuk); 
    res.status(201).json(newPupuk); 
});

router.put('/:id', (req, res) => { 
    const pupukIndex = pupuk.find(t => t.id === parseInt(req.params.id)); 
    if (!pupukIndex === -1) 
        return res.status(404).json({ message: 'Pupuk tidak ditemukan' }); 
 
    pupuk[pupukIndex] = { 
        ...pupuk[pupukIndex], 
        NamaPupuk: req.body.NamaPupuk || pupuk[pupukIndex].NamaPupuk, 
        JenisPupuk: req.body.JenisPupuk || pupuk[pupukIndex].JenisPupuk,
        Harga: req.body.Harga || pupuk[pupukIndex].Harga,
        Stok: req.body.Stok || pupuk[pupukIndex].Stok
    }; 
 
    res.status(200).json({ 
        message: `Tugas dengan ID '${req.params.id}' telah diperbarui`, 
        updatedpupuk: pupuk[pupukIndex], 
    });
    
    router.delete('/:id', (req, res) => { 
        const pupukIndex = pupuk.findIndex(t => t.id === parseInt(req.params.id)); 
        if (pupukIndex === -1) return res.status(404).json({ message: 'Pupuk tidak ditemukan' }); 
     
        const deletepupuk = pupuk.splice(pupukIndex, 1)[0]; // Menghapus dan menyimpan todo yang dihapus 
        res.status(200).json({ message: `Tugas '${deletepupuk.NamaPupuk}' telah dihapus`
        }); 
     
    });
});

export default router;