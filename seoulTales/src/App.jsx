import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import ProfileSection from './Components/Profiles/ProfileSection';
import ActorDetail from './Components/ActorDetail/ActorDetail';
import Dramalist1 from './Components/Dramalist/dramalist1';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Footer from './Components/Footer/Footer';

// Imported Actor Photos
import actor1photo from './assets/Profiles/Actor1.jpg';
import actor2photo from './assets/Profiles/Actor2.jpg';
import actor3photo from './assets/Profiles/Actor3.jpg';
import actor4photo from './assets/Profiles/Actor4.jpg';
import actor5photo from './assets/Profiles/Actor5.jpg';
import actor6photo from './assets/Profiles/Actor6.jpg';
import actor7photo from './assets/Profiles/Actor7.jpg';
import actor8photo from './assets/Profiles/Actor8.jpg';
import actor9photo from './assets/Profiles/Actor9.jpg';
import actor10photo from './assets/Profiles/Actor10.jpg';
import actor11photo from './assets/Profiles/Actor11.jpg';
import actor12photo from './assets/Profiles/Actor12.jpg';
import actor13photo from './assets/Profiles/Actor13.jpg';
import actor14photo from './assets/Profiles/Actor14.jpg';
import actor15photo from './assets/Profiles/Actor15.jpg';
import actor16photo from './assets/Profiles/Actor16.jpg';
import actor17photo from './assets/Profiles/Actor17.jpg';
import actor18photo from './assets/Profiles/Actor18.jpg';
import actor19photo from './assets/Profiles/Actor19.jpg';
import actor20photo from './assets/Profiles/Actor20.jpg';


//Imported Drama Photos
import byeonDrama1 from './assets/Profiles/byeon-drama1.jpg';
import byeonDrama2 from './assets/Profiles/byeon-drama2.jpg';
import kimsooDrama1 from './assets/Profiles/kimsoodrama1.jpg';
import kimsooDrama2 from './assets/Profiles/kimsoodrama2.jpg';
import kimSejDrama1 from './assets/Profiles/kimSejdrama1.jpg';
import kimSejDrama2 from './assets/Profiles/kimSejdrama2.jpg';
import GongYoodrama1 from './assets/Profiles/GongYoodrama1.jpg';
import GongYoodrama2 from './assets/Profiles/GongYoodrama2.jpg';
import kimyoodrama1 from './assets/Profiles/kimyoodrama1.jpg';
import kimyoodrama2 from './assets/Profiles/kimyoodrama2.jpg';
import moondrama1 from './assets/Profiles/moondrama1.jpg';
import moondrama2 from './assets/Profiles/moondrama2.jpg';
import seodrama1 from './assets/Profiles/seodrama1.jpg';
import seodrama2 from './assets/Profiles/seodrama2.jpg';
import kimjidrama1 from './assets/Profiles/kimjidrama1.jpg';
import kimjidrama2 from './assets/Profiles/kimjidrama2.jpg';
import songdrama1 from './assets/Profiles/songdrama1.jpg';
import songdrama2 from './assets/Profiles/songdrama2.jpg';
import ahndrama1 from './assets/Profiles/ahndrama1.jpg';
import ahndrama2 from './assets/Profiles/ahndrama2.jpg';
import jidrama1 from './assets/Profiles/jidrama1.jpg';
import jidrama2 from './assets/Profiles/jidrama2.jpg';
import leedrama1 from './assets/Profiles/leedrama1.jpg';
import leedrama2 from './assets/Profiles/leedrama2.jpg';
import yunahdrama1 from './assets/Profiles/yunahdrama1.jpg';
import yunahdrama2 from './assets/Profiles/yunahdrama2.jpg';
import shindrama1 from './assets/Profiles/shindrama1.jpg';
import shindrama2 from './assets/Profiles/shindrama2.jpg';
import yoodrama1 from './assets/Profiles/yoodrama1.jpg';
import yoodrama2 from './assets/Profiles/yoodrama2.jpg';
import rowoondrama2 from './assets/Profiles/rowoondrama2.jpg';
import kangdrama1 from './assets/Profiles/kangdrama1.jpg';
import kangdrama2 from './assets/Profiles/kangdrama2.jpg';
import songkangdrama2 from './assets/Profiles/songkangdrama2.jpg';
import jongdrama2 from './assets/Profiles/jongdrama2.jpg';
import parkdrama1 from './assets/Profiles/parkdrama1.jpg';
import parkdrama2 from './assets/Profiles/parkdrama2.jpg';


