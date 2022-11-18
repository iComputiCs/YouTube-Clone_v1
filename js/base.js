const base = [
  {
    id: 0,
    name: "Interstellar _ Into The Black Hole  Gargantua",
    channel: "Apex Clips",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=OA3Txp94pjs",
    subs: 8.91,
    subsPostfix: "K",
    subscribed: false,
    likes: 24,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 1.6,
    viewsPostfix: "M",
    postedTime: 1,
    postedTimePostfix: "years",
    info: "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
    comments: [
      {
        img: "./images/users/pexels-stefan-stefancik-91227.jpg",
        name: "Elizabeth von Hillmann",
        comment:
          "That is magnificently beautiful. People are terrified of black holes and violent Spacetime phenomena. I am obsessed.",
      },
      {
        img: "./images/users/pexels-nappy-936090.jpg",
        name: "Cosmolix",
        comment:
          "Its really cool how they even showed the gravitational red shift when he fall into the black hole.",
      },
    ],
  },
  {
    id: 1,
    name: "Korea International Robot Contest 2014  Rumble",
    channel: "samuel oliveira serqueira",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=RYNq9Oi8gOE",
    subs: 13,
    subsPostfix: "",
    subscribed: false,
    likes: 2,
    likesPostfix: "",
    liked: false,
    disliked: false,
    views: 123,
    viewsPostfix: "",
    postedTime: 6,
    postedTimePostfix: "years",
    info: "Combate de robôs na Coreia.",
    comments: [],
  },
  {
    id: 2,
    name: "Aesthetic Anime Cooking _ ramen with sound effects",
    channel: "눈_눈infires",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=i5T6Fnbq34c",
    subs: 36.7,
    subsPostfix: "K",
    subscribed: false,
    likes: 598,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 12,
    viewsPostfix: "M",
    postedTime: 2,
    postedTimePostfix: "years",
    info: "ORIGINAL ANIME VIDEOS<br>Garden of Words: https://youtu.be/oibTtDQaWMk<br>Flavors of Youth: https://youtu.be/798UB14-DF0",
    comments: [
      {
        img: "./images/users/pexels-vinicius-wiesehofer-1090387.jpg",
        name: "King",
        comment: "What's this anime called?",
      },
      {
        img: "./images/users/pexels-stefan-stefancik-91227.jpg",
        name: "Bikash Samanta",
        comment:
          "I don't know 'bout others but that bitter gourd made ne feel really really sick to the core and yes by really I mean 'REALLYYYYYYY'😖😖😖😖",
      },
    ],
  },
  {
    id: 3,
    name: "Afternoon Class  Animation Short Film 2014",
    channel: "Osro",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=CAYDRIbXFAc",
    subs: 530,
    subsPostfix: "K",
    subscribed: false,
    likes: 1,
    likesPostfix: "M",
    liked: false,
    disliked: false,
    views: 14,
    viewsPostfix: "M",
    postedTime: 5,
    postedTimePostfix: "years",
    info: "This is my graduation film, 'Afternoon Class' The story is inspired by my experience that when I was trying to stop myself from falling asleep in afternoon class.",
    comments: [
      {
        img: "./images/users/pexels-vinicius-wiesehofer-1090387.jpg",
        name: "Goobi",
        comment:
          "That feeling you get where your head feels heavy and everything behind you feels warm and almost nonexistent",
      },
      {
        img: "./images/users/pexels-nappy-936090.jpg",
        name: "UNsundayMario",
        comment:
          "Not only can I relate but the animation as well is amazing overall this short film is just made very well.",
      },
    ],
  },
  {
    id: 4,
    name: "Despicable Me 2  Happy Lyric Video by Pharrell Williams",
    channel: "Illumination",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=XQG89cwhmJU",
    subs: 3.33,
    subsPostfix: "M",
    subscribed: false,
    likes: 17,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 3.7,
    viewsPostfix: "M",
    postedTime: 9,
    postedTimePostfix: "years",
    info: "About Despicable Me 2:<br>Now that Gru has forsaken a life of crime to raise Margo, Agnes and Edith, he's trying to figure out how to provide for his new family. The Anti-Villain League - an organization dedicated to fighting evil – sends Gru on a mission to capture the perpetrator of a spectacular heist, for who would be better than the world's greatest ex-villain to capture the individual who seeks to usurp his power.",
    comments: [],
  },
  {
    id: 5,
    name: "if Apple made window blinds...",
    channel: "Joma Tech",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=Hv6EMd8dlQk",
    subs: 1.98,
    subsPostfix: "M",
    subscribed: false,
    likes: 211,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 4.1,
    viewsPostfix: "M",
    postedTime: 1,
    postedTimePostfix: "years",
    info: "Check out the behind-the-scenes video on my other channel:<br>https://youtu.be/015wj1C5wK0",
    comments: [
      {
        img: "./images/users/pexels-stefan-stefancik-91227.jpg",
        name: "Carlos Henrique Rodrigues Mansur",
        comment: "where do I buy it?",
      },
      {
        img: "./images/users/pexels-nappy-936090.jpg",
        name: "battlecat1995",
        comment:
          "Apple window blinds because you're blind enough to buy are crap  now being sold 999999$ there is no warranty",
      },
    ],
  },
  {
    id: 6,
    name: "FROZEN 2 _  When I Am Older",
    channel: "Disney iFan!",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=l5d67j3CAWE",
    subs: 1.03,
    subsPostfix: "M",
    subscribed: false,
    likes: 19,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 5.2,
    viewsPostfix: "M",
    postedTime: 2,
    postedTimePostfix: "years",
    info: "See Disney’s Frozen 2 in theaters now. Get your tickets here: http://bit.ly/Frozen2Tickets",
    comments: [],
  },
  {
    id: 7,
    name: "Quantum Computers Explained _ Limits of Human Technology",
    channel: "Kurzgesagt - In a Nutshell",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=JhHMJCUmq28",
    subs: 19.6,
    subsPostfix: "M",
    subscribed: false,
    likes: 420,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 17,
    viewsPostfix: "M",
    postedTime: 6,
    postedTimePostfix: "years",
    info: "Where are the limits of human technology? And can we somehow avoid them? This is where quantum computers become very interesting. ",
    comments: [
      {
        img: "./images/users/pexels-stefan-stefancik-91227.jpg",
        name: "ELiEL",
        comment:
          "A vibration creates a portal, and in that portal everything was happening at once except the one truth, it stood out as the structure inside the chaos..",
      },
      {
        img: "./images/users/pexels-nappy-936090.jpg",
        name: "Neithan",
        comment:
          "Explained for who? If I wasn't a computer scientist, I wouldn't have understood the first part about bits and logic gates, transistor size limit... not to mention the quantum part. Terrible, terrible try guys.",
      },
    ],
  },
  {
    id: 8,
    name: "super powers",
    channel: "Ice Cream Sandwich",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=x-I4OanmWQg",
    subs: 2.41,
    subsPostfix: "M",
    subscribed: false,
    likes: 280,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 4.5,
    viewsPostfix: "M",
    postedTime: 9,
    postedTimePostfix: "years",
    info: "spiderman has nothing on these super powers. spiderman can jump. cool. try literally flying.<br>best super power you could ask for. actually there was a shape shifting power that i saw i liked a lot.",
    comments: [
      {
        img: "./images/users/pexels-stefan-stefancik-91227.jpg",
        name: "Textures Not Found",
        comment:
          "i would want to be able to like phase into the ground<br>or be able to go into my own pocket dimentions ",
      },
      {
        img: "./images/users/pexels-nappy-936090.jpg",
        name: "Luke Sorenson",
        comment:
          "Controlling and growing any kind of plant or plant based item at will because why not ",
      },
    ],
  },
  {
    id: 9,
    name: "The Best of WRC Rally _ 2020 _  Crashes Action Maximum Attack",
    channel: "DirtFish",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=qk7pZnxCX2o",
    subs: 200,
    subsPostfix: "K",
    subscribed: false,
    likes: 180,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 22,
    viewsPostfix: "M",
    postedTime: 1,
    postedTimePostfix: "years",
    info: "This is the best of WRC Rally 2020. These are the best crashes, action, and maximum attack moments from the year!",
    comments: [
      {
        img: "./images/users/pexels-nappy-936090.jpg",
        name: "Christian Jimenez",
        comment: "PERROOOOOOO LOCOOOOOOO!!!!!",
      },
      {
        img: "./images/users/pexels-stefan-stefancik-91227.jpg",
        name: "Ikm Hfi",
        comment:
          "F 1 drivers: we need to win the championship Rally drivers: wo just need to stay alive",
      },
    ],
  },
  {
    id: 10,
    name: "The Riemann Hypothesis Explained",
    channel: "Quanta Magazine",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=zlm1aajH6gY",
    subs: 659,
    subsPostfix: "K",
    subscribed: false,
    likes: 121,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 3.7,
    viewsPostfix: "M",
    postedTime: 1,
    postedTimePostfix: "years",
    info: 'The Riemann hypothesis is the most notorious unsolved problem in all of mathematics. Ever since it was first proposed by Bernhard Riemann in 1859, the conjecture has maintained the status of the "Holy Grail" of mathematics. In fact, the person who solves it will win a $1 million prize from the Clay Institute of Mathematics. So, what is the Riemann hypothesis? Why is it so important? What can it tell us about the chaotic universe of prime numbers? And why is its proof so elusive? Alex Kontorovich, professor of mathematics at Rutgers University, breaks it all down in this comprehensive explainer. ',
    comments: [
      {
        img: "./images/users/pexels-vinicius-wiesehofer-1090387.jpg",
        name: "Kevin Batdorf",
        comment: "Did they just solve this today?",
      },
      {
        img: "./images/users/pexels-stefan-stefancik-91227.jpg",
        name: "David E",
        comment:
          "Amazing. Anyone else think the visual mapping of the Zeta zeros across the origin look like fractals?",
      },
    ],
  },
  {
    id: 11,
    name: "The Three Tenors in Concert _ 1994 _ Brindisi Libiamo ne lieti calici from La Traviata",
    channel: "Warner Classics",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=l7eHO_PEWLk",
    subs: 720,
    subsPostfix: "K",
    subscribed: false,
    likes: 298,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 33.1,
    viewsPostfix: "M",
    postedTime: 2,
    postedTimePostfix: "years",
    info: "The Three Tenors sing the famous brindisi from Verdi's La Traviata live in concert before the 1994 World Cup in Los Angeles. Celebrate the 25th anniversary of this glorious occasion with the full performance, now digitally available for the first time: https://w.lnk.to/The3TenorsLY",
    comments: [
      {
        img: "./images/users/pexels-stefan-stefancik-91227.jpg",
        name: "Александр Александров",
        comment: "Блестящее творение!!!!",
      },
      {
        img: "./images/users/pexels-vinicius-wiesehofer-1090387.jpg",
        name: "Diego Alfonso Perez Perea",
        comment:
          "My Goodness... Domingo, Pavarotti and Carreras... Incredible voices... The best in the Opera... ",
      },
    ],
  },
  {
    id: 12,
    name: "Top Gun Maverick  Mavericks _ Test Run",
    channel: "Bigburgy",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=E-rsuhUSu68",
    subs: 2.56,
    subsPostfix: "K",
    subscribed: false,
    likes: 22,
    likesPostfix: "",
    liked: false,
    disliked: false,
    views: 1.7,
    viewsPostfix: "K",
    postedTime: 2,
    postedTimePostfix: "months",
    info: "",
    comments: [],
  },
  {
    id: 13,
    name: "10 Tricks That Break the Scoring Scale",
    channel: "Nitro Circus",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=bjqQEH-o1mE",
    subs: 1.57,
    subsPostfix: "M",
    subscribed: false,
    likes: 26,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 2.6,
    viewsPostfix: "M",
    postedTime: 2,
    postedTimePostfix: "years",
    info: "About us:<br>Nitro Circus is what happens when a group of extremely talented and fearless friends decides to make their hobby into their profession. This crew represents a cross section of everything awesome in action sports: freestyle motocross, BMX, skateboarding, scooter, snowboarding, skiing, BASE jumping, sky diving, and a bunch of stuff that shouldn't be taken down a ramp. Nitro Circus tours the world putting on shows featuring all of the above and more. In our constant quest to always do what we love and push the boundaries of what's possible in action sports, we have some epic crashes and legendary fails, but stick or stack, our only goal is to have fun and entertain the world in the process.",
    comments: [
      {
        img: "./images/users/pexels-nappy-936090.jpg",
        name: "Ryan Barker",
        comment:
          "I wonder if he hit his front break or did something to  Buck his back end getting him to do a Front Flip??",
      },
      {
        img: "./images/users/pexels-stefan-stefancik-91227.jpg",
        name: "Eric Colicchio",
        comment:
          "The special landing ramp that they use now (Thank you Travis) is super sick, that would have possibly killed that scooter guy if it was a typical wood or steel frame",
      },
    ],
  },
  {
    id: 14,
    name: "TRIKE Passo S.Boldo  Sliderking",
    channel: "Mrlotonno7",
    channelImg() {
      return `./images/channels/${this.channel}.jpg`;
    },
    Image() {
      return `./images/video images/${this.name}.jpg`;
    },
    VideoSource() {
      return `./videos/${this.name}.mp4`;
    },
    source: "https://www.youtube.com/watch?v=gz_271z1A2U",
    subs: 15.6,
    subsPostfix: "K",
    subscribed: false,
    likes: 71,
    likesPostfix: "K",
    liked: false,
    disliked: false,
    views: 11,
    viewsPostfix: "M",
    postedTime: 7,
    postedTimePostfix: "years",
    info: "Seconda manche di prove libere",
    comments: [],
  },
];

