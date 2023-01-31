const model = require('../../models/material');

module.exports = {
    getMaterials: async (req, res) => {
        res.json(await model.getMaterials());
    },  
    getMaterial: async (id) => {
        res.json(await model.getMaterial(id));
    },  
    addMaterial: async (material) => {
        res.json(await model.addMaterial(material));
    },
    updateMaterial: async (material) => {
        res.json(await model.updateMaterial(material));
    },
    deleteMaterial: async (id) => {
        res.json(await model.deleteMaterial(id));
    }   
}   