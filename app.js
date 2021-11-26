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

let users = [
  {
    id: 1,
    name: 'Yannis',
    role: 'singer',
    image: 'https://ibb.co/J2J4L1g',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
  {
    id: 2,
    name: 'Eder',
    role: 'beatmaker',
    image: 'https://ibb.co/tqrNRQy',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
  {
    id: 3,
    name: 'William',
    role: 'singer',
    image: 'https://ibb.co/W0sPVxj',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
  {
    id: 4,
    name: 'Kalil',
    role: 'beatmaker',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.parismatch.com%2FPeople-A-Z%2FZinedine-Zidane&psig=AOvVaw3WRFNQfcVAV1EgbnPpq9Tr&ust=1638003724064000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCz8cLVtfQCFQAAAAAdAAAAABAD',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
  {
    id: 5,
    name: 'Pierre',
    role: 'singer',
    image:
      'https://api.freelancelyon.fr/uploads/1595341874383-pierregenthon2.jpg',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
  {
    id: 6,
    name: 'Thomas',
    role: 'beatmaker',
    image:
      'https://www.wildcodeschool.com/uploads/6fdc0ecea7173e565fc444a3ab1f986c.jpg-aldaitz.jpg',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
  {
    id: 7,
    name: 'Pierre',
    role: 'beatmaker',
    image:
      'https://media-exp1.licdn.com/dms/image/C4D03AQH6UPJ2Vo7HWQ/profile-displayphoto-shrink_100_100/0/1554302114073?e=1642636800&v=beta&t=ABQjnq9NOSQPJq9jgZjUDAQwfld_YC_1t_-48Yc0BUc',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
  {
    id: 8,
    name: 'Antoine Daniel',
    role: 'beatmaker',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Antoine_Daniel_-_N%C3%A9oCast2_-_3_%28cropped%29.jpg',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
  {
    id: 9,
    name: 'Franky Vincent',
    role: 'singer',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Franky_Vincent.jpg',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
  {
    id: 10,
    name: 'Eminem',
    role: 'singer',
    image:
      'https://img.20mn.fr/EFUKPGD2SW6agcGebksn7w/830x532_rappeur-eminem.jpg',
    views: Math.floor(Math.random() * 50000),
    upploads: Math.floor(Math.random() * 50),
    followers: Math.floor(Math.random() * 1000),
  },
];

let beatmakers = [
  {
    id: 1,
    firstname: 'Eder',
    lastname: 'Goncalves',
    pseudo: 'Dr-Wouse',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Trololo',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image: 'https://www.journaldugeek.com/files/2012/06/Screenshot_2.jpg',
        sources: 'https://ucarecdn.com/450724ba-6667-42c8-8849-b0d7a0f440da/',
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
      {
        id: 2,
        name: 'Stick of True',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://www.aimm.edu/hs-fs/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg?width=719&name=Tyler%20the%20Creator-%20Flower%20boy.jpg',
        sources: 'https://ucarecdn.com/a98d715e-63c2-473c-a529-a67b1a01eeb7/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 2,
            pseudo: 'Dr Wouse',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 500,
  },

  {
    id: 2,
    firstname: 'Kalil',
    lastname: 'Boulgrimi',
    pseudo: 'BG de Montelimar',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Hackaton',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg',
        sources: 'https://ucarecdn.com/e310ee42-aed8-4795-9e67-c660db44c45b/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'BG de Montelimar',
            role: 'beatmaker',
          },
        ],
      },
      {
        id: 2,
        name: 'Bisou bisou',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://preview.redd.it/gfyugyna3v961.jpg?auto=webp&s=ca23adf963bcc5e5f6ee0b0d160329a68885f2c7',
        sources: 'https://ucarecdn.com/a98d715e-63c2-473c-a529-a67b1a01eeb7/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'BG de Montelimar',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 608,
  },

  {
    id: 3,
    firstname: 'Thomas',
    lastname: 'Aldataiz',
    pseudo: 'PHP BOY',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Symfony',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image: 'https://symfony.com/images/opengraph/symfony.png',
        sources: '',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'PHP BOY',
            role: 'beatmaker',
          },
        ],
      },
      {
        id: 2,
        name: 'PhP is a shit',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://kinsta.com/fr/wp-content/uploads/sites/4/2019/05/qu-est-ce-que-php.png',
        sources: '',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'PHP BOY',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 1,
  },

  {
    id: 4,
    firstname: 'Pierre',
    lastname: 'Paillard',
    pseudo: 'Dresseur de Singe',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Angular',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://www.lucas-uzan.fr/wp-content/uploads/2019/12/angular.png',
        sources: 'https://ucarecdn.com/a4f9b89d-9966-4eb3-8c6c-3a3c51779306',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Dresseur de Singe',
            role: 'beatmaker',
          },
        ],
      },
      {
        id: 2,
        name: 'Pole Emploi',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://yt3.ggpht.com/ytc/AKedOLSINDCTBP5dCvg2v1wmh2c2jtwmmUnOTISjY3-njQ=s900-c-k-c0x00ffffff-no-rj',
        sources: 'https://ucarecdn.com/3fc09d87-2e12-448d-9765-d308f9e460ad',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Dresseur de Singe',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 169,
  },

  {
    id: 5,
    firstname: 'Antoine',
    lastname: 'Daniel',
    pseudo: 'Fan de Hareng',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Dazot',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://pbs.twimg.com/profile_images/622137160213340160/lhzBmyNC_400x400.jpg',
        sources: 'https://ucarecdn.com/3fc09d87-2e12-448d-9765-d308f9e460ad',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'DAZOT',
            role: 'beatmaker',
          },
        ],
      },
      {
        id: 2,
        name: 'What the cut',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://pbs.twimg.com/profile_images/622137160213340160/lhzBmyNC_400x400.jpg',
        sources: 'https://ucarecdn.com/a4f9b89d-9966-4eb3-8c6c-3a3c51779306',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'DAZOT',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 1000,
  },
];

let singers = [
  {
    id: 101,
    firstname: 'Yannis',
    lastname: 'Barba',
    pseudo: 'The Genius',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Les Licornes',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://france3-regions.francetvinfo.fr/image/R5YYV1T5VqGrb8XmtjVJfy03tnc/600x400/regions/2021/08/12/61151d28c322f_maxbestof150033-5423225.jpg',
        sources: 'https://ucarecdn.com/c7d16080-2127-4bb4-af87-a501f3e9a46f/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'The Genius',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'Mariage de Nain',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://france3-regions.francetvinfo.fr/image/R5YYV1T5VqGrb8XmtjVJfy03tnc/600x400/regions/2021/08/12/61151d28c322f_maxbestof150033-5423225.jpg',
        sources: 'https://ucarecdn.com/c7d16080-2127-4bb4-af87-a501f3e9a46f/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'The Genius',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 650,
  },

  {
    id: 102,
    firstname: 'William',
    lastname: 'Louis-Lousy',
    pseudo: 'BLB',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'PLGM',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://www.filsantejeunes.com/wp-content/uploads/2005/05/dangers-nuit.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'BLB',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'La nuit',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://www.filsantejeunes.com/wp-content/uploads/2005/05/dangers-nuit.jpg',
        sources: 'https://ucarecdn.com/c7d16080-2127-4bb4-af87-a501f3e9a46f/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'BLB',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 835,
  },

  {
    id: 103,
    firstname: 'Pierre',
    lastname: 'Genthon',
    pseudo: 'Drunk boy',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Chouffe',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image: 'https://auxparaiges.fr/wp-content/uploads/2020/11/Chouffe.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Drunk boy',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'Maredsou',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://tourisme-maredsous.be/wp-content/uploads/2017/07/biere_dabbaye_groot_logo-1.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Drunk boy',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 935,
  },

  {
    id: 104,
    firstname: 'Franky',
    lastname: 'Vincent',
    pseudo: 'Playboy',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Fruit de la passion',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://e.snmc.io/i/1200/s/7d22e83f88e475538424b2e2b839b0d8/1758704',
        sources: 'https://ucarecdn.com/0cd50c3f-f735-453f-8ed6-bf5210e6986d',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Playboy',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'Mon zizi',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://e.snmc.io/i/1200/s/7d22e83f88e475538424b2e2b839b0d8/1758704',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Playboy',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 935,
  },

  {
    id: 105,
    firstname: 'Slim',
    lastname: 'Shady',
    pseudo: 'EMINEM',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Fruit de la passion',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://static.fnac-static.com/multimedia/Images/FR/NR/94/28/14/1321108/1540-1/tsp20131204170026/The-Eminem-Show.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'EMINEM',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'Mon zizi',
        duration: '3min55s',
        genres: ['trap', 'drill'],
        image:
          'https://static.fnac-static.com/multimedia/Images/FR/NR/94/28/14/1321108/1540-1/tsp20131204170026/The-Eminem-Show.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'EMINEM',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 935,
  },
];

let profiles = [
  {
    id: 1,
    firstname: 'Eder',
    lastname: 'Goncalves',
    pseudo: 'Dr-Wouse',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Trololo',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image: 'https://www.journaldugeek.com/files/2012/06/Screenshot_2.jpg',
        sources: 'https://ucarecdn.com/450724ba-6667-42c8-8849-b0d7a0f440da/',
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
      {
        id: 2,
        name: 'Stick of True',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://www.aimm.edu/hs-fs/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg?width=719&name=Tyler%20the%20Creator-%20Flower%20boy.jpg',
        sources: 'https://ucarecdn.com/a98d715e-63c2-473c-a529-a67b1a01eeb7/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 2,
            pseudo: 'Dr Wouse',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 500,
  },

  {
    id: 2,
    firstname: 'Kalil',
    lastname: 'Boulgrimi',
    pseudo: 'BG de Montelimar',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Hackaton',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg',
        sources: 'https://ucarecdn.com/e310ee42-aed8-4795-9e67-c660db44c45b/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'BG de Montelimar',
            role: 'beatmaker',
          },
        ],
      },
      {
        id: 2,
        name: 'Bisou bisou',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://preview.redd.it/gfyugyna3v961.jpg?auto=webp&s=ca23adf963bcc5e5f6ee0b0d160329a68885f2c7',
        sources: 'https://ucarecdn.com/a98d715e-63c2-473c-a529-a67b1a01eeb7/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'BG de Montelimar',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 608,
  },

  {
    id: 3,
    firstname: 'Thomas',
    lastname: 'Aldataiz',
    pseudo: 'PHP BOY',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Symfony',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image: 'https://symfony.com/images/opengraph/symfony.png',
        sources: '',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'PHP BOY',
            role: 'beatmaker',
          },
        ],
      },
      {
        id: 2,
        name: 'PhP is a shit',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://kinsta.com/fr/wp-content/uploads/sites/4/2019/05/qu-est-ce-que-php.png',
        sources: '',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'PHP BOY',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 1,
  },

  {
    id: 4,
    firstname: 'Pierre',
    lastname: 'Paillard',
    pseudo: 'Dresseur de Singe',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Angular',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://www.lucas-uzan.fr/wp-content/uploads/2019/12/angular.png',
        sources: 'https://ucarecdn.com/a4f9b89d-9966-4eb3-8c6c-3a3c51779306',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Dresseur de Singe',
            role: 'beatmaker',
          },
        ],
      },
      {
        id: 2,
        name: 'Pole Emploi',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://yt3.ggpht.com/ytc/AKedOLSINDCTBP5dCvg2v1wmh2c2jtwmmUnOTISjY3-njQ=s900-c-k-c0x00ffffff-no-rj',
        sources: 'https://ucarecdn.com/3fc09d87-2e12-448d-9765-d308f9e460ad',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Dresseur de Singe',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 169,
  },

  {
    id: 5,
    firstname: 'Antoine',
    lastname: 'Daniel',
    pseudo: 'Fan de Hareng',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Dazot',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://pbs.twimg.com/profile_images/622137160213340160/lhzBmyNC_400x400.jpg',
        sources: 'https://ucarecdn.com/3fc09d87-2e12-448d-9765-d308f9e460ad',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'DAZOT',
            role: 'beatmaker',
          },
        ],
      },
      {
        id: 2,
        name: 'What the cut',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://pbs.twimg.com/profile_images/622137160213340160/lhzBmyNC_400x400.jpg',
        sources: 'https://ucarecdn.com/a4f9b89d-9966-4eb3-8c6c-3a3c51779306',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'DAZOT',
            role: 'beatmaker',
          },
        ],
      },
    ],
    followers: 1000,
  },
  {
    id: 101,
    firstname: 'Yannis',
    lastname: 'Barba',
    pseudo: 'The Genius',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Les Licornes',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://france3-regions.francetvinfo.fr/image/R5YYV1T5VqGrb8XmtjVJfy03tnc/600x400/regions/2021/08/12/61151d28c322f_maxbestof150033-5423225.jpg',
        sources: 'https://ucarecdn.com/c7d16080-2127-4bb4-af87-a501f3e9a46f/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'The Genius',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'Mariage de Nain',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://france3-regions.francetvinfo.fr/image/R5YYV1T5VqGrb8XmtjVJfy03tnc/600x400/regions/2021/08/12/61151d28c322f_maxbestof150033-5423225.jpg',
        sources: 'https://ucarecdn.com/c7d16080-2127-4bb4-af87-a501f3e9a46f/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'The Genius',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 650,
  },

  {
    id: 102,
    firstname: 'William',
    lastname: 'Louis-Lousy',
    pseudo: 'BLB',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'PLGM',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://www.filsantejeunes.com/wp-content/uploads/2005/05/dangers-nuit.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'BLB',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'La nuit',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://www.filsantejeunes.com/wp-content/uploads/2005/05/dangers-nuit.jpg',
        sources: 'https://ucarecdn.com/c7d16080-2127-4bb4-af87-a501f3e9a46f/',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'BLB',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 835,
  },

  {
    id: 103,
    firstname: 'Pierre',
    lastname: 'Genthon',
    pseudo: 'Drunk boy',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Chouffe',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image: 'https://auxparaiges.fr/wp-content/uploads/2020/11/Chouffe.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Drunk boy',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'Maredsou',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://tourisme-maredsous.be/wp-content/uploads/2017/07/biere_dabbaye_groot_logo-1.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Drunk boy',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 935,
  },

  {
    id: 104,
    firstname: 'Franky',
    lastname: 'Vincent',
    pseudo: 'Playboy',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Fruit de la passion',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://e.snmc.io/i/1200/s/7d22e83f88e475538424b2e2b839b0d8/1758704',
        sources: 'https://ucarecdn.com/0cd50c3f-f735-453f-8ed6-bf5210e6986d',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Playboy',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'Mon zizi',
        duration: '3min27s',
        genres: ['trap', 'drill'],
        image:
          'https://e.snmc.io/i/1200/s/7d22e83f88e475538424b2e2b839b0d8/1758704',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'Playboy',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 935,
  },

  {
    id: 105,
    firstname: 'Slim',
    lastname: 'Shady',
    pseudo: 'EMINEM',
    avatar: '/',
    prods: [
      {
        id: 1,
        name: 'Fruit de la passion',
        duration: '3min24s',
        genres: ['trap', 'drill'],
        image:
          'https://static.fnac-static.com/multimedia/Images/FR/NR/94/28/14/1321108/1540-1/tsp20131204170026/The-Eminem-Show.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'EMINEM',
            role: 'singer',
          },
        ],
      },
      {
        id: 2,
        name: 'Mon zizi',
        duration: '3min55s',
        genres: ['trap', 'drill'],
        image:
          'https://static.fnac-static.com/multimedia/Images/FR/NR/94/28/14/1321108/1540-1/tsp20131204170026/The-Eminem-Show.jpg',
        sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 400),
        authors: [
          {
            id: 1,
            pseudo: 'EMINEM',
            role: 'singer',
          },
        ],
      },
    ],
    followers: 935,
  },
];

