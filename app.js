// Importation
require('dotenv').config();
const cors = require('cors');
const express = require('express');

const router = express.Router();

const connection = require('./db-config');

const app = express();

const port = process.env.PORT || 3000;
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log(`connected as id ${connection.threadId}`);
  }
});

const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS.split(',');
const corsOptions = {
  origin: (origin, callback) => {
    if (origin === undefined || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

// Initialisation of the app
app.use(cors(corsOptions));
// add function to the app
app.use('/', router);

app.use(express.json());

// Rest of your code like routes

// DATA
/* 
beatmaker template : 
    {
        id: , 
        firstname: , 
        lastname: , 
        pseudo: ,
        avatar: , 
        instagram: , 
        linkedin: , 
        prods: [], 
        followers: [] , 
    }

singer template : 
    {
        id: , 
        firstname: , 
        lastname: , 
        pseudo: ,
        avatar: , 
        instagram: , 
        linkedin: , 
        prods: [], 
        followers: [] , 
    }

prod & song template : 

{
    id: , 
    name: , 
    duration: , 
    genres: [], 
    authors : []
}

*/

const beatmakers = [
  {
    id: 1,
    firstname: 'Eder',
    lastname: 'Goncalves',
    pseudo: 'Dr-Wouse',
    avatar: '/',
    instagram: '/',
    linkedin: '/',
    prods: [
      {
        id: 1,
        name: '#',
        duration: '3min20s',
        genres: ['trap', 'drill'],
        authors: ['William Louis-Louisy'],
      },
    ],
    followers: 5,
  },
];

const singers = [
  {
    id: 1,
    firstname: 'William',
    lastname: 'Louis-Louisy',
    pseudo: 'BLB',
    avatar: '/',
    instagram: '/',
    linkedin: '/',
    songs: ['First Song', 'Second Song'],
    followers: 67,
  },
];

const songs = [
  {
    id: 1,
    name: '#',
    duration: '3min20s',
    genres: ['trap', 'drill'],
    authors: ['William Louis-Louisy'],
  },
];

// ROUTE

// Création des routers

const beatmakersRouter = express.Router();
app.use('/beatmakers', beatmakersRouter);

const singersRouter = express.Router();
app.use('/singers', singersRouter);

const songsRouter = express.Router();
app.use('/songs', songsRouter);

// Beatmakers

// Get Beatmakers

beatmakersRouter.get('/', (req, res) => {
  console.log('handling beatmakersRouter');
  res.send(beatmakers);
});

singersRouter.get('/', (req, res) => {
  console.log('handling singers');
  res.send(singers);
});

songsRouter.get('/', (req, res) => {
  console.log('handling songs');
  res.send(songs);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
