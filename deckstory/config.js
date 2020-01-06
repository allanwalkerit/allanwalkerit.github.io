var config = {
    style: 'mapbox://styles/allanwalker/ck3ug7o9m0br71cmpt4a9pb7w?fresh=true',
    accessToken: 'pk.eyJ1IjoiYWxsYW53YWxrZXIiLCJhIjoiY2phbHVlOHQ4MnZscDMycGJoaTdiaHRxOCJ9.OYLAoMVg6e3Ih4r65WJuvA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Statue of Liberty National Monument',
    subtitle: 'Ellis Island and Liberty Island',
    byline: '',
    footer: 'Sources: NJGIN, NYC Open Data, NOAA, NPS (DMCA), Wikipedia (CC-BY-SA) | (GFDL), OpenStreetMap (© OpenStreetMap contributors), Sketchup - 3D Warehouse by Trimble, Inc ',
    chapters: [
        {
            id: 'Libery Intro',
            title: 'Liberty Island', 
            image: '',
            description: "<div id='tableauViz1' class='tableauPlaceholder'></div><br><b>Rotate &#x293F;</b><br><i>Nota Bene - this can take upto 20 seconds due to the number of vertices</i><br><input id='slidera' class='tableauSlider' type='range' min='1' max='63' step='1' value='1' /><br>Liberty Island is a federally owned island in Upper New York Bay in the United States. Its most notable feature is the Statue of Liberty (Liberty Enlightening the World), a large statue by Frédéric Auguste Bartholdi that was dedicated in 1886. The island is an exclave of the New York City borough of Manhattan, surrounded by the waters of Jersey City, New Jersey.<br><br>Long known as Bedloe's Island, it was renamed by an act of the United States Congress in 1956. Liberty Island became part of the Statue of Liberty National Monument in 1937 through Presidential Proclamation 2250, signed by President Franklin D. Roosevelt. In 1966, it was listed on the National Register of Historic Places as part of Statue of Liberty National Monument, Ellis Island and Liberty Island.<br><br><center><b><i>3D Model by Sketchup contributor 'Damo'<br>LIDAR and orthoimagery courtesy NOAA</i></b></center>",
            location: {
                center: [-74.04507, 40.68983],
                zoom: 17,
                pitch: 0.50,
                bearing: 38.40
            },
            onChapterEnter: [
     {
      layer: 'Firefly_NJ2LI_2',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 0
  },
  {
      layer: 'NJ2LI',
      opacity: 0
  },
  {
      layer: 'NY2LI',
      opacity: 0
  },
  {
      layer: 'ccnm',
      opacity: 0
  },
  {
      layer: 'ginm',
      opacity: 0
  },
  {
      layer: 'parks',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'SOLoutlines',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'EMBoutlines',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'CCoutlines',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'NJoutlines',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 1
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 1
  },
  {
      layer: 'outlines',
      opacity: 1
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 0
  },
  {
      layer: 'LibertyStatePark',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 0
  },
  {
      layer: 'TheBattery',
      opacity: 0
  },
  {
      layer: 'water_outline',
      opacity: 0
  },
  {
      layer: 'water',
      opacity: 0
  },
  {
      layer: 'road',
      opacity: 0
  },
  {
      layer: 'NJ',
      opacity: 0
  },
  {
      layer: 'NYC',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
        {
            id: 'Ellis Intro',
            title: 'Eliis Island',
            image: '',
            description: "<div id='tableauViz2' class='tableauPlaceholder'></div><b>Rotate &#x293E;</b><br><i>Nota Bene - this can take upto 60 seconds due to the number of vertices</i><br><input id='sliderb' class='tableauSlider' type='range' min='1' max='63' step='1' value='1' /><br>Ellis Island is a federally owned island in New York Harbor, within the states of New York and New Jersey, that contains a museum and former immigration inspection station of the same name. As the nation's busiest immigrant inspection station from 1892 to 1954, it processed approximately 12 million immigrants to the United States through the Port of New York and New Jersey. Today, the island is part of the Statue of Liberty National Monument, a U.S. national monument. The north side of the island hosts a museum of immigration, accessible only by ferry. The south side of the island, including the Ellis Island Immigrant Hospital, is abandoned but accessible to the public through guided tours.<br><br>In the 19th century, Ellis Island was the site of Fort Gibson, a component of the fortifications of New York Harbor. It later became a naval magazine for storing artillery. The first inspection station opened in 1892 and was destroyed by fire in 1897. The second station opened in 1900 and housed facilities for medical quarantines as well as processing immigrants. After 1924, Ellis Island was used primarily as a detention center; during both World War I and World War II its facilities were also used by the United States military. Following the immigration station's closure, the buildings languished for several years until they partially reopened in 1976. The main building and adjacent structures were completely renovated in 1990.<br><br><center><b><i>3D Model by Sketchup contributor 'Matthew Magill'<br>LIDAR and orthoimagery courtesy NOAA</i></b></center>",
            location: {
            center: [-74.04072, 40.69868],
            zoom: 16.89,
            pitch: 3.00,
            bearing: -44.80
            },
            onChapterEnter: [
     {
      layer: 'Firefly_NJ2LI_2',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 0
  },
  {
      layer: 'NJ2LI',
      opacity: 0
  },
  {
      layer: 'NY2LI',
      opacity: 0
  },
  {
      layer: 'ccnm',
      opacity: 0
  },
  {
      layer: 'ginm',
      opacity: 0
  },
  {
      layer: 'parks',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'SOLoutlines',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'EMBoutlines',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'CCoutlines',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'NJoutlines',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 1
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 1
  },
  {
      layer: 'outlines',
      opacity: 1
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 0
  },
  {
      layer: 'LibertyStatePark',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 0
  },
  {
      layer: 'TheBattery',
      opacity: 0
  },
  {
      layer: 'water_outline',
      opacity: 0
  },
  {
      layer: 'water',
      opacity: 0
  },
  {
      layer: 'road',
      opacity: 0
  },
  {
      layer: 'NJ',
      opacity: 0
  },
  {
      layer: 'NYC',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
        {
            id: 'System Map',
            title: 'Planning your visit to the Statue of Liberty and Ellis Island',
            image: 'https://www.nps.gov/stli/planyourvisit/images/Ferry-Map-2015j.jpg',
            description: "Ferries from Battery Park, New York follow the black line. All ferries travel first to Liberty Island and then to Ellis Island before returning to Battery Park, New York.<br><br>Ferries from Liberty State Park, New Jersey follow the blue line. All ferries travel first to Ellis Island and then to Liberty Island before returning to Liberty State Park, New Jersey.<br><br><center><b><i>System Map image and text courtesy NPS</i></b></center>",
            location: {
            center: [-74.03330, 40.69695],
            zoom: 13.94,
            pitch: 0.50,
            bearing: 0.00
            },
            onChapterEnter: [
      {
      layer: 'Firefly_NJ2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 1
  },
  {
      layer: 'NJ2LI',
      opacity: 1
  },
  {
      layer: 'NY2LI',
      opacity: 1
  },
  {
      layer: 'ccnm',
      opacity: 1
  },
  {
      layer: 'ginm',
      opacity: 1
  },
  {
      layer: 'parks',
      opacity: 1
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'SOLoutlines',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'EMBoutlines',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'CCoutlines',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'NJoutlines',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'outlines',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 0
  },
  {
      layer: 'LibertyStatePark',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 0
  },
  {
      layer: 'TheBattery',
      opacity: 0
  },
  {
      layer: 'water_outline',
      opacity: 1
  },
  {
      layer: 'water',
      opacity: 1
  },
  {
      layer: 'road',
      opacity: 1
  },
  {
      layer: 'NJ',
      opacity: 1
  },
  {
      layer: 'NYC',
      opacity: 1
  }

            ],
            onChapterExit: []
        },
        {
            id: 'The Battery',
            title: 'The Battery',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Battery_Park.JPG/1200px-Battery_Park.JPG',
            description: "The Battery (formerly known as Battery Park) is a 25-acre (10 ha) public park located at the southern tip of Manhattan Island in New York City facing New York Harbor. It is bounded by Battery Place on the north, State Street on the east, New York Harbor to the south, and the Hudson River to the west. The park contains attractions such as an old fort named Castle Clinton; multiple monuments; and the SeaGlass Carousel. <br><br>The surrounding area, known as South Ferry, contains multiple ferry terminals, including the Staten Island Ferry's Whitehall Terminal as well as boat launches to the Statue of Liberty National Monument.<br><br><center><b><i>3D Model of Pier A by Sketchup contributor 'jmdewey60'<br>LIDAR and orthoimagery courtesy NOAA<br>Image courtesy Wikipedia user 'Gryffindor' CC BY-SA 3.0</i></b></center>",
            location: {
            center: [-74.01525, 40.70308],
            zoom: 17.00,
            pitch: 0.00,
            bearing: 54.44
            },
            onChapterEnter: [
      {
      layer: 'Firefly_NJ2LI_2',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 1
  },
  {
      layer: 'NJ2LI',
      opacity: 0
  },
  {
      layer: 'NY2LI',
      opacity: 1
  },
  {
      layer: 'ccnm',
      opacity: 0
  },
  {
      layer: 'ginm',
      opacity: 0
  },
  {
      layer: 'parks',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'SOLoutlines',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'EMBoutlines',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'CCoutlines',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'NJoutlines',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'outlines',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 0
  },
  {
      layer: 'LibertyStatePark',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 1
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 1
  },
  {
      layer: 'TheBattery',
      opacity: 1
  },
  {
      layer: 'water_outline',
      opacity: 1
  },
  {
      layer: 'water',
      opacity: 1
  },
  {
      layer: 'road',
      opacity: 0
  },
  {
      layer: 'NJ',
      opacity: 0
  },
  {
      layer: 'NYC',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
        {
            id: 'Castle Clinton',
            title: 'Castle Clinton National Monument',
            image: 'https://www.nps.gov/common/uploads/grid_builder/cacl/crop16_9/AFF5989A-1DD8-B71B-0B427FCF399C7233.JPG',
            description: "Castle Clinton or Fort Clinton, previously known as Castle Garden, is a circular sandstone fort now located in Battery Park, in Manhattan, New York City. Built from 1808 to 1811, it was the first U.S. immigration station (predating Ellis Island), where more than 8 million people arrived in the United States from 1855 to 1890. Over its active life, it has also functioned as a beer garden, exhibition hall, theater, and public aquarium. Castle Clinton National Monument was listed on the National Register of Historic Places on October 15, 1966.<br><br>Castle Clinton National Monument currently serves as a departure point for ferry to Statue of Liberty National Monument and Ellis Island.<br><br><center><b><i>3D Model of Miss Liberty by Sketchup contributor 'jmdewey60'<br>LIDAR and orthoimagery courtesy NOAA<br>Image courtesy NPS</i></b></center>",
            location: {
            center: [-74.01781, 40.70349],
            zoom: 18.26,
            pitch: 40.00,
            bearing: 89.44
            },
            onChapterEnter: [
      {
      layer: 'Firefly_NJ2LI_2',
      opacity: 0
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 1
  },
  {
      layer: 'NJ2LI',
      opacity: 0
  },
  {
      layer: 'NY2LI',
      opacity: 1
  },
  {
      layer: 'ccnm',
      opacity: 0
  },
  {
      layer: 'ginm',
      opacity: 0
  },
  {
      layer: 'parks',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'SOLoutlines',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'EMBoutlines',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 1
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 1
  },
  {
      layer: 'CCoutlines',
      opacity: 1
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'NJoutlines',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'outlines',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 0
  },
  {
      layer: 'LibertyStatePark',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 0
  },
  {
      layer: 'TheBattery',
      opacity: 0
  },
  {
      layer: 'water_outline',
      opacity: 1
  },
  {
      layer: 'water',
      opacity: 1
  },
  {
      layer: 'road',
      opacity: 0
  },
  {
      layer: 'NJ',
      opacity: 0
  },
  {
      layer: 'NYC',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
                {
            id: 'Liberty State Park',
            title: 'Liberty State Park',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Central_Railroad_of_New_Jersey_Terminal_-_22_Sept._2012.jpg/1200px-Central_Railroad_of_New_Jersey_Terminal_-_22_Sept._2012.jpg',
            description: "Liberty State Park is a park in the U.S. state of New Jersey, located on Upper New York Bay in Jersey City, opposite both Liberty Island and Ellis Island. The park opened in 1976 to coincide with bicentennial celebrations and is operated and maintained by the New Jersey Division of Parks and Forestry. Liberty State Park covers 1,212 acres (490 ha). The main part of the park is bordered by water on three sides: on the north by the Morris Canal Big Basin and on the south and east by Upper New York Bay. The New Jersey Turnpike Newark Bay Extension (I-78) marks its western perimeter.<br><br>Most of the park's area is on landfill created by the Central Railroad of New Jersey (CRRNJ) and the Lehigh Valley Railroad, defunct companies whose lines once terminated there. In the northeast corner of the park is the CRRNJ Terminal, a historic transportation building.<br><br><center><b><i>Image courtesy Wikipedia user 'Benjamin Kraft' CC BY-SA 2.0</i></b></center>",
            location: {
            center: [-74.05094, 40.70264],
            zoom: 14.00,
            pitch: 3.50,
            bearing: 0.00
            },
            onChapterEnter: [
       {
      layer: 'Firefly_NJ2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 0
  },
  {
      layer: 'NJ2LI',
      opacity: 1
  },
  {
      layer: 'NY2LI',
      opacity: 0
  },
  {
      layer: 'ccnm',
      opacity: 0
  },
  {
      layer: 'ginm',
      opacity: 0
  },
  {
      layer: 'parks',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'SOLoutlines',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'EMBoutlines',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'CCoutlines',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'NJoutlines',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'outlines',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 1
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 1
  },
  {
      layer: 'LibertyStatePark',
      opacity: 1
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 0
  },
  {
      layer: 'TheBattery',
      opacity: 0
  },
  {
      layer: 'water_outline',
      opacity: 0
  },
  {
      layer: 'water',
      opacity: 0
  },
  {
      layer: 'road',
      opacity: 0
  },
  {
      layer: 'NJ',
      opacity: 0
  },
  {
      layer: 'NYC',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
        {
            id: 'Central Railroad of New Jersey Terminal',
            title: 'Central Railroad of New Jersey Terminal',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Central_Railroad_of_New_Jersey_Terminal_02A_%289434700879%29.jpg/1200px-Central_Railroad_of_New_Jersey_Terminal_02A_%289434700879%29.jpg',
            description: "The Central Railroad of New Jersey Terminal, also known as Communipaw Terminal and Jersey City Terminal, was the Central Railroad of New Jersey's waterfront passenger terminal in Jersey City, New Jersey. It was also serviced by CNJ-operated Reading Railroad trains, the Baltimore and Ohio Railroad, and the Lehigh Valley Railroad during various periods in its 78 years of operation.<br><br>The terminal was built in 1889, replacing an earlier one that had been in use since 1864. The terminal was one of five passenger railroad terminals that lined the Hudson Waterfront during the 19th and 20th centuries, the others being Weehawken, Hoboken, Pavonia and Exchange Place, with Hoboken being the only station that is still in use. It operated until April 30, 1967.<br><br>The headhouse was renovated and incorporated into Liberty State Park. The station has been listed on the New Jersey Register of Historic Places and National Register of Historic Places since September 12, 1975. Additionally it is a New Jersey State Historic Site.<br><br>Statue Cruises offers ferries to Statue of Liberty National Monument, Ellis Island and Liberty Island that depart nearby.<br><br><center><b><i>3D Model by Sketchup contributor 'peterX'<br>Image courtesy Wikipedia user 'Joe Mabel' CC-BY-SA 4.0</i></b></center>",
            location: {
            center: [-74.03518, 40.70745],
            zoom: 17.42,
            pitch: 60.00,
            bearing: -126.40
            },
            onChapterEnter: [
       {
      layer: 'Firefly_NJ2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 0
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 0
  },
  {
      layer: 'NJ2LI',
      opacity: 1
  },
  {
      layer: 'NY2LI',
      opacity: 0
  },
  {
      layer: 'ccnm',
      opacity: 0
  },
  {
      layer: 'ginm',
      opacity: 0
  },
  {
      layer: 'parks',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'SOLoutlines',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'EMBoutlines',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'CCoutlines',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 1
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 1
  },
  {
      layer: 'NJoutlines',
      opacity: 1
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'outlines',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 0
  },
  {
      layer: 'LibertyStatePark',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 0
  },
  {
      layer: 'TheBattery',
      opacity: 0
  },
  {
      layer: 'water_outline',
      opacity: 0
  },
  {
      layer: 'water',
      opacity: 0
  },
  {
      layer: 'road',
      opacity: 0
  },
  {
      layer: 'NJ',
      opacity: 0
  },
  {
      layer: 'NYC',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
                {
            id: 'Islands',
            title: 'Recent History of Liberty and Ellis Islands',
            image: '',
            description: "<div id='tableauViz3' class='tableauPlaceholder'></div><center><i>Recreational Visitors 1979 - 2018</i></center><br><b>Year Advance &#x2945;</b><input id='sliderc' class='tableauSlider' type='range' min='22' max='40' step='1' value='22' /><br><b>2001</b><br>April 2001 - The American Family Immigration History Center opens.<br><br>September 11th - The first Statue of Liberty ferry was preparing to depart for the day just as the World Trade Center came under attack. The ferry was turned back and no visitors reached Liberty Island.<br><br>December 1st - Liberty Island reopens to the public but the inside of the monument remains closed.<br><br><b>2004</b><br>August 3rd - The inside of the pedestal reopens to the public.<br><br><b>2007</b><br>Ferry Building on Ellis Island reopened after being restored at the cost of $6.4 million.<br><br><b>2009</b><br>July 4th - The Statue's crown reopens to the public for the first time since September 2001.<br><br><b>2011</b><br>October 28th - The Statue of Liberty National Monument celebrates 125 years of 'Liberty Enlightening the World.'<br><br>October 29 - The interior of the Statue of Liberty's pedestal closes for a year long renovation.<br><br><b>2012</b><br>October 28 - The inside of the Statue of Liberty reopens after a year long renovation.<br><br>October 29 - Flooding from Hurricane Sandy covers 75% of Liberty Island. Major infrastructure is damaged. Liberty Island closes until repairs can be made.<br><br><b>2013</b><br>July 4 - The Statue and Liberty Island reopen to the public while repairs continue to Liberty Island.<br><br><center><b><i>Data and chronological timelines courtesy NPS</i></b></center>",
            location: {
            center: [-74.04540, 40.69240],
            zoom: 16.15,
            pitch: 60.00,
            bearing: 32.00
            },
            onChapterEnter: [
       {
      layer: 'Firefly_NJ2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 1
  },
  {
      layer: 'NJ2LI',
      opacity: 1
  },
  {
      layer: 'NY2LI',
      opacity: 1
  },
  {
      layer: 'ccnm',
      opacity: 0
  },
  {
      layer: 'ginm',
      opacity: 0
  },
  {
      layer: 'parks',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'SOLoutlines',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'EMBoutlines',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'CCoutlines',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'NJoutlines',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 1
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 1
  },
  {
      layer: 'outlines',
      opacity: 1
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 0
  },
  {
      layer: 'LibertyStatePark',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 0
  },
  {
      layer: 'TheBattery',
      opacity: 0
  },
  {
      layer: 'water_outline',
      opacity: 0
  },
  {
      layer: 'water',
      opacity: 0
  },
  {
      layer: 'road',
      opacity: 0
  },
  {
      layer: 'NJ',
      opacity: 0
  },
  {
      layer: 'NYC',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
        {
            id: 'Ellis Island - Main Building',
            title: 'Ellis Island - Main Building',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ellis_island_immigration_museum_entrance.JPG/1200px-Ellis_island_immigration_museum_entrance.JPG',
            description: "The present three-story main structure was designed in French Renaissance style. It is made of steel frame, with a facade of red brick in Flemish bond ornamented with limestone trim. The structure is located 8 feet (2.4 m) above the mean waterline to prevent flooding. The building was initially composed of a three-story center section with two-story east and west wings, though the third stories of each wing were completed in the early 1910s. <br><br>Atop the corners of the building's central section are four towers capped by cupolas of copper cladding. Some 160 rooms were included within the original design to separate the different functions of the building. Namely, the first floor was initially designed to handle baggage, detention, offices, storage and waiting rooms; the second floor, primary inspection; and the third floor, dormitories. However, in practice, these spaces generally served multiple functions throughout the immigration station's operating history.<br><br>At opening, it was estimated that the main building could inspect 5,000 immigrants per day. The main building's design was highly acclaimed; at the 1900 Paris Exposition, it received a gold medal, and other architectural publications such as the Architectural Record lauded the design.<br><br><center><b><i>3D Models by Sketchup contributors 'samothrace41' and 'Matthew Magill'<br>LIDAR and orthoimagery courtesy NOAA<br>Image courtesy Wikipedia user 'chensiyuan' CC BY-SA 4.0</i></b></center>",
            location: {
            center: [-74.03952, 40.69914],
            zoom: 18.38,
            pitch: 60.00,
            bearing: 14.38
            },
            onChapterEnter: [
      {
      layer: 'Firefly_NJ2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 1
  },
  {
      layer: 'NJ2LI',
      opacity: 1
  },
  {
      layer: 'NY2LI',
      opacity: 1
  },
  {
      layer: 'ccnm',
      opacity: 0
  },
  {
      layer: 'ginm',
      opacity: 0
  },
  {
      layer: 'parks',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'SOLoutlines',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 1
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 1
  },
  {
      layer: 'EMBoutlines',
      opacity: 1
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'CCoutlines',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'NJoutlines',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'outlines',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 0
  },
  {
      layer: 'LibertyStatePark',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 0
  },
  {
      layer: 'TheBattery',
      opacity: 0
  },
  {
      layer: 'water_outline',
      opacity: 0
  },
  {
      layer: 'water',
      opacity: 0
  },
  {
      layer: 'road',
      opacity: 0
  },
  {
      layer: 'NJ',
      opacity: 0
  },
  {
      layer: 'NYC',
      opacity: 0
  }
            ],
            onChapterExit: []
        },
        {
            id: 'Liberty',
            title: 'The Statue of Liberty',
            image: '',
            description: "<div id='tableauViz4' class='tableauPlaceholderfixed'></div><b>Rotate &#x293F;</b><br><i>Nota Bene - this can take upto 90 seconds due to the number of vertices</i><br><input id='sliderd' class='tableauSlider' type='range' min='1' max='63' step='1' value='1' /><br>The Statue of Liberty (Liberty Enlightening the World); French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.<br><br>The Statue of Liberty is a figure of Libertas, a robed Roman liberty goddess. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed in Roman numerals with 'JULY IV MDCCLXXVI' (July 4, 1776), the date of the U.S. Declaration of Independence. A broken shackle and chain lie at her feet as she walks forward, commemorating the recent national abolition of slavery. The statue became an icon of freedom and of the United States, and a national park tourism destination. It is a welcoming sight to immigrants arriving from abroad.<br><br><center><b><i>3D Model in STL format by 'Yoshi Tomoimura' of 'Imura Works' under Personal Use licence<br>Converted for Tableau using Alteryx Gallery App by Philipp Riggs</i></b></center>",
            location: {
                center: [-74.044727, 40.689512],
                zoom: 17.66,
                bearing: -32.00,
                pitch: 60
            },
            onChapterEnter: [
 {
      layer: 'Firefly_NJ2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NJ2LI_1',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_2',
      opacity: 1
  },
  {
      layer: 'Firefly_NY2LI_1',
      opacity: 1
  },
  {
      layer: 'NJ2LI',
      opacity: 1
  },
  {
      layer: 'NY2LI',
      opacity: 1
  },
  {
      layer: 'ccnm',
      opacity: 0
  },
  {
      layer: 'ginm',
      opacity: 0
  },
  {
      layer: 'parks',
      opacity: 0
  },
  {
      layer: 'SOLoutlinesFirefly2',
      opacity: 1
  },
  {
      layer: 'SOLoutlinesFirefly1',
      opacity: 1
  },
  {
      layer: 'SOLoutlines',
      opacity: 1
  },
  {
      layer: 'EMBoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'EMBoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'EMBoutlines',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'CCoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'CCoutlines',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'NJoutlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'NJoutlines',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly2',
      opacity: 0
  },
  {
      layer: 'outlinesFirefly1',
      opacity: 0
  },
  {
      layer: 'outlines',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Liberty_1',
      opacity: 0
  },
  {
      layer: 'LibertyStatePark',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_2',
      opacity: 0
  },
  {
      layer: 'Firefly_Battery_1',
      opacity: 0
  },
  {
      layer: 'TheBattery',
      opacity: 0
  },
  {
      layer: 'water_outline',
      opacity: 0
  },
  {
      layer: 'water',
      opacity: 0
  },
  {
      layer: 'road',
      opacity: 0
  },
  {
      layer: 'NJ',
      opacity: 0
  },
  {
      layer: 'NYC',
      opacity: 0
  }
            ],
            onChapterExit: []
        }
    ]
};
