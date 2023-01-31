const logger = require('../config/logger');
const express = require('express');
const path = require('path');

const router = express.Router();

//import all controllers
const common = require("../controllers/common");
const api = require("../controllers/api");

//import all middleware

//import all routes
// router.post('/setShowQuery', common.handleSetShowQuery);
router.get('/api/materials', api.material.getMaterials); //get all materials

//Serve the index.html file for all other routes
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
    });

//function to handle GET request to root
//it will return a list of routes
//and return it as json
const handleRootGet = async (req, res) => {
    try {
        logger.debug("handleRootGet START");
        //get list of all routes
        //and return it as formatted html table

        const routes = router.stack //get all routes
            .filter(r => r.route) //filter out all middleware
            .map(r => {  //get path of each route    
                return {
                    path: r.route.path,
                    methods: Object.keys(r.route.methods).map((i) => i.toUpperCase(i)).join(', ')
                }
            }); //get path of each route
    
            //transform routes to html page
            let html = '<html><head><title>Routes</title></head><body><table>';
            html += '<tr><th>Path</th><th>Methods</th></tr>';
            routes.forEach(r => {
                html += '<tr>';
                html += `<td>${r.path}</td>`;
                html += `<td>${r.methods}</td>`;
                html += '</tr>';
            });
            html += '</table></body></html>';
            res.send(html);
    } catch (err) {
        logger.error("handleRootGet error", err);
        res.status(400).json({
            message: 'Error while getting routes',
            error: err
        });
    }
};

router.get('/', handleRootGet);

module.exports = router;