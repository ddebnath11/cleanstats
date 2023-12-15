

const linechartData = {
   
    worldPop: createLineChart(
        ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        [
            { label: 'India', data:  [1117415123, 1136264583, 1154638713, 1172373788, 1189691809, 1206734806, 1223640160, 1240613620, 1257621191, 1274487215, 1291132063, 1307246509, 1322866505, 1338636340, 1354195680, 1369003306, 1383112050, 1396387127, 1407563842, 1417173173, 1428627663] },
            { label: 'China', data:  [1288873367, 1296816711, 1348887562, 1313086567, 1321513224, 1330167148, 1339125595, 1348191368, 1357195481, 1366560818, 1376100308, 1385189668, 1393715448, 1401889681, 1410275957, 1417069468, 1421864031, 1429929781, 1425893465, 1425887337, 1425671352] },
            { label: 'USA', data:  [291109820, 293947885, 296842670, 299753098, 302743399, 305694910, 308512035, 311182845, 313876608, 316651321, 319375166, 322033964, 324607776, 327210198, 329791231, 332140037, 334319671, 335942003, 336997624, 338289857, 339996563] },
            { label: 'Indonesia', data:  [223080121, 225938595, 228805144, 231797427, 234858289, 237936543, 240981299, 244016173, 247099697, 250222695, 253275918, 256229761, 259091970, 261850182, 264498852, 267066843, 269582878, 271857970, 273753191, 275501339, 277534122] }
        ]
    ),

    smlastmonth: createLineChart(
        /*y axis*/ [
            '2023-11-11', '2023-11-12', '2023-11-13', '2023-11-14', '2023-11-15',
            '2023-11-16', '2023-11-17', '2023-11-18', '2023-11-19', '2023-11-20',
            '2023-11-21', '2023-11-22', '2023-11-23', '2023-11-24', '2023-11-25',
            '2023-11-26', '2023-11-27', '2023-11-28', '2023-11-29', '2023-11-30',
            '2023-12-01', '2023-12-02', '2023-12-03', '2023-12-04', '2023-12-05',
            '2023-12-06', '2023-12-07'
        ],
        /*x axis*/[
            { label: 'Instagram', data:  [66, 70, 64, 62, 63, 60, 62, 66, 63, 60, 59, 60, 60, 60, 64, 64, 61, 60, 60, 59, 57, 67, 64, 59, 59, 60, 62], },
            { label: 'TikTok', data: [28, 27, 25, 24, 24, 25, 25, 29, 27, 24, 24, 25, 26, 25, 27, 26, 24, 24, 24, 24, 26, 27, 27, 23, 24, 25, 24], },
            { label: 'Facebook', data: [98, 96, 94, 91, 93, 93, 98, 96, 95, 93, 92, 95, 89, 100, 90, 93, 83, 87, 91, 93, 92, 96, 96, 90, 94, 97, 89],},
            { label: 'Twitter', data:  [32, 31, 29, 29, 28, 29, 29, 32, 32, 29, 28, 29, 28, 28, 30, 30, 28, 28, 29, 29, 29, 32, 32, 28, 28, 26, 28], }
        ]
    ),

    popGrowthChart: createLineChart(
/*y axis*/ [
'1953', '1963', '1973', '1983', '1993',
'2003', '2013', '2023'
],
/*x axis*/[
{ label: 'World Population', data:  [2640278797, 3195779247, 3920251504, 4691884238, 5577433523, 6393898365, 7250593370, 8045311447], },

]
),

worldGDPChart: createLineChart(
['2018', '2019', '2020', '2021', '2022'],
[
{ label: 'USA', data: [20533057312000, 21380976119000, 21060473613000, 23315080560000, 25462700000000] },
{ label: 'China', data: [13894907485399, 14279968485748, 14687743556970, 17820459342451, 17963170521080] },
{ label: 'Japan', data: [5040888093925, 5117993853017, 5048789595589, 5005536736792, 4231141201863] },
{ label: 'Germany', data: [3974443355020, 3888226035921, 3889668895300, 4259934911822, 4072191736090] },
{ label: 'India', data: [2702929639862, 2835606242052, 2671595389576, 3150306834280, 3385089881935] },
{ label: 'UK', data: [2878152147316, 2857057847953, 2704609160088, 3122480345925, 3070667732359] },
{ label: 'France', data: [2790956878747, 2728870246706, 2639008701648, 2957879759264, 2782905325625] },
{ label: 'Russia', data: [1657328764646, 1693114993990, 1493075887460, 1836892075548, 2240422438363] },
{ label: 'Canada', data: [1725297938436, 1743725183673, 1647598402303, 2001486745424, 2139840023674] },
{ label: 'Italy', data: [2091932426267, 2011302198827, 1897210466668, 2114355756914, 2010431598465] }
]
),

indStatePopChart: createLineChart(
    ['1951', '1961', '1971', '1981', '1991', '2001', '2011'],
    [
      { label: 'Uttar Pradesh', data: [60274800, 70144160, 83849775, 105113300, 132062800, 166053600, 199581477] },
      { label: 'Maharashtra', data: [32002500, 39554900, 50412240, 62782820, 78937190, 96752500, 112372972] },
      { label: 'Bihar', data: [29085900, 34841490, 42126800, 52303000, 64531200, 82879910, 103804630] },
      { label: 'West Bengal', data: [26300670, 34926000, 44312017, 54580650, 68077970, 80221300, 91347736] },
      { label: 'Madhya Pradesh', data: [18615700, 23218950, 30017180, 38169500, 48566800, 60385090, 72597565] },
      { label: 'Tamil Nadu', data: [30119680, 33687100, 41199170, 48408080, 55859300, 62111390, 72138958] },
      { label: 'Rajasthan', data: [15971130, 20156540, 25765810, 34361860, 44005990, 56473300, 68621012] },
      { label: 'Karnataka', data: [19402500, 23587910, 29299015, 37135710, 44977200, 52734986, 61130704] },
      { label: 'Gujarat', data: [16263700, 20633305, 26697488, 34085800, 41309580, 50597200, 60383628] },
      { label: 'Andhra Pradesh', data: [31115000, 35983480, 43502710, 53551030, 66508170, 75728400, 49386799] }
    ]
  ),


}





