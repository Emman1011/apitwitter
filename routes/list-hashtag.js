const express = require('express');
const router = express.Router();
const Twit = require('twit');

const twitterClient = new Twit({
  consumer_key: 'TSm5U0JAL5N4Ie8EtxSnxGTCc',
  consumer_secret: 'eUM2e7icrZmjqDQjfDOx4gyyybNGwVHwrwDikhOkaReGkfsNPo',
  access_token: '1139666374320693248-XjGMpfHHKRPt1gXEqKBvgTZ50ThQJe',
  access_token_secret: 'fbsS1lVorx6QnSesqmMei3RQZbZ5bmsCxonFmTotOBnw2',
  timeout_ms: 60 * 1000,  
});

router.post('/tweets/:hashtag', (req, res) => {
  const hashtag = req.params.hashtag;

  twitterClient.post('search/tweets', { q: `#${hashtag}`, count: 10 }, (err, data, response) => {
    if (err) {
      console.log('Erro ao buscar tweets:', err);
      res.status(500).json({ error: 'Erro ao buscar tweets' });
    } else {
      const tweets = data.statuses.map(tweet => {
        return {
          hashtag: hashtag,
          text: tweet.text
        };
      });

      res.json(tweets);
    }
  });
});


// Iniciando o servidor
