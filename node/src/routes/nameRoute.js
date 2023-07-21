const express = require('express');
const router = express.Router();
const database = require('../db/database');

router.get('/', async (req, res) => {
    console.log('GET /nomes')
    let htmlTable = await createHtmlTableFromDatabaseNames();
    res.send(htmlTable);
})

async function getNamesFromDatabase() {
    return await database.getNamesFromDatabase();
}

async function createHtmlTableFromDatabaseNames() {
    const names = await getNamesFromDatabase();
    const htmlTable = names.map(name => `<tr><td>${name.name}</td></tr>`).join('');
    console.log(names);
    return `
        <table>
            <thead>
                <tr>
                    <th>Full Cycle Rocks!!</th>
                </tr>
            </thead>
            <tbody>${htmlTable}</tbody>
        </table>`;
}


module.exports = router;