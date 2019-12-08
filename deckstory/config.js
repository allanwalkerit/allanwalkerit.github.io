var config = {
    style: 'mapbox://styles/allanwalker/ck3ug7o9m0br71cmpt4a9pb7w?fresh=true',
    accessToken: 'pk.eyJ1IjoiYWxsYW53YWxrZXIiLCJhIjoiY2phbHVlOHQ4MnZscDMycGJoaTdiaHRxOCJ9.OYLAoMVg6e3Ih4r65WJuvA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Statue of Liberty National Monument',
    subtitle: 'Ellis Island and Liberty Island',
    byline: '',
    footer: 'Sources: NOAA, NPS, Wikipedia, OpenStreetMap',
    chapters: [
        {
            id: 'Libery Intro',
            title: '',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Liberty_Island.jpg',
            description: "Liberty Island is a federally owned island in Upper New York Bay in the United States. Its most notable feature is the Statue of Liberty (Liberty Enlightening the World), a large statue by Frédéric Auguste Bartholdi that was dedicated in 1886. The island is an exclave of the New York City borough of Manhattan, surrounded by the waters of Jersey City, New Jersey.<br><br>Long known as Bedloe's Island, it was renamed by an act of the United States Congress in 1956. Liberty Island became part of the Statue of Liberty National Monument in 1937 through Presidential Proclamation 2250, signed by President Franklin D. Roosevelt. In 1966, it was listed on the National Register of Historic Places as part of Statue of Liberty National Monument, Ellis Island and Liberty Island.",
            location: {
                center: [-74.04507, 40.68983],
                zoom: 17,
                pitch: 0.50,
                bearing: 38.40
            },
            onChapterEnter: [
    {
      layer: 'NY2LI',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 0
  },
  {
      layer: 'NJ2LI',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_2',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
        {
            id: 'Ellis Intro',
            title: '',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ellis_Island_Complex.jpg/1200px-Ellis_Island_Complex.jpg',
            description: "Ellis Island is a federally owned island in New York Harbor, within the states of New York and New Jersey, that contains a museum and former immigration inspection station of the same name. As the nation's busiest immigrant inspection station from 1892 to 1954, it processed approximately 12 million immigrants to the United States through the Port of New York and New Jersey. Today, the island is part of the Statue of Liberty National Monument, a U.S. national monument. The north side of the island hosts a museum of immigration, accessible only by ferry. The south side of the island, including the Ellis Island Immigrant Hospital, is abandoned but accessible to the public through guided tours.<br><br>In the 19th century, Ellis Island was the site of Fort Gibson, a component of the fortifications of New York Harbor. It later became a naval magazine for storing artillery. The first inspection station opened in 1892 and was destroyed by fire in 1897. The second station opened in 1900 and housed facilities for medical quarantines as well as processing immigrants. After 1924, Ellis Island was used primarily as a detention center; during both World War I and World War II its facilities were also used by the United States military. Following the immigration station's closure, the buildings languished for several years until they partially reopened in 1976. The main building and adjacent structures were completely renovated in 1990.",
            location: {
            center: [-74.04072, 40.69868],
            zoom: 16.89,
            pitch: 3.00,
            bearing: -44.80
            },
            onChapterEnter: [
    {
      layer: 'NY2LI',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 0
  },
  {
      layer: 'NJ2LI',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_2',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
        {
            id: 'NY',
            title: 'The Battery (Manhattan)',
            image: '',
            description: '',
            location: {
            center: [-74.01735, 40.70319],
            zoom: 16.21,
            pitch: 0.00,
            bearing: 7.20
            },
            onChapterEnter: [
     {
      layer: 'NY2LI',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 1
  },
  {
      layer: 'NJ2LI',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_2',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
                {
            id: 'NJ',
            title: 'Liberty State Park',
            image: '',
            description: '',
            location: {
                center: [-74.03442, 40.70752],
                zoom: 15.43,
                pitch: 1.50,
                bearing: 8.00
            },
            onChapterEnter: [
      {
      layer: 'NY2LI',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 0
  },
  {
      layer: 'NJ2LI',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_2',
      opacity: 1
  }
            ],
            onChapterExit: []
        },
        {
            id: 'Ellis',
            title: 'Ellis Island',
            image: '',
            description: '',
            location: {
                center: [-74.04048, 40.69895],
                zoom: 16.93,
                pitch: 59.50,
                bearing: -76.80
            },
            onChapterEnter: [
     {
      layer: 'NY2LI',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 1
  },
  {
      layer: 'NJ2LI',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_2',
      opacity: 1
  }
            ],
            onChapterExit: []
        },
                {
            id: 'Liberty Dock',
            title: 'Liberty Dock',
            image: '',
            description: '',
            location: {
            center: [-74.04642, 40.69003],
            zoom: 16.94,
            pitch: 60.00,
            bearing: 80.76
            },
            onChapterEnter: [
     {
      layer: 'NY2LI',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 1
  },
  {
      layer: 'NJ2LI',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_2',
      opacity: 1
  }
            ],
            onChapterExit: []
        },
        {
            id: 'Liberty',
            title: 'Liberty Island',
            image: '',
            description: '',
            location: {
                center: [-74.044727, 40.689512],
                zoom: 17.66,
                bearing: -32.00,
                pitch: 60
            },
            onChapterEnter: [
{
      layer: 'NY2LI',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 0
  },
  {
      layer: 'NJ2LI',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_2',
      opacity: 0
  }
            ],
            onChapterExit: []
        }
    ]
};
