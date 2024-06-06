const floors = {
  'B1': {
    image: require('../../image/09_B1층.png'),
    rooms: {
      '090001': { x: 7, y: 60, target: ['09B1S1','09B1S2','09B1S3'],tmp:[0] },
      '090002': { x: 22, y: 53, target: ['09B1S1','09B1S2','09B1S3'] ,tmp:[0] },
      '090003': { x: 27, y: 69, target: ['09B1S1','09B1S2','09B1S3'],tmp:[0]  },
      '090003-1': { x: 43, y: 69, target:  ['09B1S1','09B1S2','09B1S3'],tmp:[1]  },
      '090004': { x: 49, y: 46, target: ['09B1S1','09B1S2','09B1S3'] ,tmp:[1] },
      '090005': { x: 63, y: 46, target:  ['09B1S1','09B1S2','09B1S3'] ,tmp:[2] },
      '090006': { x: 75, y: 46, target: ['09B1S1','09B1S2','09B1S3'] ,tmp:[2] },
      '090007': { x: 82, y: 46, target:  ['09B1S1','09B1S2','09B1S3'] ,tmp:[2] },
      '090008': { x: 90, y: 30, target: ['09B1S1','09B1S2','09B1S3'],tmp:[2]  },
      '090008-A': { x: 82, y: 17, target:  ['09B1S1','09B1S2','09B1S3'],tmp:[2]  },
      '090010': { x: 65, y: 17, target:  ['09B1S1','09B1S2','09B1S3'] ,tmp:[2] },
      '090011': { x: 58, y: 17, target: ['09B1S1','09B1S2','09B1S3'],tmp:[2] },
      '090012': { x: 37, y: 17, target:  ['09B1S1','09B1S2','09B1S3'] ,tmp:[1] },
      '090012-A': { x: 49, y: 17, target:  ['09B1S1','09B1S2','09B1S3'] ,tmp:[2] },
      '09B1S1': { x: 35, y: 45 , target : []},
      '09B1S2': { x: 45, y: 60 , target : []},
      '09B1S3': { x: 78, y: 20 , target : []},


    },
    hallway: [
      { x: 16, y: 60, connections: [1], rooms: ['090001'] },
      { x: 35, y: 60, connections: [0, 2], rooms: ['090003', '090002','09B1S1'] },
      { x: 40, y: 60, connections: [1, 3, 4], rooms: [] },
      { x: 45, y: 60, connections: [2], rooms: ['090003-1', '090004','09B1S2'] },
      { x: 40, y: 30, connections: [2, 5], rooms: ['090012'] },
      { x: 50, y: 30, connections: [4, 6], rooms: ['090012-A'] },
      { x: 59, y: 30, connections: [5, 7], rooms: ['090011', '090005'] },
      { x: 64, y: 30, connections: [6, 8], rooms: ['090010'] },
      { x: 73, y: 30, connections: [7, 9], rooms: ['090006'] },
      { x: 78, y: 30, connections: [8, 10], rooms: ['09B1S3'] },
      { x: 83, y: 30, connections: [9], rooms: ['090007', '090008', '090008-A']},

    ],
  },
  '1F': {
    image: require('../../image/공대1층.png'),
    rooms: {
      '090101': { x: 15, y: 70, target: ['091FS1','091FS2','091FS3'] ,tmp:[0] },
      '090102': { x: 15, y: 53, target: ['091FS1','091FS2','091FS3'] ,tmp:[0] },
      '090103': { x: 25, y: 53, target: ['091FS1','091FS2','091FS3'] ,tmp:[0] },
      '090104': { x: 30, y: 53, target: ['091FS1','091FS2','091FS3'] ,tmp:[1] },
      '090105': { x: 52, y: 53, target: ['091FS1','091FS2','091FS3'] ,tmp:[1] },
      '090106': { x: 24, y: 29, target: ['091FS1','091FS2','091FS3'] ,tmp:[0] },
      '090111': { x: 58, y: 34, target: ['091FS1','091FS2','091FS3'] ,tmp:[1] },
      '090112': { x: 68, y: 34, target: ['091FS1','091FS2','091FS3'] ,tmp:[2] },
      '090113': { x: 72, y: 34, target: ['091FS1','091FS2','091FS3'] ,tmp:[2] },
      '090114': { x: 91, y: 29, target: ['091FS1','091FS2','091FS3'] ,tmp:[2] },
      '090119': { x: 69, y: 10, target: ['091FS1','091FS2','091FS3'] ,tmp:[2] },
      '090120': { x: 61, y: 10, target: ['091FS1','091FS2','091FS3'] ,tmp:[2] },
      '090121': { x: 56, y: 10, target: ['091FS1','091FS2','091FS3'] ,tmp:[2] },
      '090122': { x: 50, y: 10, target: ['091FS1','091FS2','091FS3'] ,tmp:[1] },
      '090124': { x: 45, y: 10, target: ['091FS1','091FS2','091FS3'] ,tmp:[1] },
      '090125': { x: 41, y: 10, target: ['091FS1','091FS2','091FS3'] ,tmp:[0] },

      '091FS1': { x: 17, y: 33, target: [] },
      '091FS2': { x: 37, y: 33, target: [] },
      '091FS3': { x: 81, y: 15, target: [] },
    },
    hallway: [
      { x: 17, y: 41, connections: [1], rooms: ['090101', '091FS1'] },
      { x: 22, y: 41, connections: [0, 2], rooms: ['090102'] },
      { x: 27, y: 41, connections: [1, 3], rooms: ['090103', '090106'] },
      { x: 32, y: 41, connections: [2, 4], rooms: ['090104', '091FS2'] },
      { x: 44, y: 41, connections: [3, 5, 18], rooms: [] },
      { x: 47, y: 41, connections: [4, 7], rooms: [] },
      { x: 47, y: 35, connections: [5, 7], rooms: ['090111', '090105'] },
      { x: 47, y: 23, connections: [6, 8, 9], rooms: ['090124'] },
      { x: 42.5, y: 23, connections: [7], rooms: ['090125'] },
      { x: 52, y: 23, connections: [7, 8, 10], rooms: ['090122'] },
      { x: 57, y: 23, connections: [9, 11], rooms: ['090121'] },
      { x: 61, y: 23, connections: [10, 12], rooms: ['090120'] },
      { x: 68.5, y: 23, connections: [11, 13], rooms: ['090112'] },
      { x: 73, y: 23, connections: [12, 14], rooms: ['090113', '090119'] },
      { x: 81, y: 23, connections: [13, 15, 16], rooms: ['091FS3'] },
      { x: 81, y: 37, connections: [14], rooms: [] },
      { x: 84, y: 17, connections: [14, 17], rooms: [] },
      { x: 96, y: 17, connections: [16], rooms: ['090114'] },
      { x: 44, y: 55, connections: [4], rooms: [] },
    ],

  },
  '2F': {
    image: require('../../image/공대2층.png'),
    rooms: {
      '090201': { x: 14, y: 72, target: ['092FS1','092FS2','092FS3'] ,tmp:[0] },
      '090201-A': { x: 21, y: 72, target:['092FS1','092FS2','092FS3']  ,tmp:[0]},
      '090201-B': { x: 28, y: 72, target: ['092FS1','092FS2','092FS3']  ,tmp:[0]},
      '090202': { x: 8, y: 52, target: ['092FS1','092FS2','092FS3'] ,tmp:[0] },
      '090202-A': { x: 5, y: 72, target: ['092FS1','092FS2','092FS3']  ,tmp:[0]},
      '090203': { x: 25, y: 52, target: ['092FS1','092FS2','092FS3'] ,tmp:[0] },
      '090204': { x: 30, y: 52, target: ['092FS1','092FS2','092FS3']  ,tmp:[1]},
      '090205': { x: 51, y: 52, target: ['092FS1','092FS2','092FS3']  ,tmp:[1]},
      '090206': { x: 23, y: 29, target: ['092FS1','092FS2','092FS3']  ,tmp:[0]},
      '090209': { x: 48, y: 33, target: ['092FS1','092FS2','092FS3']  ,tmp:[1]},
      '090210': { x: 58, y: 33, target: ['092FS1','092FS2','092FS3']  ,tmp:[2]},
      '090211': { x: 70, y: 33, target: ['092FS1','092FS2','092FS3'] ,tmp:[2]},
      '090212': { x: 76, y: 33, target: ['092FS1','092FS2','092FS3'] ,tmp:[2]},
      '090213': { x: 80, y: 33, target: ['092FS1','092FS2','092FS3'] ,tmp:[2]},
      '090214': { x: 88, y: 33, target: ['092FS1','092FS2','092FS3'] ,tmp:[2]},
      '090215': { x: 93, y: 11, target: ['092FS1','092FS2','092FS3'],tmp:[2] },
      '090219': { x: 70, y: 11, target: ['092FS1','092FS2','092FS3'] ,tmp:[2]},
      '090220': { x: 63.5, y: 11, target: ['092FS1','092FS2','092FS3'] ,tmp:[2]},
      '090221': { x: 53, y: 11, target: ['092FS1','092FS2','092FS3'] ,tmp:[2]},
      '090223': { x: 43, y: 11, target: ['092FS1','092FS2','092FS3']  ,tmp:[1]},



      'S092FS1': { x: 17, y: 33, target: [] },
      'S092FS2': { x: 37, y: 33, target: [] },
      'S092FS3': { x: 81, y: 15, target: [] },
    },
    hallway: [
      { x: 9, y: 64, connections: [1], rooms: ['090202-A'] },
      { x: 15, y: 64, connections: [0, 2], rooms: ['090201','090202'] },
      { x: 21, y: 64, connections: [1, 3, 4], rooms: ['090201-A'] },
      { x: 31, y: 64, connections: [2], rooms: ['090201-A'] },
      { x: 21, y: 43, connections: [2, 5, 6], rooms: [] },
      { x: 17, y: 43, connections: [5], rooms: ['S092FS1'] },
      { x: 26, y: 43, connections: [5, 7], rooms: ['090203', '090206'] },
      { x: 31, y: 43, connections: [6, 8], rooms: ['090204'] },
      { x: 37.5, y: 43, connections: [7, 9], rooms: ['S092FS2'] },
      { x: 41, y: 43, connections: [8, 10, 11], rooms: [] },
      { x: 51, y: 43, connections: [9], rooms: ['090205'] },
      { x: 41, y: 23, connections: [9, 12], rooms: [] },
      { x: 43, y: 23, connections: [11, 13], rooms: ['090223'] },
      { x: 47, y: 23, connections: [12, 14], rooms: ['090209'] },
      { x: 55, y: 23, connections: [13, 15], rooms: ['090221'] },
      { x: 61, y: 23, connections: [14, 16], rooms: ['090210'] },
      { x: 65, y: 23, connections: [15, 17], rooms: ['090220'] },
      { x: 74, y: 23, connections: [16, 18], rooms: ['090211', '090219'] },
      { x: 77, y: 23, connections: [17, 19], rooms: ['090212'] },
      { x: 81, y: 23, connections: [18, 20], rooms: ['090213', 'S092FS3'] },
      { x: 89, y: 23, connections: [19, 21], rooms: [] },
      { x: 93, y: 23, connections: [20, 22], rooms: ['090215'] },
      { x: 97, y: 23, connections: [21], rooms: ['090214'] },
    ]


  },
  '3F': {
    image: require('../../image/공대3층.png'),
    rooms: {
      '090301': { x: 6, y: 70, target: ['093FS1','093FS2','093FS3'] ,tmp:[0]},
      '090302': { x: 19, y: 70, target:['093FS1','093FS2','093FS3'] ,tmp:[0]},
      '090303': { x: 28, y: 70, target:['093FS1','093FS2','093FS3'] ,tmp:[0]},
      '090305': { x: 6, y: 50, target:['093FS1','093FS2','093FS3'] ,tmp:[0] },
      '090306': { x: 16, y: 50, target:['093FS1','093FS2','093FS3'] ,tmp:[0]},
      '090307': { x: 26, y: 49, target:['093FS1','093FS2','093FS3'] ,tmp:[0]},
      '090308': { x: 33, y: 49, target: ['093FS1','093FS2','093FS3'] ,tmp:[1] },
      '090309': { x: 36, y: 49, target: ['093FS1','093FS2','093FS3'] ,tmp:[1]},
      '090310': { x: 43, y: 49, target: ['093FS1','093FS2','093FS3'] ,tmp:[1]},
      '090311': { x: 51, y: 49, target: ['093FS1','093FS2','093FS3'] ,tmp:[1]},
      '090312': { x: 23, y: 29, target:['093FS1','093FS2','093FS3'] ,tmp:[0]},
      '090316': { x: 48, y: 31, target: ['093FS1','093FS2','093FS3'] ,tmp:[1]},
      '090317': { x: 70, y: 31, target: ['093FS1','093FS2','093FS3'],tmp:[1] },
      '090317-A': { x: 63, y: 31, target: ['093FS1','093FS2','093FS3'] ,tmp:[2]},
      '090317-B': { x: 60, y: 31, target: ['093FS1','093FS2','093FS3'] ,tmp:[2]},
      '090318': { x: 76, y: 31, target: ['093FS1','093FS2','093FS3'] ,tmp:[2]},
      '090319': { x: 80, y: 31, target: ['093FS1','093FS2','093FS3'] ,tmp:[2]},
      '090320': { x: 90, y: 31, target: ['093FS1','093FS2','093FS3'],tmp:[2] },
      '090321': { x: 92, y: 12, target: ['093FS1','093FS2','093FS3'] ,tmp:[2]},
      '090325': { x: 70, y: 12, target: ['093FS1','093FS2','093FS3'] ,tmp:[2]},
      '090325-A': { x: 62, y: 12, target: ['093FS1','093FS2','093FS3'] ,tmp:[2]},
      '090326': { x: 56, y: 12, target: ['093FS1','093FS2','093FS3'] ,tmp:[2]},
      '090327': { x: 45, y: 12, target: ['093FS1','093FS2','093FS3'] ,tmp:[2]},


      '093FS1': { x: 17, y: 33, target : []},
      '093FS2': { x: 37, y: 33, target : []},
      '093FS3': { x: 81, y: 16, target : []},
    },
    hallway: [
      { x: 8, y: 59.5, connections: [1], rooms: ['090301','090305'] },
      { x: 17, y: 59.5, connections: [0, 2], rooms: ['090306'] },
      { x: 21, y: 59.5, connections: [1, 3, 4], rooms: ['090302'] },
      { x: 31, y: 59.5, connections: [2], rooms: ['090303'] },
      { x: 21, y: 39, connections: [2, 5, 6], rooms: [] },
      { x: 17, y: 39, connections: [4], rooms: ['093FS1'] },

      { x: 25, y: 39, connections: [4, 7], rooms: ['090312', '090307'] },
      { x: 34, y: 39, connections: [6, 8], rooms: ['090308'] },
      { x: 37, y: 39, connections: [7, 9], rooms: ['090309', '093FS2'] },
      { x: 41, y: 39, connections: [8, 10, 11], rooms: ['090310'] },
      { x: 51, y: 39, connections: [9], rooms: ['090311'] },
      { x: 41, y: 23, connections: [9, 12], rooms: [] },
      { x: 43, y: 23, connections: [11, 13], rooms: ['090327'] },
      { x: 47, y: 23, connections: [12, 14], rooms: ['090316'] },
      { x: 61, y: 23, connections: [13, 15], rooms: ['090317-B', '090326'] },
      { x: 65, y: 23, connections: [14, 16], rooms: ['090325-A', '090317-A'] },
      { x: 73, y: 23, connections: [15, 17], rooms: ['090317', '090325'] },
      { x: 77, y: 23, connections: [16, 18], rooms: ['090318'] },
      { x: 81, y: 23, connections: [17, 19], rooms: ['090319', '093FS3'] },
      { x: 89, y: 23, connections: [18, 20], rooms: ['090321'] },
      { x: 97, y: 23, connections: [19], rooms: ['090320'] },

      // Add more hallway coordinates as needed
    ],
  },
  '4F': {
    image: require('../../image/공대4층.png'),
    rooms: {
      '090401': { x: 6, y: 70, target: ['094FS1','094FS2','094FS3'] ,tmp:[0]},
      '090402': { x: 19, y: 70, target: ['094FS1','094FS2','094FS3']  ,tmp:[0]},
      '090403': { x: 28, y: 70, target: ['094FS1','094FS2','094FS3']  ,tmp:[0]},
      '090404': { x: 2, y: 51, target: ['094FS1','094FS2','094FS3']  ,tmp:[0]},
      '090405': { x: 6.5, y: 51, target: ['094FS1','094FS2','094FS3']  ,tmp:[0]},
      '090406': { x: 11.5, y: 51, target: ['094FS1','094FS2','094FS3']  ,tmp:[0]},
      '090407': { x: 15, y: 51, target: ['094FS1','094FS2','094FS3']  ,tmp:[0]},
      '090408': { x: 26, y: 50, target: ['094FS1','094FS2','094FS3']  ,tmp:[0]},
      '090409': { x: 36, y: 50, target:['094FS1','094FS2','094FS3']  ,tmp:[1]},
      '090410': { x: 46, y: 50, target:['094FS1','094FS2','094FS3']  ,tmp:[1]},
      '090411': { x: 22, y: 29, target:['094FS1','094FS2','094FS3']  ,tmp:[1]},
      '090414': { x: 52, y: 32, target:['094FS1','094FS2','094FS3']  ,tmp:[1]},
      '090415': { x: 63, y: 32, target:['094FS1','094FS2','094FS3']  ,tmp:[2]},
      '090416': { x: 68.5, y: 32, target:['094FS1','094FS2','094FS3']  ,tmp:[2]},
      '090416-A': { x: 71, y: 32, target:['094FS1','094FS2','094FS3']  ,tmp:[2]},
      '090417': { x: 76, y: 32, target:['094FS1','094FS2','094FS3']  ,tmp:[2]},
      '090418': { x: 79, y: 32, target:['094FS1','094FS2','094FS3']  ,tmp:[2]},
      '090419': { x: 85, y: 32, target:['094FS1','094FS2','094FS3']  ,tmp:[2]},
      '090420': { x: 93, y: 32, target:['094FS1','094FS2','094FS3']  ,tmp:[2]},
      '090421': { x: 92, y: 12, target:['094FS1','094FS2','094FS3']  ,tmp:[2]},
      '090423': { x: 71, y: 12, target:['094FS1','094FS2','094FS3'] ,tmp:[2] },
      '090423-A': { x: 64, y: 12, target:['094FS1','094FS2','094FS3'] ,tmp:[2] },
      '090424': { x: 56, y: 12, target:['094FS1','094FS2','094FS3']  ,tmp:[2]},
      '090425': { x: 45, y: 12, target:['094FS1','094FS2','094FS3']  ,tmp:[1]},

      '094FS1': { x: 17, y: 33, target : []},
      '094FS2': { x: 37, y: 33, target : []},
      '094FS3': { x: 81, y: 16, target : []},
    },
    hallway: [
      { x: 2, y: 61, connections: [1], rooms: ['090404'] },
      { x: 8, y: 61, connections: [0, 2], rooms: ['090401', '090405'] },
      { x: 13, y: 61, connections: [1, 3], rooms: ['090406'] },
      { x: 17, y: 61, connections: [2, 4], rooms: ['090407'] },
      { x: 20, y: 61, connections: [3, 5, 6], rooms: ['090402'] },
      { x: 30, y: 61, connections: [4], rooms: ['090403'] },
      { x: 20, y: 40, connections: [7, 8, 4], rooms: [] },
      { x: 17, y: 40, connections: [6], rooms: ['094FS1'] },
      { x: 24, y: 40, connections: [6, 9], rooms: ['090408'] },
      { x: 27, y: 40, connections: [8, 10], rooms: ['090411'] },
      { x: 33, y: 40, connections: [9, 11], rooms: ['090409'] },
      { x: 37, y: 40, connections: [10, 12], rooms: ['094FS2'] },
      { x: 40, y: 40, connections: [11, 13, 14], rooms: [] },
      { x: 44, y: 40, connections: [12], rooms: ['090410'] },
      { x: 40, y: 23, connections: [12, 15], rooms: [] },
      { x: 42, y: 23, connections: [14, 16], rooms: ['090425'] },
      { x: 47, y: 23, connections: [15, 17], rooms: ['090414'] },
      { x: 61, y: 23, connections: [16, 18], rooms: ['090415', '090424'] },
      { x: 64, y: 23, connections: [17, 19], rooms: ['090423-A'] },
      { x: 70, y: 23, connections: [18, 20], rooms: ['090416'] },
      { x: 73, y: 23, connections: [19, 21], rooms: ['090423', '090416-A'] },
      { x: 76, y: 23, connections: [20, 22], rooms: ['090417'] },
      { x: 81, y: 23, connections: [21, 23], rooms: ['090418', '094FS3'] },
      { x: 89, y: 23, connections: [22, 24], rooms: ['090419', '090421'] },
      { x: 97, y: 23, connections: [23], rooms: ['090420'] },
      // Add more hallway coordinates as needed
    ],
  },
  '5F': {
    image: require('../../image/공대5층.png'),
    rooms: {
      '090501': { x: 6, y: 72, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090502': { x: 17, y: 72, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090503': { x: 26, y: 72, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090503-A': { x: 30, y: 72, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090504': { x: 2, y: 53, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090505': { x: 6.5, y: 53, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090506': { x: 11.5, y: 53, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090507': { x: 15.5, y: 53, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090508': { x: 24, y: 52, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090509': { x: 28, y: 52, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090510': { x: 33, y: 52, target: ['095FS1','095FS2','095FS3'] ,tmp:[1]},
      '090511': { x: 39, y: 52, target: ['095FS1','095FS2','095FS3'],tmp:[1] },
      '090512': { x: 43, y: 52, target: ['095FS1','095FS2','095FS3'] ,tmp:[1]},
      '090513': { x: 49, y: 52, target: ['095FS1','095FS2','095FS3'] ,tmp:[1]},
      '090514': { x: 19.5, y: 29, target: ['095FS1','095FS2','095FS3'] ,tmp:[0]},
      '090515': { x: 23, y: 29, target: ['095FS1','095FS2','095FS3'],tmp:[0] },
      '090515-A': { x: 26, y: 29, target: ['095FS1','095FS2','095FS3'] ,tmp:[1]},
      '090516': { x: 49, y: 32, target: ['095FS1','095FS2','095FS3'] ,tmp:[1]},
      '090517': { x: 62, y: 32, target: ['095FS1','095FS2','095FS3'],tmp:[2]},
      '090518': { x: 79, y: 32, target: ['095FS1','095FS2','095FS3'],tmp:[2]},
      '090519': { x: 91, y: 32, target: ['095FS1','095FS2','095FS3'],tmp:[2]},
      '090520': { x: 91, y: 12, target: ['095FS1','095FS2','095FS3'],tmp:[2] },
      '090522-A': { x: 71, y: 12, target: ['095FS1','095FS2','095FS3'],tmp:[2]},
      '090523': { x: 53, y: 12, target: ['095FS1','095FS2','095FS3'],tmp:[2]},
      '090524': { x: 46, y: 12, target: ['095FS1','095FS2','095FS3'] ,tmp:[1]},
      '090522': { x: 62, y: 12, target: ['095FS1','095FS2','095FS3'],tmp:[2]},

      '095FS1': { x: 17, y: 33 , target : []},
      '095FS2': { x: 37, y: 33 , target : []},
      '095FS3': { x: 81, y: 16 , target : []},


    },
    hallway: [
      { x: 3, y: 63, connections: [1], rooms: ['090504'] },
      { x: 8, y: 63, connections: [0, 2], rooms: ['090505', '090501'] }, 
      { x: 13, y: 63, connections: [1, 3], rooms: ['090506'] },
      { x: 17, y: 63, connections: [2, 4], rooms: ['090507'] },
      { x: 21, y: 63, connections: [3, 5, 7], rooms: ['090502'] },
      { x: 26, y: 63, connections: [4, 6], rooms: ['090503'] },
      { x: 32, y: 63, connections: [5], rooms: ['090503-A'] },
      { x: 21, y: 41, connections: [4, 8, 9], rooms: ['090514'] },
      { x: 17, y: 41, connections: [7], rooms: ['095FS1'] },
      { x: 25, y: 41, connections: [7, 10], rooms: ['090515', '090508'] },
      { x: 28.5, y: 41, connections: [9, 11], rooms: ['090509', '090515-A'] },
      { x: 32, y: 41, connections: [10, 12], rooms: ['090510'] },
      { x: 34, y: 41, connections: [11, 13], rooms: [] },
      { x: 37, y: 41, connections: [12, 14], rooms: ['095FS2'] },
      { x: 41, y: 41, connections: [13, 15, 17], rooms: ['090511'] },
      { x: 44, y: 41, connections: [14, 16], rooms: ['090512'] },
      { x: 51, y: 41, connections: [15], rooms: ['090513'] },
      { x: 41, y: 24, connections: [14, 18], rooms: ['090524'] },
      { x: 43, y: 24, connections: [17, 19], rooms: [] },
      { x: 47, y: 24, connections: [18, 20], rooms: ['090516'] },
      { x: 53, y: 24, connections: [19, 21], rooms: ['090523'] },
      { x: 57, y: 24, connections: [20, 22], rooms: ['090517'] },
      { x: 65, y: 24, connections: [21, 23], rooms: ['090522'] },
      { x: 73, y: 24, connections: [22, 24], rooms: ['090522-A'] },
      { x: 81, y: 24, connections: [23, 25], rooms: ['095FS3'] },
      { x: 84, y: 24, connections: [24, 26], rooms: ['090518'] },
      { x: 89, y: 24, connections: [25], rooms: ['090520','090519'] },
    ],
  },
  '6F': {
    image: require('../../image/공대6층.png'),
    rooms: {
      '090601': { x: 6, y: 67, target: ['096FS1','096FS2'],tmp:[0]},
      '090601-A': { x: 11.5, y: 67, target: ['096FS1','096FS2'] ,tmp:[0]},
      '090602': { x: 19, y: 67, target: ['096FS1','096FS2'],tmp:[0] },
      '090602-A': { x: 26, y: 67, target: ['096FS1','096FS2'] ,tmp:[0]},
      '090602-B': { x: 32, y: 67, target: ['096FS1','096FS2'] ,tmp:[0]},
      '090603': { x: 40, y: 67, target: ['096FS1','096FS2'] ,tmp:[0]},
      '090603-A': { x: 50, y: 67, target: ['096FS1','096FS2'] ,tmp:[0]},
      '090604': { x: 9, y: 39, target: ['096FS1','096FS2'] ,tmp:[0]},
      '090605': { x: 17.5, y: 39, target: ['096FS1','096FS2'] ,tmp:[0]},
      '090606': { x: 24, y: 39, target: ['096FS1','096FS2'] ,tmp:[0]},
      '090607': { x: 49, y: 39, target: ['096FS1','096FS2'] ,tmp:[0]},
      '090608': { x: 58, y: 39, target: ['096FS1','096FS2'] ,tmp:[1]},
      '090609': { x: 63, y: 39, target: ['096FS1','096FS2'],tmp:[1] },
      '090610': { x: 70, y: 39, target: ['096FS1','096FS2'] ,tmp:[1]},
      '090611': { x: 75, y: 39, target: ['096FS1','096FS2'] ,tmp:[1]},
      '090612': { x: 81, y: 39, target: ['096FS1','096FS2'] ,tmp:[1]},
      '090613': { x: 86, y: 39, target: ['096FS1','096FS2'] ,tmp:[1]},
      '090614': { x: 91, y: 39, target: ['096FS1','096FS2'] ,tmp:[1]},
      '090615': { x: 83, y: 12, target: ['096FS1','096FS2'] ,tmp:[1]},
      '090616': { x: 89, y: 12, target: ['096FS1','096FS2'],tmp:[1] },
      '090619': { x: 41, y: 12, target: ['096FS1','096FS2'] ,tmp:[0]},

      '096FS1': { x: 33, y: 13, target : []},
      '096FS2': { x: 66, y: 13, target : []},

      '02': { x: 11, y: 5, target : []},
    },
    hallway: [
      { x: 7, y: 55, connections: [1], rooms: ['090604', '090601'] },
      { x: 14, y: 55, connections: [0, 2], rooms: ['090605', '090601-A'] },
      { x: 20, y: 55, connections: [1, 3], rooms: ['090602'] },
      { x: 26, y: 55, connections: [2, 4], rooms: ['090602-A', '090606'] },
      { x: 35, y: 55, connections: [3, 5, 7], rooms: ['090602-B'] },
      { x: 40, y: 55, connections: [4, 6], rooms: ['090603'] },
      { x: 47, y: 55, connections: [5], rooms: ['090603-A'] },
      { x: 35, y: 25, connections: [4, 8, 9], rooms: [] },
      { x: 33, y: 25, connections: [7], rooms: ['096FS1'] },
      { x: 38, y: 25, connections: [7, 10], rooms: ['090619'] },
      { x: 45, y: 25, connections: [9, 11], rooms: ['090607'] },
      { x: 51, y: 25, connections: [10, 12], rooms: [] },
      { x: 57, y: 25, connections: [11, 13], rooms: ['090608'] },
      { x: 61, y: 25, connections: [12, 14], rooms: [] },
      { x: 66, y: 25, connections: [13, 15], rooms: ['090609', '096FS2'] },
      { x: 71, y: 25, connections: [14, 16], rooms: ['090610'] },
      { x: 76, y: 25, connections: [15, 17], rooms: ['090611'] },
      { x: 82, y: 25, connections: [16, 18], rooms: ['090612'] },
      { x: 85, y: 25, connections: [17, 19], rooms: ['090615'] },
      { x: 87, y: 25, connections: [18, 20], rooms: ['090613'] },
      { x: 92, y: 25, connections: [19], rooms: ['090614', '090616'] },
      // Add more hallway coordinates as needed
    ],
  },
  '7F': {
    image: require('../../image/공대7층.png'),
    rooms: {
      '090716': { x: 28.9, y: 21.5, target: ['097FS1','097FS2'] ,tmp:[0]},
      '090715': { x: 36.9, y: 21.5, target: ['097FS1','097FS2'] ,tmp:[1]},
      '090712': { x: 81.2, y: 21.5, target: ['097FS1','097FS2'] ,tmp:[1]},
      '090711': { x: 89.5, y: 21.5, target: ['097FS1','097FS2'] ,tmp:[1]},
      '090710': { x: 89.5, y: 58, target: ['097FS1','097FS2'] ,tmp:[1]},
      '090709': { x: 81.2, y: 58, target: ['097FS1','097FS2'] ,tmp:[1]},
      '090708': { x: 71.6, y: 58, target: ['097FS1','097FS2'] ,tmp:[1]},
      '090707': { x: 63.2, y: 58, target: ['097FS1','097FS2'] ,tmp:[1]},
      '090706': { x: 54.7, y: 58, target: ['097FS1','097FS2'] ,tmp:[1]},
      '090705': { x: 45.9, y: 58, target: ['097FS1','097FS2'] ,tmp:[1]},
      '090704': { x: 37.2, y: 58, target: ['097FS1','097FS2'],tmp:[1] },
      '090703': { x: 28.6, y: 58, target: ['097FS1','097FS2'] ,tmp:[0]},
      '090702': { x: 20.1, y: 58, target: ['097FS1','097FS2'] ,tmp:[0]},
      '090701': { x: 11, y: 58, target: ['097FS1','097FS2'] ,tmp:[0]},
      '090717': { x: 20, y: 21.5, target: ['097FS1','097FS2'] ,tmp:[0]},

      '097FS1': { x: 13, y: 22, target : []},
      '097FS2': { x: 60, y: 22, target : []},
      
    },
    hallway: [
      { x: 13, y: 42, connections: [1], rooms: ['090701', '097FS1'] },
      { x: 21, y: 42, connections: [0, 2], rooms: ['090702', '090717'] },
      { x: 29, y: 42, connections: [1, 3], rooms: ['090703', '090716'] },
      { x: 38, y: 42, connections: [2, 4], rooms: ['090704', '090715'] },
      { x: 47, y: 42, connections: [3, 5], rooms: ['090705',] },
      { x: 55, y: 42, connections: [4, 6], rooms: ['090706',] },
      { x: 60, y: 42, connections: [5, 7], rooms: ['097FS2'] },
      { x: 64, y: 42, connections: [6, 8], rooms: ['090707',] },
      { x: 68, y: 42, connections: [7, 9], rooms: [] },
      { x: 72, y: 42, connections: [8, 10], rooms: ['090708',] },
      { x: 81, y: 42, connections: [9, 11], rooms: ['090709', '090712'] },
      { x: 89, y: 42, connections: [10], rooms: ['090711', '090710'] },


      // Add more hallway coordinates as needed
    ],
  },
  '8F': {
    image: require('../../image/공대8층.png'),
    rooms: {
      '090816': { x: 19, y: 25, target: ['098FS1','098FS2'] ,tmp:[0] },
      '090815': { x: 31.9, y: 25, target: ['098FS1','098FS2']  ,tmp:[0]},
      '090812': { x: 77.2, y: 25, target: ['098FS1','098FS2']  ,tmp:[1]},
      '090811': { x: 85.5, y: 25, target: ['098FS1','098FS2']  ,tmp:[1]},
      '090810': { x: 86.5, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[1]},
      '090809': { x: 78.2, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[1]},
      '090808': { x: 68.6, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[1]},
      '090807': { x: 60.2, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[1]},
      '090806': { x: 51.7, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[1]},
      '090805': { x: 42.9, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[1]},
      '090804': { x: 34.2, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[1]},
      '090803': { x: 25.6, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[0]},
      '090802': { x: 17.1, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[0]},
      '090801': { x: 8, y: 58.5, target: ['098FS1','098FS2']  ,tmp:[0]},

      '098FS1': { x: 11, y: 25, target : []},
      '098FS2': { x: 57, y: 25, target : []},
     
    },
    hallway: [
      { x: 11, y: 44, connections: [1], rooms: ['090801', '098FS1'] },
      { x: 18, y: 44, connections: [0, 2], rooms: ['090802'] },
      { x: 25, y: 44, connections: [1, 3], rooms: ['090816'] },
      { x: 28, y: 44, connections: [2, 4], rooms: ['090803'] },
      { x: 30, y: 44, connections: [3, 5], rooms: ['090815'] },
      { x: 35, y: 44, connections: [4, 6], rooms: ['090804'] },
      { x: 44, y: 44, connections: [5, 7], rooms: ['090805'] },
      { x: 52, y: 44, connections: [6, 8], rooms: ['090806'] },
      { x: 57, y: 44, connections: [7, 9], rooms: ['098FS2'] },
      { x: 61, y: 44, connections: [8, 10], rooms: ['090807'] },
      { x: 65, y: 44, connections: [9, 11], rooms: [] },
      { x: 69, y: 44, connections: [10, 12], rooms: ['090808'] },
      { x: 77, y: 44, connections: [11, 13], rooms: ['090812'] },
      { x: 79, y: 44, connections: [12, 14], rooms: ['090809'] },
      { x: 86, y: 44, connections: [13], rooms: ['090811', '090810'] },

      // Add more hallway coordinates as needed
    ],

  },
  '9F': {
    image: require('../../image/공대9층.png'),
    rooms: {
      '090915': { x: 23, y: 31, target: ['099FS1','099FS2'] ,tmp:[0]},
      '090914': { x: 35, y: 31, target: ['099FS1','099FS2'] ,tmp:[1]},
      '090911': { x: 85.5, y: 31, target: ['099FS1','099FS2'] ,tmp:[1]},
      '090910': { x: 89.5, y: 62, target: ['099FS1','099FS2'] ,tmp:[1]},
      '090909': { x: 80.2, y: 62, target: ['099FS1','099FS2'] ,tmp:[1]},
      '090908': { x: 70.6, y: 62, target: ['099FS1','099FS2'] ,tmp:[1]},
      '090907': { x: 62.2, y: 62, target: ['099FS1','099FS2'] ,tmp:[1]},
      '090906': { x: 53.7, y: 62, target: ['099FS1','099FS2'] ,tmp:[1]},
      '090905': { x: 43.9, y: 62, target: ['099FS1','099FS2'] ,tmp:[1]},
      '090904': { x: 35.2, y: 62, target: ['099FS1','099FS2'] ,tmp:[1]},
      '090903': { x: 25.6, y: 62, target: ['099FS1','099FS2'] ,tmp:[0]},
      '090902': { x: 17.1, y: 62, target: ['099FS1','099FS2'] ,tmp:[0]},
      '090901': { x: 8, y: 62, target: ['099FS1','099FS2'] ,tmp:[0]},

      '099FS1': { x: 10, y: 31, target : []},
      '099FS2': { x: 59, y: 31, target : []},

     
    },
    hallway: [
      { x: 10, y: 48, connections: [1], rooms: ['090901', '099FS1'] },
      { x: 18, y: 48, connections: [0, 2], rooms: ['090902', '090915'] },
      { x: 27, y: 48, connections: [1, 3], rooms: ['090903'] },
      { x: 36, y: 48, connections: [2, 4], rooms: ['090904', '090914'] },
      { x: 45, y: 48, connections: [3, 5], rooms: ['090914'] },
      { x: 53, y: 48, connections: [4, 6], rooms: ['090905'] },
      { x: 59, y: 48, connections: [5, 7], rooms: ['090906', '099FS2'] },
      { x: 64, y: 48, connections: [6, 8], rooms: ['090907'] },
      { x: 67, y: 48, connections: [7, 9], rooms: [] },
      { x: 72, y: 48, connections: [8, 10], rooms: ['090908'] },
      { x: 81, y: 48, connections: [9, 11], rooms: ['090909', '090911'] },
      { x: 90, y: 48, connections: [10], rooms: ['090910'] },
      // Add more hallway coordinates as needed
    ],
  },
  '10F': {
    image: require('../../image/공대10층.png'),
    rooms: {
      '091015': { x: 23, y: 25, target: ['0910FS1','0910FS2'] ,tmp:[0]},
      '091014': { x: 35, y: 25, target: ['0910FS1','0910FS2'] ,tmp:[1]},
      '091011': { x: 83.5, y: 25, target: ['0910FS1','0910FS2'] ,tmp:[1]},
      '091010': { x: 87.5, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[1]},
      '091009': { x: 78.2, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[1]},
      '091008': { x: 68.6, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[1]},
      '091007': { x: 60.2, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[1]},
      '091006': { x: 51.7, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[1]},
      '091005': { x: 42.9, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[1]},
      '091004': { x: 34.2, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[1]},
      '091003': { x: 25.6, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[0]},
      '091002': { x: 17.1, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[0]},
      '091001': { x: 8, y: 60, target: ['0910FS1','0910FS2'] ,tmp:[0]},

      '0910FS1': { x: 10, y: 29, target : []},
      '0910FS2': { x: 57, y: 29, target : []},

      '0S2': { x: 11, y: 46, target : []},
    },
    hallway: [
      { x: 10, y: 45, connections: [1], rooms: ['091001', '0910FS1'] },
      { x: 19, y: 45, connections: [0, 2], rooms: ['091002', '091015'] },
      { x: 28, y: 45, connections: [1, 3], rooms: ['091003'] },
      { x: 35, y: 45, connections: [2, 4], rooms: ['091004', '091014'] },
      { x: 44, y: 45, connections: [3, 5], rooms: ['091005'] },
      { x: 53, y: 45, connections: [4, 6], rooms: ['091006'] },
      { x: 57, y: 45, connections: [5, 7], rooms: ['0910FS2'] },
      { x: 62, y: 45, connections: [6, 8], rooms: ['091007'] },
      { x: 69, y: 45, connections: [7, 9], rooms: ['091008'] },
      { x: 79, y: 45, connections: [8, 10], rooms: ['091009', '091011'] },
      { x: 88, y: 45, connections: [9], rooms: ['091010'] },
      // Add more hllway coordinates as needed
    ],
  },
  '11F': {
    image: require('../../image/공대11층.png'),
    rooms: {
      '091115': { x: 23, y: 22, target: ['0911FS1','0911FS2'] ,tmp:[1]},
      '091114': { x: 79, y: 22, target: ['0911FS1','0911FS2'] ,tmp:[1]},
      '091111': { x: 88, y: 22, target: ['0911FS1','0911FS2'] ,tmp:[1]},
      '091110': { x: 88, y: 60, target: ['0911FS1','0911FS2'] ,tmp:[1]},
      '091109': { x: 79, y: 60, target: ['0911FS1','0911FS2'] ,tmp:[1]},
      '091108': { x: 70, y: 60, target: ['0911FS1','0911FS2'] ,tmp:[1]},
      '091107': { x: 61, y: 60, target: ['0911FS1','0911FS2'],tmp:[1] },
      '091106': { x: 52, y: 60, target: ['0911FS1','0911FS2'] ,tmp:[1]},
      '091105': { x: 42, y: 60, target: ['0911FS1','0911FS2'] ,tmp:[1]},
      '091104': { x: 34, y: 60, target: ['0911FS1','0911FS2'] ,tmp:[1]},
      '091103': { x: 25, y: 60, target: ['0911FS1','0911FS2'] ,tmp:[0]},
      '091102': { x: 17.1, y: 60, target: ['0911FS1','0911FS2'] ,tmp:[0]},
      '091101': { x: 8, y: 60, target: ['0911FS1','0911FS2'] ,tmp:[0]},

      '0911FS1': { x: 9, y: 29  , target : []},
      '0911FS2': { x: 58, y: 29 , target : []},
    },
    hallway: [
      { x: 9, y: 45, connections: [1], rooms: ['091101', '0911FS1'] },
      { x: 18, y: 45, connections: [0, 2], rooms: ['091102'] },
      { x: 27, y: 45, connections: [1, 3], rooms: ['091103'] },
      { x: 36, y: 45, connections: [2, 4], rooms: ['091104', '091115'] },
      { x: 45, y: 45, connections: [3, 5], rooms: ['091105'] },
      { x: 53, y: 45, connections: [4, 6], rooms: ['091106'] },
      { x: 58, y: 45, connections: [5, 7], rooms: ['0911FS2'] },
      { x: 63, y: 45, connections: [6, 8], rooms: ['091107'] },
      { x: 71, y: 45, connections: [7, 9], rooms: ['091108'] },
      { x: 80, y: 45, connections: [8, 10], rooms: ['091109', '091114'] },
      { x: 89, y: 45, connections: [9], rooms: ['091110', '091111'] },
      // Add more hallway coordinates as needed
    ],
    staircases: {
    },
  },
  '12F': {
    image: require('../../image/공대12층.png'),
    rooms: {
      '091201': { x: 52, y: 56.5, target: ['0912FS1','0912FS2']  ,tmp:[0]},

      '0912FS1': { x: 9, y: 29 , target : []},
      '0912FS2': { x: 57, y: 29, target : []},
    },
    hallway: [
      { x: 50, y: 26.5, connections: [], rooms: ['091201', '0912FS1'] },
    ],
  },
  // 다른 층 추가
};
export default floors;