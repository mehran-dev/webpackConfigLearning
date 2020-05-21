const express = require('express');
const path = require('path'); 3

const app = express();

//server route 
app.get('/hello', (req, res) => res.send({ hi: 'there' }))




if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackConfig = require('./webpack.config');
    const webpack = require('webpack');

    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));


    })

}



app.listen(process.env.PORT || 3050, () => {
    console.log('service is running on port 3050 ... ');
});