const App = () => {
  const [selectedActor, setSelectedActor] = useState(null);

  const handleSelectActor = (actor) => {
    console.log("Selected Actor:", actor);
    setSelectedActor(actor);
  };

  const handleBackToProfiles = () => {
    setSelectedActor(null);
  };

  const actors = [
    {
      name: 'Byeon Woo-seok',
      photo: actor1photo,
      dramas: [{
        name: '20th Century Girl | 2022',
        image: byeonDrama1,
      },
      {
        name: 'Strong Girl Nam-soon | 2023',
        image: byeonDrama2,
      }], 
    },
    {
      name: 'Kim Soo-hyun',
      photo: actor2photo,
      dramas: [{
        name: 'Its Okay to Not Be Okay',
        image: kimsooDrama1,
      },
      {
        name: 'My Love From The Star | 2013',
        image: kimsooDrama2,
      }],
    },
    {
      name: 'Kim Sejeong',
      photo: actor3photo,
      dramas: [{
        name: 'The Uncanny Counter | 2020-2023',
        image: kimSejDrama1,
      },
      {
        name: 'School 2017 | 2017',
        image: kimSejDrama2,
      }],
    },
    {
      name: 'Kim Yoo-jung',
      photo: actor4photo,
      dramas: [
        {
          name: 'Love in the Moonlight | 2016',
          image: kimyoodrama1,
        },
        {
          name: 'My Demon | 2023-2024',
          image: kimyoodrama2,
        }
      ],
    },
    {
      name: 'Moon Ga-young',
      photo: actor5photo,
      dramas: [
        {
          name: 'True Beauty | 2020-2021',
          image: moondrama1,
        },
        {
          name: 'Mirror of the Witch',
          image: moondrama2,
        }
      ],
    },
    {
      name: 'Seo Yea-ji',
      photo: actor6photo,
      dramas: [ 
        {
        name: 'Eve | 2022',
        image: seodrama1,
      },
      {
        name: 'Recalled | 2021',
        image: seodrama2,
      }],
    },
    {
      name: 'Kim Ji-won',
      photo: actor7photo,
      dramas: [
        {
          name: 'Fight for My Way | 2017',
          image: kimjidrama1,
        },
        {
          name: 'Descendants of the Sun | 2016',
          image: kimjidrama2,
        }  
      ],
    },
    {
      name: 'Song Joong-ki',
      photo: actor8photo,
      dramas: [
        {
          name: 'Reborn Rich | 2022',
          image: songdrama1,
        },
        {
          name: 'Vincenzo | 2021',
          image: songdrama2,
        }
      ],
    },
    {
      name: 'Ahn Hyo-seop',
      photo: actor9photo,
      dramas: [
        {
          name: 'Dr. Romantic | 2016-2023',
          image: ahndrama1,
        },
        {
          name: 'A Time Called You | 2023',
          image: ahndrama2,
        }
      ],
    },
    {
      name: 'Ji Chang-wook',
      photo: actor10photo,
      dramas: [
        {
          name: 'Backstreet Rookie | 2020',
          image: jidrama1,
        },
        {
          name: 'The Worst Of Evil',
          image: jidrama2,
        }
      ],
    },
    {
      name: 'Shin Hye-sun',
      photo: actor11photo,
      dramas: [
        {
          name: 'See You in My 19th Life | 2023',
          image: shindrama1,
        },
        {
          name: 'Brave Citizen | 2023',
          image: shindrama2,
        }
      ],
    },
    {
      name: 'Park Bo-young',
      photo: actor12photo,
      dramas: [
        {
          name: 'Strong Girl Bong-soon | 2017',
          image: parkdrama1,
        },
        {
          name: 'Doom at Your Service | 2021',
          image: parkdrama2,
        }
      ],
    },
    {
      name: 'Yoo In-na',
      photo: actor13photo,
      dramas: [
        {
          name: 'Bo-ra! Deborah | 2023',
          image: yoodrama1,
        },
        {
          name: 'The Spy Who Loved Me | 2020',
          image: yoodrama2,
        }
      ],
    },
    {
      name: 'Lee Jong Suk',
      photo: actor14photo,
      dramas: [
        {
          name: 'Big Mouth | 2022',
          image: yunahdrama2,
        },
        {
          name: 'Doctor Stranger | 2014',
          image: jongdrama2,
        }
      ],
    },
    {
      name: 'Song Kang',
      photo: actor15photo,
      dramas: [
        {
          name: 'My Demon | 2023-2024',
          image: kimyoodrama2,
        },
        {
          name: 'Nevertheless | 2021',
          image: songkangdrama2,
        }
      ],
    },
    {
      name: 'Kang Tae-oh',
      photo: actor16photo,
      dramas: [
        {
          name: 'Extraordinary Attorney Woo | 2022',
          image: kangdrama1,
        },
        {
          name: 'Run On | 2020-2021',
          image: kangdrama2,
        }
      ],
    },
    {
      name: 'Rowoon',
      photo: actor17photo,
      dramas: [
        {
          name: 'A Time Called You | 2023',
          image: ahndrama2,
        },
        {
          name: 'Extraordinary You | 2019',
          image: rowoondrama2,
        }
      ],
    },
    {
      name: 'Lee Jun-ho',
      photo: actor18photo,
      dramas: [
        {
          name: 'The Red Sleeve | 2021-2022',
          image: leedrama1,
        },
        {
          name: 'Rain or Shine | 2017-2018',
          image: leedrama2,
        }
      ],
    },
    {
      name: 'Yunah',
      photo: actor19photo,
      dramas: [
        {
          name: 'Big Mouth | 2022',
          image: yunahdrama1,
        },
        {
          name: 'King The Land',
          image: yunahdrama2,
        }
      ],
    },
    {
      name: 'Gong Yoo',
      photo: actor20photo,
      dramas: [
        {
          name: 'Guardian: The Lonely & Great God | 2016-2017',
          image: GongYoodrama1,
        },
        {
          name: 'Train To Busan | 2016',
          image: GongYoodrama2,
        }
      ],
    }
  ];

  return (
    <div>
      <Navbar/>
      <Header/>
      <Slider/>
      <Dramalist1/>
      {!selectedActor ? (
        <ProfileSection actors={actors} onSelectActor={handleSelectActor} />
      ) : (
        <ActorDetail actor={selectedActor} onBack={handleBackToProfiles} />
      )}
      <LoginSignup/>
      <Footer/>
    </div>

  );
}

export default App;