let songs = [
  {
    id: 1,
    name: 'La Came Isole',
    duration: '3min26s',
    genres: ['trap', 'drill'],
    image:
      'https://i.pinimg.com/236x/77/93/3e/77933e4888fd4441fb5ecfb38cae3f68--lp-cover-cover-art.jpg',
    sources: 'https://ucarecdn.com/0cd50c3f-f735-453f-8ed6-bf5210e6986d',
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
    name: 'Vue du dessus',
    duration: '3min20s',
    genres: ['trap', 'drill'],
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04lpHD6IsrQuTFtESaOeZxbV52B3mG9PLrQ&usqp=CAU',
    sources: 'https://ucarecdn.com/b493febc-60d7-4386-9189-1deeebe4e4cc',
    views: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 400),
    authors: [
      {
        id: 104,
        pseudo: 'Playboy',
        role: 'singer',
      },
      {
        id: 5,
        pseudo: 'Fan de Hareng',
        role: 'beatmaker',
      },
    ],
  },

  {
    id: 3,
    name: 'Wild Song',
    duration: '3min20s',
    genres: ['trap', 'drill'],
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/37618e100194625.5f03b7eec6e1c.png',
    sources: 'https://ucarecdn.com/79c3453a-54cf-4fbc-9315-496f87e83f76',
    views: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 400),
    authors: [
      {
        id: 103,
        pseudo: 'Drunk boy',
        role: 'singer',
      },
      {
        id: 3,
        pseudo: 'PHP BOY',
        role: 'beatmaker',
      },
    ],
  },

  {
    id: 4,
    name: 'Les lits corps neux',
    duration: '3min20s',
    genres: ['trap', 'drill'],
    image:
      'https://i.pinimg.com/736x/1a/2c/20/1a2c200cab0d8b1859532533b8752588--classic-album-covers-music-album-covers.jpg',
    sources: 'https://ucarecdn.com/dd2685c6-b805-440e-b7fb-f3873befd82f',
    views: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 400),
    authors: [
      {
        id: 102,
        pseudo: 'BLB',
        role: 'singer',
      },
      {
        id: 2,
        pseudo: 'BG de Montelimar',
        role: 'beatmaker',
      },
    ],
  },

  {
    id: 5,
    name: 'Les lits corps neux',
    duration: '3min20s',
    genres: ['trap', 'drill'],
    image:
      'https://i.pinimg.com/736x/1a/2c/20/1a2c200cab0d8b1859532533b8752588--classic-album-covers-music-album-covers.jpg',
    sources: 'https://ucarecdn.com/c7d16080-2127-4bb4-af87-a501f3e9a46f/',
    views: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 400),
    authors: [
      {
        id: 102,
        pseudo: 'BLB',
        role: 'singer',
      },
      {
        id: 2,
        pseudo: 'BG de Montelimar',
        role: 'beatmaker',
      },
    ],
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