const YouBase = [
  {
    id: 0,
    name: "You are the one who is very KIND for me",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 1,
    name: "You are the one who is very WISE for me",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 2,
    name: "You are the one who is very BEAUTIFUL for me",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 3,
    name: "You are the one who is very STRONG for me",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 4,
    name: "You are my SISTER",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 5,
    name: "You are my BROTHER",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 6,
    name: "You are my LITTLE SISTER",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 7,
    name: "You are my LITTLE BROTHER",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 8,
    name: "You are my GRANDPA",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 9,
    name: "You are my GRANDMA",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 10,
    name: "You are the one who LOVE DOGS",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 11,
    name: "You are the one who LOVE CATS",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 12,
    name: "You are my TEACHER whose sacrifices don't go unnoticed",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 13,
    name: "You are my TEACHER who truly care about her students",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 14,
    name: "You are ANONYMOUS who does a lot for others",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 15,
    name: "You are the CUTEST one who is very SHY",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 16,
    name: "You are my FAMILIAR person from my PLANET",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 17,
    name: "You are the ALIEN who came from the MOON",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 18,
    name: "You are the one who reminds me of the GROUND",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  },
  {
    id: 19,
    name: "You are the one who reminds me of the SKY",
    Image() {
      return `./images/users/you/${this.name}.jpg`;
    },
  }
];
