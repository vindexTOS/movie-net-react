export type movieDataType = {
  title: string
  color: string
  color2: string
  img: string
  video: string
  dec: string
  actors: {
    name: string
    img: string
  }[]
  rating: {
    IMDb: number
    RottenTomatos: number
  }
  quote: string
}

export const filmData: movieDataType[] = [
  {
    quote:
      'Look at that subtle off-white coloring. The tasteful thickness of it. Oh, my God. It even has a watermark',
    title: 'American Psycho',
    color: `#ffffff`,
    color2: `#710f10`,
    img: ` https://e0.pxfuel.com/wallpapers/361/514/desktop-wallpaper-american-psycho-poster-horor-movie-wall-decor-wall-print-american-psycho-home-decor-gift-for-him-gift-for-her-handmade-products-patrick-bateman.jpg`,
    video: `https://www.youtube.com/embed/x19FimfBfOo`,
    dec: `A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.
    
    It's the late 1980s. Twenty-seven year old Wall Streeter Patrick Bateman travels among a closed network of the proverbial beautiful people, that closed network in only they able to allow others like themselves in in a feeling of superiority. Patrick has a routinized morning regimen to maintain his appearance of attractiveness and fitness. He, like those in his network, are vain, narcissistic, egomaniacal and competitive, always having to one up everyone else in that presentation of oneself, but he, unlike the others, realizes that, for himself, all of these are masks to hide what is truly underneath, someone/something inhuman in nature. In other words, he is comprised of a shell resembling a human that contains only greed and disgust, greed in wanting what others may have, and disgust for those who do not meet his expectations and for himself in not being the first or the best. That disgust ends up manifesting itself in wanting to rid the world of those people, he not seeing them as people but only of those characteristics he wants to rid.`,
    actors: [
      {
        name: 'Christian Bale',
        img:
          'https://e0.pxfuel.com/wallpapers/939/2/desktop-wallpaper-view-christian-bale-american-psycho-patrick-bateman.jpg',
      },
      {
        name: `Jared Leto`,
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Jared_Leto%2C_San_Diego_Comic_Con_2016_%282%29_%28cropped%29.jpg/800px-Jared_Leto%2C_San_Diego_Comic_Con_2016_%282%29_%28cropped%29.jpg`,
      },
      {
        name: `Willem Dafoe`,
        img: `https://upload.wikimedia.org/wikipedia/commons/1/14/Willem_Dafoe_Cannes_2019.jpg`,
      },
    ],
    rating: {
      IMDb: 7.6,
      RottenTomatos: 68,
    },
  },
  {
    quote: `You Are the Same Decaying Organic Matter as Everything Else.`,
    title: 'Fight Club',
    color: `#0e2d30`,
    color2: `#ff39b7`,

    img: `https://firebasestorage.googleapis.com/v0/b/pcmarket-8f5e8.appspot.com/o/sigmamovies%2FFIGHT-CLUB-HarryMovieArt_1024x1024.webp?alt=media&token=ae0f87cd-c639-4db4-b104-d4d1da948d39`,
    video: `https://www.youtube.com/embed/jBT4_Cx5ihs`,
    dec: ` An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.
    A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.`,
    actors: [
      {
        name: 'Edward Norton',
        img: 'https://m.media-amazon.com/images/I/61CtO7YkiwL._AC_SX425_.jpg',
      },
      {
        name: `Brad Pitt`,
        img: `https://i.pinimg.com/originals/06/ce/ac/06ceacba8d75c9e37c15c9ab0cb766e7.jpg`,
      },
      {
        name: `Helena Bonham `,
        img: `https://cdn.britannica.com/10/237510-050-0D3B1ECE/British-actress-Helena-Bonham-Carter-2019.jpg`,
      },
    ],
    rating: {
      IMDb: 8.8,
      RottenTomatos: 79,
    },
  },
  {
    quote: `if you want to win the lottery, you have to make the money to buy the ticket`,
    title: 'Nightcrawler',
    color: `#232323`,
    color2: `#ec2b58`,
    img: `https://firebasestorage.googleapis.com/v0/b/pcmarket-8f5e8.appspot.com/o/sigmamovies%2Fmattryan_nightcrawler.jpg?alt=media&token=f7ffb52e-910e-4501-aa3f-3d3d24823c63`,
    video: `https://www.youtube.com/embed/kKaR6AqoYqk`,
    dec: `NIGHTCRAWLER is a thriller set in the nocturnal underbelly of contemporary Los Angeles. Jake Gyllenhaal stars as Lou Bloom, a driven young man desperate for work who discovers the high-speed world of L.A. crime journalism. Finding a group of freelance camera crews who film crashes, fires, murder and other mayhem, Lou muscles into the cut-throat, dangerous realm of nightcrawling - where each police siren wail equals a possible windfall and victims are converted into dollars and cents. Aided by Rene Russo as Nina, a veteran of the blood-sport that is local TV news, Lou blurs the line between observer and participant to become the star of his own story`,
    actors: [
      {
        name: 'Jake Gyllenhaal',
        img:
          'https://images.mubicdn.net/images/cast_member/3071/cache-3195-1568084972/image-w856.jpg?size=800x',
      },
      {
        name: `Rene Russo`,
        img: `https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTGjrlRH7eSeBPR0WqpgATo78sGdALSayVHPr3q8UkuDe_IfNdtRUCEfBrOPYqvD9OUDtKehSV9Vkq6X9k`,
      },
      {
        name: `Riz Ahmed`,
        img: `https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQcO4ab1Tlo9ttiLGdhMNCrzaWtdGYJ2MM_7ERXIDimGKFBK6ZLQ1_cwjSZVucowMUl9aOWUjxHkKrstOQ`,
      },
    ],
    rating: {
      IMDb: 7.8,
      RottenTomatos: 95,
    },
  },
]
