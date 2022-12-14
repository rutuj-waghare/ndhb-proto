const fs = require('fs');
const path = require('path');

const routes = (app) => {
    /**
     * @summary Read all files from the current directory and use then as routes.
     */
    fs.readdirSync(`${path.resolve()}/src/routes/`).forEach((file) => {
        console.log(file);
        if (file.match(/\.js$/) !== null && file !== 'index.js')
            // eslint-disable-next-line import/no-dynamic-require, global-require
            app.use(`/${file.replace('.js', '')}`, require(`./${file.replace('.js', '')}`));
    });
};

module.exports = routes;
