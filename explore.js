

const linechartData = {
   
    worldPop: createLineChart(
        ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        [
            { label: 'India', data:  [1117415123, 1136264583, 1154638713, 1172373788, 1189691809, 1206734806, 1223640160, 1240613620, 1257621191, 1274487215, 1291132063, 1307246509, 1322866505, 1338636340, 1354195680, 1369003306, 1383112050, 1396387127, 1407563842, 1417173173, 1428627663] },
            { label: 'China', data:  [1288873367, 1296816711, 1304887562, 1313086567, 1321513224, 1330167148, 1339125595, 1348191368, 1357195481, 1366560818, 1376100308, 1385189668, 1393715448, 1401889681, 1410275957, 1417069468, 1421864031, 1429929781, 1435893465, 1441887337, 1445671352] },
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

  indInf2022 : createLineChart(
    /*y axis*/ [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    /*x axis*/ [
        { label: 'CPI', data: [6.01, 6.07, 6.95, 7.79, 7.04, 7.01, 6.71, 7.00, 7.41, 6.77, 5.88, 5.72], }
    ]
),


  indUnemploymentYear: createLineChart(
    [
        '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'
    ],
    [
        { label: 'Unemployment Rate', data: [5.56, 5.58, 5.53, 5.64, 5.63, 5.61, 5.60, 5.57, 5.41, 5.54, 5.55, 5.43, 5.41, 5.42, 5.44, 5.44, 5.42, 5.36, 5.33, 5.27, 8.00, 5.98] }
    ]
),

indGDPYearly: createLineChart(
    [
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
    ],
    [
        { label: 'GDP (Billion)', data: [1675.62, 1823.05, 1827.64, 1856.72, 2039.13, 2103.59, 2294.80, 2651.47, 2702.93, 2835.61, 2671.60, 3150.31, 3385.09, 3737.00] }
    ]
),

indFTYearly: createLineChart(
    [
        1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
    ],
    [
        { label: 'Export', data: [36.3, 43.1, 42.5, 44.5, 48.3, 57.24, 69.18, 76.23, 112.0, 176.4, 168.2, 201.1, 299.4, 298.4, 313.2, 318.2, 310.3, 262.3, 275.8, 303.52, 330.07, 314.31, 420, 676.53, 770.18] },
        { label: 'Import', data: [50.2, 60.8, 54.5, 53.8, 61.6, 74.15, 89.33, 113.1, 100.9, 305.5, 274.3, 327.0, 461.4, 500.4, 467.5, 462.9, 447.9, 381, 384.3, 465.58, 514.07, 467.19, 612, 760.06, 892.18] }
    ]
),

muskNetWorth: createLineChart(
    ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    [
        { label: 'Elon Musk', data: [8.4, 12.0, 10.7, 13.9, 19.9, 22.3, 24.6, 151.0, 219.0, 180.0] }
    ]
),

ambaniNetWorth: createLineChart(
    ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    [
        { label: 'Mukesh Ambani', data: [18.6, 21, 19.3, 23.2, 40.1, 50, 36.8, 85, 91, 83] }
    ]
),

appleValueGrowth: createLineChart(
    ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    [
        { label: 'Market Cap', data: [0.00771, 0.00516, 0.00788, 0.02605, 0.06079, 0.07298, 0.17403, 0.07599, 0.19098, 0.29709, 0.37751, 0.49969, 0.50074, 0.64312, 0.58361, 0.60896, 0.86088, 0.74607, 1.287, 2.255, 2.901, 2.066, 3.072] }
    ]
),

googleValueGrowth:createLineChart(
    ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    [
        { label: 'Market Cap', data: [0.3595, 0.52816, 0.53906, 0.72945, 0.72355, 0.92113, 1.185, 1.917, 1.145, 1.666] }
    ]
),

fbValueGrowth: createLineChart(
    ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    [
        { label: 'Market Cap', data: [0.06314, 0.13919, 0.21673, 0.29660, 0.33159, 0.51275, 0.37413, 0.58537, 0.77803, 0.93564, 0.54544] }
    ]
),

microsoftValueGrowth: createLineChart(
    ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    [
        { label: 'Market Cap', data: [0.35805, 0.27663, 0.29529, 0.29071, 0.27154, 0.29194, 0.33211, 0.17292, 0.26855, 0.23452, 0.21838, 0.22366, 0.31050, 0.38172, 0.43967, 0.48316, 0.65990, 0.78036, 1.200, 1.681, 2.522, 1.787, 2.755] },
        
   
    ]
),

appleRevGrowth: createLineChart(
    [
        '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'
    ],
    [
        { label: 'Apple Revenue Figures', data: [5.73, 5.83, 6.74, 9.76, 16.19, 20.68, 26.49, 33.03, 42.05, 76.28, 127.84, 164.68, 173.99, 199.80, 234.98, 218.11, 239.17, 261.61, 267.68, 294.13, 378.32, 387.53, 383.28] }
    ]
),

IndInnovationRank: createLineChart(
    [
        '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'
    ],
    [
        { label: 'GII Ranks (India)', data: [66,60,57,52,48,46,40,40] }
    ]
),

AIApplications: createLineChart(
    [
        '2016', '2017', '2018', '2019', '2020'
    ],
    [
        { label: 'HealthCare', data: [20,30,65,220,400] },
        { label: 'Manufacturing', data: [25,35,45,175,280] },
        { label: 'Law', data: [23,33,80,125,290] },
        { label: 'Finance', data: [15,25,35,60,175] }
    ]
),
   
globalLifeExpectancy:createLineChart(
    /* y axis */ [
        "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2023"
    ],
    /* x axis */ [
        { label: 'Life Expectancy', data: [
            45.51, 50.09, 56.49, 60.99, 65.91, 66.20, 69.31, 72.98, 73.16
        ]}
    ]
),

IndLifeExpectancy: createLineChart(
    /* y axis */ [
        "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2023"
    ],
    /* x axis */ [
        { label: 'Life Expectancy', data: [
            35.21, 41.13, 47.41, 53.47, 57.66, 62.28, 66.43, 69.96, 70.42
        ]}
    ]
),

IndBirthRates:createLineChart(
    /* y axis */ [
        "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2023"
    ],
    /* x axis */ [
        { label: 'Birth Rate', data: [
            44.175, 42.066, 39.231, 36.216, 31.817, 26.635, 21.508, 17.592, 16.949
        ]}
    ]
),

globalBirthRates: createLineChart(
    /* y axis */ [
        "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2023"
    ],
    /* x axis */ [
        { label: 'Birth Rate', data: [
            37.844, 35.346, 32.995, 28.192, 21.733, 19.075, 18.682, 17.873, 17.464
        ]}
    ]
),

globalDeathRates: createLineChart(
    /* y axis */ [
        "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2023"
    ],
    /* x axis */ [
        { label: 'Death Rate', data: [
            20.150, 18.076, 12.898, 10.469, 9.329, 8.647, 8.290, 7.612, 7.711
        ]}
    ]
),

IndDeathRates: createLineChart(
    /* y axis */ [
        "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2023"
    ],
    /* x axis */ [
        { label: 'Death Rate', data: [
            28.161, 24.703, 17.454, 13.498, 11.007, 8.804, 8.375, 7.309, 7.416
        ]}
    ]
),

IndHealthSpending: createLineChart(
    /* y axis */ [
        "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009",
        "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", 
    ],
    /* x axis */ [
        { label: 'Per Capita (US $)', data: [
            18, 20, 20, 22, 25, 27, 29, 36, 38, 38, 45, 48, 49, 56, 57, 60, 57, 58, 61, 57
        ]},]
),

IndMMRate: createLineChart(
    /* y axis */ [
        "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009",
        "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
    ],
    /* x axis */ [
        { label: 'Per 100K Live Births', data: [
            384, 371, 329, 315, 301, 286, 248, 234, 221, 207, 179, 170, 162, 154, 135, 128, 121, 119, 116, 116, 103
        ]}
    ]
),

IndPovertyRate: createLineChart(
    /*y axis*/ [
        1977, 1983, 1987, 1993, 2004, 2009, 2011, 2015, 2016, 2017, 2018, 2019
    ],
    /*x axis*/ [
        { label: '% Under US $5.50 Per Day', data: [97.70, 97.30, 96.60, 96.60, 94.40, 92.90, 89.90, 88.90, 88.70, 85.30, 82.60, 83.80] }
    ]
)
,

IndHungerRate:createLineChart(
    /*y axis*/ [
        2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
    ],
    /*x axis*/ [
        { label: '% of Population', data: [18.40, 20.10, 21.50, 22.10, 21.60, 22.10, 19.60, 17.50, 16.60, 16.30, 15.90, 15.40, 14.90, 14.80, 14.50, 13.90, 13.20, 13.30, 14.60, 16.30] }
    ]
),

IndElectricityAccess: createLineChart(
    /*y axis*/ [
        1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
    ],
    /*x axis*/ [
        { label: '% of Population', data: [50.90, 49.81, 51.41, 53.00, 54.59, 56.18, 60.10, 60.29, 62.01, 62.30, 65.41, 64.40, 68.84, 67.90, 72.34, 74.12, 75.00, 76.30, 79.52, 79.90, 83.13, 85.13, 88.00, 89.59, 91.79, 95.70, 95.89, 96.50, 99.57] }
    ]
),

IndCrimeRates:createLineChart(
    /*x axis*/ [
        1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
    ],
    /*y axis*/ [
        {
            label: '% of Population',
            data: [5.07, 5.46, 5.47, 5.18, 5.02, 4.81, 4.77, 4.73, 4.83, 4.59, 4.55, 4.30, 4.16, 3.97, 4.09, 3.91, 3.84, 3.81, 3.81, 3.74, 3.74, 3.79, 3.73, 3.55, 3.62, 3.35, 3.16, 3.03, 2.99, 2.93, 2.91, 2.94]
        }
    ]
)
 


























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
},

indStateUnemployment: {
    labels: [
        'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
        'Jammu & Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Meghalaya', 'Odisha',
        'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
        'Uttarakhand', 'West Bengal'
    ],
    datasets: [
        { label: 'Unemployment Rate (%)', data: [7.7, 4.7, 19.1, 3.4, 20.8, 9.9, 2.3, 37.4, 7.6, 14.8, 18.0, 2.5, 7.4, 3.2, 3.1, 2.7, 0.9, 4.7, 6.8, 28.5, 13.6, 4.1, 4.1, 14.3, 4.3, 4.2, 5.5] }
    ]
},

worldDebts: {
    labels: [
        'United States', 'United Kingdom', 'Japan', 'Netherlands', 'France', 'Ireland', 'Italy', 'Germany', 'Canada',
        'China', 'Switzerland', 'Australia', 'Hong Kong', 'Spain', 'Brazil', 'Sweden', 'Mexico', 'Singapore', 'Norway',
        'South Korea'
    ],
    datasets: [
        { label: 'External Debt (in billions)', data: [32.9, 8.7, 4.34, 3.79, 3.28, 3.26, 3.1, 2.81, 2.65, 2.45, 2.3, 1.9, 1.82, 1.67, 1.49, 1.03, 0.88, 0.815, 0.738, 0.665] }
    ]
},

polglobal: {
    labels: [
        'Chad', 'Iraq', 'Pakistan', 'Bahrain', 'Bangladesh', 'Burkina Faso', 'Kuwait', 'India', 'Egypt', 'Tajikistan', 'United Arab Emirates', 'Sudan', 'Rwanda', 'Qatar', 'Saudi Arabia', 'Nepal', 'Uganda', 'Nigeria', 'Bosnia and Herzegovina', 'Uzbekistan'
    ],
    datasets: [
        { label: 'µg/m³', data: [89.7, 80.1, 70.9, 66.6, 65.8, 63, 55.8, 53.3, 46.5, 46, 45.9, 44.6, 44, 42.5, 41.5, 40.1, 39.6, 36.9, 33.6, 33.5] }
    ]
},

polindcity: {
    labels: [
        'Delhi', 'Faridabad', 'Begusarai', 'Bahadurgarh', 'Bhiwadi', 'Bikaner', 'Noida', 'Dholpur', 'Hanumangarh', 'Greater Noida'
    ],
    datasets: [
        { label: 'Index Value', data: [398, 393, 389, 388, 366, 363, 358, 356, 353, 352] }
    ]
},

T10CompaniesMarketCap: {
    labels: ['Apple', 'Microsoft', 'Saudi Aramco', 'Alphabet (Google)', 'Amazon', 'Nvidia', 'Meta Platforms', 'Berkshire Hathaway', 'Tesla', 'Eli Lilly'],
    datasets: [
        { label: 'Market Cap', data: [2974000000000, 2783000000000, 2145000000000, 1658000000000, 1519000000000, 1156000000000, 834760000000, 777300000000, 759220000000, 554430000000] }
    ]
},

richestPplGlobal: {
    labels: [
        'Elon Musk', 
        'Bernard Arnault & family', 
        'Jeff Bezos', 
        'Larry Ellison', 
        'Warren Buffett', 
        'Bill Gates', 
        'Mark Zuckerberg', 
        'Larry Page', 
        'Steve Ballmer', 
        'Sergey Brin'
    ],
    datasets: [
        {
            label: 'Net Worth (in $ Billions)',
            data: [245.1, 196.9, 168.2, 145.3, 119.5, 117.2, 115.3, 112.3, 111.0, 107.8],
        }
    ]
},

AIStudies: {
    labels: [
        '2016', 
        '2017', 
        '2018', 
        '2019', 
        '2020', 
    ],
    datasets: [
        {
            label: 'Peer Reviewed Researches on AI',
            data: [1100,1500,1800,5000,8500],
        }
    ]
},

GlobalCOVID19: {
    labels: [
        'USA','China','India','France','Germany','Brazil', 'Korea', 'Japan','Italy','UK'
    ],
    datasets: [
        {
            label: 'COVID-19 Cases',
            data: [103437000,99321000,45003000,38997500,38437760, 37519960, 34571800,33803500,26387000,24812580],
        }
    ]
},

CWC23BestWinPercent: {
    labels: [
        'India','Australia','South Africa','New Zealand','Pakistan','Afghanistan', 'England', 'Netherlands','Bangladesh','Sri Lanka'
    ],
    datasets: [
        {
            label: 'Win % in CWC 2023',
            data: [90.909,81.818,70,50,44.444,44.444,33.333, 22.222,22.222,22.222],
        }
    ]
},

IndStateCOVID19: {
    "labels": [
        "Maharashtra", "Delhi", "Tamil Nadu", "Gujarat", "Uttar Pradesh", "Rajasthan", "West Bengal", "Madhya Pradesh", "Haryana", "Karnataka", "Andhra Pradesh", "Telangana", "Bihar", "Jammu and Kashmir", "Assam", "Odisha", "Punjab", "Kerala", "Uttarakhand", "Chhattisgarh", "Jharkhand", "Tripura", "Manipur", "Ladakh", "Goa", "Himachal Pradesh", "Chandigarh", "Puducherry", "Nagaland", "Mizoram", "Arunachal Pradesh", "Dadra", "Sikkim", "Andaman Islands", "Meghalaya", "Lakshadweep"
    ],
    "datasets": [
        {
            "label": "Confirmed Cases",
            "data": [132075, 59746, 59377, 27317, 17731, 14930, 13945, 11903, 10635, 9150, 8929, 7802, 7665, 5956, 5586, 5160, 4074, 3173, 2344, 2255, 2089, 1224, 841, 837, 818, 673, 406, 366, 280, 142, 139, 98, 78, 48, 43, 0]
        }
    ]
},

CWC23BestRuns: {
    labels: [
        'VIRAT KOHLI', 'Rohit Sharma', 'Quinton de Kock', 'Rachin Ravindra', 'Daryl Mitchell', 'David Warner',
        'Shreyas Iyer', 'KL Rahul', 'Rassie van der Dussen', 'Mitch Marsh', 'Aiden Markram', 'Dawid Malan',
        'Glenn Maxwell', 'Mohammad Rizwan', 'Ibrahim Zadran', 'Heinrich Klaasen', 'Sadeera Samarawickrama',
        'Devon Conway', 'Marnus Labuschagne', 'David Miller', 'Azmat Omarzai', 'Shubman Gill', 'Abdullah Shafique',
        'Pathum Nissanka', 'Travis Head'
    ],
    datasets: [
        {
            label: 'Runs Scored',
            data: [765, 597, 594, 578, 552, 535, 530, 452, 448, 441, 406, 404, 400, 395, 376, 373, 373, 372, 362, 356, 353, 350, 336, 332, 329],
        }
    ]
},

CWC23MostSixes: {
    labels: [
        'ROHIT SHARMA', 'Shreyas Iyer', 'David Warner', 'Glenn Maxwell', 'Daryl Mitchell', 'Quinton de Kock',
        'Mitch Marsh', 'David Miller', 'Heinrich Klaasen', 'Fakhar Zaman', 'Rachin Ravindra', 'Kusal Mendis',
        'Glenn Phillips', 'Mahmudullah Riyad', 'Travis Head', 'Azmat Omarzai', 'Shubman Gill', 'Ben Stokes',
        'Charith Asalanka', 'Teja Nidamanuru', 'Virat Kohli', 'KL Rahul', 'Abdullah Shafique', 'Dawid Malan',
        'Rahmanullah Gurbaz'
    ],
    datasets: [
        {
            label: 'Number of Sixes',
            data: [31, 24, 24, 22, 22, 21, 21, 20, 19, 18, 17, 15, 14, 14, 13, 13, 12, 11, 11, 10, 9, 9, 9, 9, 9, 9],
        }
    ]
},

CWC23MostFours: {
    labels: [
      'VIRAT KOHLI', 'Rohit Sharma', 'Quinton de Kock', 'Rachin Ravindra', 'Devon Conway',
      'Dawid Malan', 'David Warner', 'Daryl Mitchell', 'Aiden Markram', 'Pathum Nissanka',
      'Mitch Marsh', 'Glenn Maxwell', 'Shubman Gill', 'Ibrahim Zadran', 'Rassie van der Dussen',
      'KL Rahul', 'Mohammad Rizwan', 'Shreyas Iyer', 'Travis Head', 'Abdullah Shafique',
      'Sadeera Samarawickrama', 'Babar Azam', 'Litton Das', 'Marnus Labuschagne', 'Rahmanullah Gurbaz'
    ],
    datasets: [
      {
        label: 'Number of Fours',
        data: [68, 66, 57, 55, 54, 50, 50, 48, 44, 44, 43, 40, 40, 39, 39, 38, 38, 37, 37, 36, 36, 32, 32, 31, 31, 31],
      },
    ],
  },

  MovieGross: {
    labels: [
      "Avatar",
      "Avengers: Endgame",
      "Avatar: The Way of Water",
      "Titanic",
      "Star Wars: Episode VII - The Force Awakens",
      "Avengers: Infinity War",
      "Spider-Man: No Way Home",
      "Jurassic World",
      "The Lion King",
      "The Avengers",
      "Furious 7",
      "Top Gun: Maverick",
      "Frozen II",
      "Barbie",
      "Avengers: Age of Ultron",
      "Frozen",
      "The Super Mario Bros. Movie",
      "Harry Potter and the Deathly Hallows: Part 2",
      "Black Panther",
      "Star Wars: Episode VIII - The Last Jedi"
    ],
    "datasets": [
      {
        label: "Lifetime Gross",
        data: [
            2923706026,
            2799439100,
            2320250281,
            2264743305,
            2071310218,
            2052415039,
            1921847111,
            1671537444,
            1663075401,
            1520538536,
            1515341399,
            1495696292,
            1453683476,
            1441816150,
            1405018048,
            1397042530,
            1361427971,
            1356841356,
            1349926083,
            1334407706
        ]
      }
    ]
  },

  DirectorGross:{
    labels: [
      "Steven Spielberg",
      "James Cameron",
      "Russo brothers",
      "Peter Jackson",
      "Michael Bay",
      "David Yates",
      "Christopher Nolan",
      "J. J. Abrams",
      "Ridley Scott",
      "Tim Burton"
    ],
    datasets: [
      {
        label: "Worldwide Box Office",
        data: [
          10695971957,
          8704007200,
          6834426702,
          6537860134,
          6495846196,
          6346200051,
          5994588871,
          4648965502,
          4498966499,
          4420589767
        ]
      }
    ]
  },

  ActorGross: {
    labels: [
      "Scarlett Johansson",
      "Robert Downey Jr.",
      "Samuel L. Jackson",
      "Zoe Saldaña",
      "Chris Pratt",
      "Vin Diesel",
      "Chris Hemsworth",
      "Tom Cruise",
      "Chris Evans",
      "Bradley Cooper"
    ],
    datasets: [
      {
        label: "Worldwide Total",
        data: [
          14973199748,
          14863065910,
          14376505937,
          14240098353,
          13930412487,
          12094641073,
          11959862470,
          11777319499,
          11277890989,
          11275037103
        ]
      }
    ]
  }
  
  
  














}




    const pieChartData = {
        religionIndiaChart: {
            labels: ['Hinduism', 'Islam', 'Christian', 'Sikh', 'Others'],
            data: [79.8, 14.2, 2.3, 1.7, 2]
        },


        continentGDP: {
            labels: ['Asia', 'North America', 'Europe', 'South America', 'Africa', 'Oceania'],
            data: [38435, 31603, 25440, 4100, 2858, 1979]
        },

        C02Continent:{
            labels: ['Asia', 'North America', 'Europe', 'South America', 'Africa', 'Oceania', 'Other'],
            data: [42.8, 15.7, 6.6, 1.3, 1.2, 1.1, 21.7]
        },

        sectorpolglobal: {
            labels: ['Electricity and Heat Production', 'Industry', 'Agriculture, Forestry, and Other Land Use', 'Transportation', 'Buildings', 'Other Energy'],
            data: [23, 24, 22, 15, 6, 10]
        },

        muskCompanies: {
            labels: ['Tesla', 'SpaceX', 'X (formerly Twitter)', 'The Boring Company', 'Neuralink'],
            data: [770.2, 150, 15, 5.7, 5]
        }
        


        

        
        

        



        
    };
   


   
    function getChartIDs(data) {
        return Object.keys(data);
    }
    

    const chartIDs = {
        linechart: getChartIDs(linechartData),
        barchart: getChartIDs(barChartData),
        piechart: getChartIDs(pieChartData)
    };  
   
 


    chartIDs.linechart.forEach(initialID => {
        createLineChart(initialID, linechartData[initialID].labels, linechartData[initialID].datasets);
    });
    

    chartIDs.barchart.forEach(initialID => {
        createBarChart(initialID, barChartData[initialID].labels, barChartData[initialID].datasets);
    });
    

    chartIDs.piechart.forEach(initialID => {
        createPieChart(initialID, pieChartData[initialID].labels, pieChartData[initialID].data);
    });
