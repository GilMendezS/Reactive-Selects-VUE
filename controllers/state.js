const fs = require('fs');
const path = require('path');

const main_path = path.dirname(process.mainModule.filename)

exports.getStates = (req, res, next) => {
    const file = path.join(main_path, 'data', 'states.json');
    fs.readFile(file, (err, data) => {
        if(!err){
            const states = JSON.parse(data)
            return res.status(200).json({
                states
            })
        }
    })
}
exports.getCities = (req, res, next) => {
    const file = path.join(main_path, 'data', 'cities.json');
    fs.readFile(file, (err, data) => {
        const cities = JSON.parse(data)
        if(!err){
            return res.status(200).json({
                cities
            })
        }
        return res.status(500).json({
            error: err
        })
    })
}
