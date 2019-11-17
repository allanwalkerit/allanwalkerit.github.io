var config = {
    style: 'mapbox://styles/allanwalker/ck33fmbn12psu1coa0utek90s',
    accessToken: 'pk.eyJ1IjoiYWxsYW53YWxrZXIiLCJhIjoiY2phbHVlOHQ4MnZscDMycGJoaTdiaHRxOCJ9.OYLAoMVg6e3Ih4r65WJuvA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Kenya - Trends in Crop Production: A Spatial-Temporal Analysis of Production at Sub-National Level',
    subtitle: 'While production at national level show a general increasing trend with fluctuations in particular years, available data from the Ministry of Agriculture show that the main producing areas are in the western and central regions of the country. Some of the major producing areas have recorded declining rainfall trend which may have had negative impacts on production.',
    byline: 'Proof of Concept by Mapbox Solutions, Datablick & Starschema for World Food Programme',
    footer: 'Source: © ICPAC/WFP 2018',
    chapters: [
        {
            id: 'KenyaMaizeProduction2011',
            title: 'Dry Maize Production in Kenya',
            image: 'https://public.tableau.com/views/KenyaMaizeProduction2011-2014/KenyaMaizeProduction2011.png?:showVizHome=no',
            description: '2011',
            location: {
                center: [37.908000, 0.130000],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
onChapterEnter: [
  {
      layer: 'kenya-maize-production-2011',
      opacity: 1
  }
],
onChapterExit: [
  {
      layer: 'kenya-maize-production-2011',
      opacity: 0
  }
]
        },
        {
            id: 'KenyaMaizeProduction2012',
            title: 'Dry Maize Production in Kenya',
            image: 'https://public.tableau.com/views/KenyaMaizeProduction2011-2014/KenyaMaizeProduction2012.png?:showVizHome=no',
            description: '2012',
            location: {
                center: [37.908000, 0.130000],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
  {
      layer: 'kenya-maize-production-2012',
      opacity: 1
  }
],
onChapterExit: [
  {
      layer: 'kenya-maize-production-2012',
      opacity: 0
  }
]
        },
         {
            id: 'KenyaMaizeProduction2013',
            title: 'Dry Maize Production in Kenya',
            image: 'https://public.tableau.com/views/KenyaMaizeProduction2011-2014/KenyaMaizeProduction2013.png?:showVizHome=no',
            description: '2013',
            location: {
                center: [37.908000, 0.130000],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
onChapterEnter: [
  {
      layer: 'kenya-maize-production-2013',
      opacity: 1
  }
],
onChapterExit: [
  {
      layer: 'kenya-maize-production-2013',
      opacity: 0
  }
]
        },
         {
            id: 'KenyaMaizeProduction2014',
            title: 'Dry Maize Production in Kenya',
            image: 'https://public.tableau.com/views/KenyaMaizeProduction2011-2014/KenyaMaizeProduction2014.png?:showVizHome=no',
            description: '2014',
            location: {
                center: [37.908000, 0.130000],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
onChapterEnter: [
  {
      layer: 'kenya-maize-production-2014',
      opacity: 1
  }
],
onChapterExit: [
  {
      layer: 'kenya-maize-production-2014',
      opacity: 0
  }
]
        }
    ]
};
