

const dummy = [
    {
        id: 1,
        name: 'Material 1',
        description: 'Material 1 description',
        price: 100,
        quantity: 100,
    },
    {
        id: 2,
        name: 'Material 2',
        description: 'Material 2 description',
        price: 200,
        quantity: 200,
    },
    {
        id: 3,
        name: 'Material 3',
        description: 'Material 3 description',
        price: 300,
        quantity: 300,
    }
]

module.exports = {
    getMaterials: async () => {
        return await dummy;
    },  
    getMaterial: async (id) => {
        return await dummy.find((material) => material.id === id);
    },  
    addMaterial: async (material) => {
        material.id = dummy.length + 1;
        dummy.push(material);
        return await material;
    },
    updateMaterial: async (material) => {
        const index = dummy.findIndex((m) => m.id === material.id);
        dummy[index] = material;
        return await material;
    },
    deleteMaterial: async (id) => {
        const index = dummy.findIndex((m) => m.id === id);
        dummy.splice(index, 1);
        return await id;
    }   
}   