const barChartData = {
        

        literacyratesInd : {
            labels: [
                'Kerala', 'Delhi', 'Uttarakhand', 'Himachal Pradesh', 'Assam',
                'Maharashtra', 'Punjab', 'Tamil Nadu', 'Gujarat', 'West Bengal'
            ],
            datasets: [
                { label: 'Literacy Rates', data: [96.2, 88.7, 87.6, 86.6, 85.9, 84.8, 83.7, 82.9, 82.4, 80.5] }
            ]


    },

    populationDensity : {
        labels: [
            'Bihar', 'West Bengal', 'Kerala', 'UP', 'Haryana',
            'Punjab', 'Tamil Nadu', 'Jharkhand', 'Assam', 'Maharashtra'
        ],
        datasets: [
            { label: 'Population Density', data: [1102, 1029, 859, 828, 573, 550, 555, 414, 397, 365] },
        ]
        


},
indstateGDP: {
    labels: [
        'Maharashtra', 'Tamil Nadu', 'Gujarat', 'Karnataka', 'Uttar Pradesh',
        'West Bengal', 'Rajasthan', 'Andhra Pradesh', 'Telangana', 'Madhya Pradesh'
    ],
    datasets: [
        { label: 'State GDP  (Rs Lakh Crore)', data: [38.79, 28.3, 25.62, 25, 24.39, 17.19, 15.7, 14.49, 14, 13.87] },
    ]
}


}

    const pieChartData = {
        religionIndiaChart: {
            labels: ['Hinduism', 'Islam', 'Christian', 'Sikh', 'Others'],
            data: [79.8, 14.2, 2.3, 1.7, 2]
        },

        sampleIndiaChart: {
            labels: ['Hinduism', 'Islam', 'Christian', 'Sikh', 'Others'],
            data: [79.8, 14.2, 2.3, 1.7, 2]
        },



        
    };
    createLineChart('worldPop', linechartData.worldPop.labels, linechartData.worldPop.datasets);
    createLineChart('smlastmonth', linechartData.smlastmonth.labels, linechartData.smlastmonth.datasets);


   
   
   
    createBarChart('literacyratesInd', barChartData.literacyratesInd.labels, barChartData.literacyratesInd.datasets);
    createBarChart('populationDensity', barChartData.populationDensity.labels, barChartData.populationDensity.datasets);
    createBarChart('indstateGDP', barChartData.indstateGDP.labels, barChartData.indstateGDP.datasets);
   
   
   
   
    createPieChart('religionIndiaChart', pieChartData.religionIndiaChart.labels, pieChartData.religionIndiaChart.data);
    createPieChart('sampleIndiaChart', pieChartData.sampleIndiaChart.labels, pieChartData.sampleIndiaChart.data);
