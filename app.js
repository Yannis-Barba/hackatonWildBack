/* eslint-disable */
// Importation
require('dotenv').config();
const cors = require('cors');
const express = require('express');

const router = express.Router();

const app = express();

const port = process.env.PORT || 3000;

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

let songsId = 2;
let profilesId = 2;
let beatmakersId = 1;
let singersId = 101;

let profiles = [
  {
    id: 1,
    firstname: 'Eder',
    lastname: 'Goncalves',
    pseudo: 'Dr Wouse',
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
  {
    id: 2,
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

let beatmakers = [
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
        name: 'Hello World',
        duration: '3min20s',
        genres: ['trap', 'drill'],
        image: '',
        sources: '',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Dr Wouse',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 5,
  },
];

let singers = [
  {
    id: 101,
    firstname: 'William',
    lastname: 'Louis-Louisy',
    pseudo: 'DBD',
    avatar: '/',
    instagram: '/',
    linkedin: '/',
    prods: [
      {
        id: 1,
        name: 'Hello World',
        duration: '3min20s',
        genres: ['trap', 'drill'],
        image: '',
        sources: '',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 101,
            pseudo: 'DBD',
            role: 'singer',
          },
          {
            id: 1,
            pseudo: 'Dr Wouse',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 5,
  },
];

let songs = [
  {
    id: 1,
    name: 'Hello World',
    duration: '3min20s',
    genres: ['trap', 'drill'],
    image: '',
    sources: '',
    views: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 400),
    authors: [
      {
        id: 101,
        pseudo: 'BLB',
        role: 'singer',
      },
      {
        id: 1,
        pseudo: 'Dr Wouse',
        role: 'beatmaker',
      },
    ],
  },
  {
    id: 2,
    name: 'Hello World',
    duration: '3min20s',
    genres: ['trap', 'drill'],
    image: '',
    sources: '',
    views: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 400),
    authors: [
      {
        id: 101,
        pseudo: 'BLB',
        role: 'singer',
      },
      {
        id: 1,
        pseudo: 'Dr Wouse',
        role: 'beatmaker',
      },
    ],
  },
];

let users = [
  {
    id: 1,
    name: 'Yannis',
    role: 'Singer',
    image: 'https://ibb.co/J2J4L1g',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
    prods: [],
  },
  {
    id: 2,
    name: 'Eder',
    role: 'Beatmaker',
    image: 'https://ibb.co/J2J4L1g',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
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

const profileRouter = express.Router();
app.use('/profile', profileRouter);

const userRouter = express.Router();
app.use('/user', userRouter);

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

songsRouter.post('/', (req, res) => {
  console.log('posting a song');
  const { image, music, title, description } = req.body;
  console.log(image, music, title, description);
  songsId += 1;
  songs.push({
    id: songsId,
    name: title,
    duration: 'XXX',
    genres: ['trap', 'drill'],
    image: image,
    sources: music,
    views: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 400),
    authors: [
      {
        id: 101,
        pseudo: 'BLB',
        role: 'singer',
      },
      {
        id: 1,
        pseudo: 'Dr Wouse',
        role: 'beatmaker',
      },
    ],
  });
  users[0].prods.push({
    id: songsId,
    name: title,
    duration: 'XXX',
    genres: ['trap', 'drill'],
    image: image,
    sources: music,
    views: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 400),
    authors: [
      {
        id: 101,
        pseudo: 'BLB',
        role: 'singer',
      },
      {
        id: 1,
        pseudo: 'Dr Wouse',
        role: 'beatmaker',
      },
    ],
  });
  res.status(200).send('song insert into songs');
});

profileRouter.get('/:id', (req, res) => {
  console.log('handling profile', req.params.id);
  const id = req.params.id;
  const profile = profiles.filter((p) => p.id === parseInt(id));
  console.log('handling profile');
  console.log(profile[0]);
  res.send(profile[0]);
});

userRouter.get('/:id', (req, res) => {
  console.log('handling user');
  const id = req.params.id;
  const user = users.filter((u) => u.id === parseInt(id));
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
