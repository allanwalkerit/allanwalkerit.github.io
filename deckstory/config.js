var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiYWxsYW53YWxrZXIiLCJhIjoiY2phbHVlOHQ4MnZscDMycGJoaTdiaHRxOCJ9.OYLAoMVg6e3Ih4r65WJuvA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Liberty Island',
    subtitle: '',
    byline: '',
    footer: 'Sources: USGS, NAIP & NPS',
    chapters: [
        {
            id: 'One',
            title: 'Display Title',
            image: '',
            description: '',
            location: {
                center: [-74.04507, 40.68983],
                zoom: 17,
                pitch: 0.50,
                bearing: 38.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Two',
            title: 'Second Title',
            image: '',
            description: '',
            location: {
                center: [-74.044727, 40.689512],
                zoom: 17.66,
                bearing: -32.00,
                pitch: 60
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
