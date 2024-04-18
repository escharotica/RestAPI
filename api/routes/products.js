const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({message: "Handling GET request to products"
     });
}); 

router.post('/', (req, res, next) => {
    res.status(200).json({message: "Handling POST request to products"
     });
}); 

router.get('/:produtcId', (req, res, next) => {
    const id = req.params.produtcId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID', id: id
        }) ;
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:produtcId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    })
});

router.delete('/:produtcId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    })
});

module.exports = router;
