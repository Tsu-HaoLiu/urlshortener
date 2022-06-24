const Express = require('express');
const router = Express.Router();
const shortid = require('shortid');
const Url = require('../models/Url');
const utils = require('../utils/utils');
require('dotenv').config({ path: '../config/.env' });


// Short URL Generator
router.post('/short', async (req, res) => {
    
    const { origUrl } = req.body;
    const base = process.env.BASE;
    const urlId = shortid.generate();
    const urlValid = utils.validateUrl(origUrl);

    if (urlValid) {
        try {
            let url = await Url.findOne({ origUrl });
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `${base}/${urlId}`;

                url = new Url({
                origUrl,
                shortUrl,
                urlId,
                date: new Date(),
                });

                await url.save();
                res.json(url);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
        }
    } else {
        data = {
            error: 'Invalid Original Url',
            s: urlValid
        }
        res.status(400).json(data);
    }
});

module.exports = router;