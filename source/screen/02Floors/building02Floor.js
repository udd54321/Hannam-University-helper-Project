const floors = {
    '1F': {
      image: require('../../image/02-1층.png'),
      rooms: {
        '020101': { x: 8, y: 50 , target: ['021FS1']},
        '020101-A': { x: 1, y: 50 , target: ['021FS1']},
        '020102': { x: 16, y: 50 , target: ['021FS1']},
        '020103': { x: 23, y: 50 , target: ['021FS1']},
        '020104': { x: 31, y: 50 , target: ['021FS1']},
        '020105': { x: 36, y: 50 , target: ['021FS1']},
        '020106': { x: 56, y: 50 , target: ['021FS1']},
        '020108': { x: 69, y: 50 , target: ['021FS2']},
        '020109': { x: 84, y: 50 , target: ['021FS2']},
        '020113': { x: 28, y: 31 , target: ['021FS1']},
        '020110': { x: 57, y: 31.2 , target: ['021FS1']},

        '021FS1': { x: 44, y:37, target: [] },
        '021FS2': { x: 99, y:43, target: [] },
      },
      hallway: [
           { x: 2, y: 40, connections: [1], rooms: ['020101'], },
           { x: 12, y: 40, connections: [0, 2], rooms: ['020101-A'], },
           { x: 17, y: 40, connections: [1,3], rooms: ['020102'], },
           { x: 21, y: 40, connections: [2,4], rooms: ['020103'], },
           { x: 32, y: 40, connections: [3,5], rooms: ['020104','020113'], },
           { x: 37, y: 40, connections: [4,6], rooms: ['020105'], },
           { x: 44, y: 40, connections: [5, 7], rooms: ['021FS1'], },
           { x: 50, y: 40, connections: [6, 8], rooms: ['020106'], },
           { x: 55, y: 40, connections: [7,9], rooms: ['020110'], },
           { x:64, y: 40, connections: [8,10], rooms: ['020108'], },
           { x: 77, y: 40, connections: [9,11], rooms: ['020109'], },
           { x: 97, y: 40, connections: [10], rooms: ['021FS2'], },


         ],

    },
    '2F': {
      image: require('../../image/02-2층.png'),
      rooms: {
       // '020201': { x: 4, y: 30.5 },
        '020202': { x: 2.5, y: 49,target: ['022FS1'] },
        '020203': { x: 14, y: 49 ,target: ['022FS1']},
        '020204': { x: 23, y: 49 ,target: ['022FS1']},
        '020205': { x: 33, y: 49 ,target: ['022FS1']},
        '020208': { x: 42, y: 49 ,target: ['022FS1']},
        '020209': { x: 49, y: 49 ,target: ['022FS1']}, 
        '020210': { x: 57, y: 49 ,target: ['022FS2']},
        '020211': { x: 68, y: 49 ,target: ['022FS2']},
        '020212': { x: 82, y: 49 ,target: ['022FS2']},


        '022FS1': { x: 43, y:35 , target: []},
        '022FS2': { x: 96, y:41 , target: []},
        // 다른 방 좌표
      },
      hallway: [
           { x: 8, y: 38, connections: [1], rooms: ['020202']},
           { x: 12, y: 38, connections: [0, 2], rooms: ['020203']},
           { x: 21, y: 38, connections: [1,3], rooms: ['020204']},
           { x: 36, y: 38, connections: [2,4], rooms: ['020205']},
           { x: 43, y: 38, connections: [3,5], rooms: ['020208','022FS1']},
           { x: 50, y: 38, connections: [4,6], rooms: ['020209']},
           { x: 58, y: 38, connections: [5,7], rooms: ['020210']},
           { x:65, y: 38, connections: [6,8], rooms: ['020211']},
           { x: 77, y: 38, connections: [7,9], rooms: ['020212']},
           { x: 96, y: 38, connections: [8], rooms: ['022FS2']},
         ],

    },
    '3F': {
      image: require('../../image/02-3층.png'),
      rooms: {
        '020301': { x: 5, y: 49 ,target: ['023FS1']},
        '020302': { x: 13, y: 49 ,target: ['023FS1']},
        '020303': { x: 17, y: 49 ,target: ['023FS1']},
        '020304': { x: 22, y: 49 ,target: ['023FS1']},
        '020305': { x: 26, y: 49 ,target: ['023FS1']},
        '020306': { x: 31, y: 49 ,target: ['023FS1']},
        '020307': { x: 36, y: 49 ,target: ['023FS1']},
        '020308': { x: 40, y: 49 ,target: ['023FS1']},
        '020309': { x: 45, y: 49 ,target: ['023FS1']}, 
        '020310': { x: 50, y: 49 ,target: ['023FS1']},
        '020311': { x: 57, y: 49 ,target: ['023FS2']},
        '020312': { x: 72, y: 49 ,target: ['023FS2']},
        '020313': { x: 87, y: 49 ,target: ['023FS2']},

        '023FS1': { x: 44, y:35  ,target: []},
        '023FS2': { x: 96, y:41  ,target: []},
      },
      hallway: [
           { x: 5, y: 37, connections: [1], rooms: ['020301'],},
           { x: 14, y: 38, connections: [0, 2], rooms: ['020302'],},
           { x: 18, y: 38, connections: [1,3], rooms: ['020303'],},
           { x: 23, y: 38, connections: [2,4], rooms: ['020304'],},
           { x: 27, y: 38, connections: [3,5], rooms: ['020305'],},
           { x: 31, y: 38, connections: [4,6], rooms: ['020306'],},
           { x: 36, y: 38, connections: [5,7], rooms: ['020307'],},
           { x: 44, y: 38, connections: [6,8], rooms: ['020308','020309','023FS1'],},
           { x: 50, y: 38, connections: [7,9], rooms: ['020310'],},
           { x: 55, y: 38, connections: [8,10], rooms: ['020311'],},
           { x: 61, y: 38, connections: [9,11], rooms: ['020311'],},
           { x: 66, y: 38, connections: [10,12], rooms: ['020312'],},
           { x: 85, y: 38, connections: [11,13], rooms: ['020313'],},
           { x: 96, y: 38, connections: [12], rooms: ['023FS2'],},
         ],
    },
    '4F': {
      image: require('../../image/02-4층.png'),
      rooms: {
        '020401': { x: 6, y: 53 ,target: ['024FS1']},
        '020402': { x: 19, y: 53 ,target: ['024FS1']},
        '020403': { x: 28, y: 53 ,target: ['024FS1']},
        '020404': { x: 35, y: 53 ,target: ['024FS1']},
        '020405': { x: 45, y: 53 ,target: ['024FS1']},
        '020406': { x: 57, y: 53 ,target: ['024FS1']},
        '020407': { x: 70, y: 53 ,target: ['024FS2']},
        '020408': { x: 84, y: 53 ,target: ['024FS2']},


        '024FS1': { x: 44, y:37, target: [] },
        '024FS2': { x: 97, y:44, target: [] },
        // 다른 방 좌표
      },
      hallway: [
           { x: 19, y: 41, connections: [1], rooms: ['020401','090402']},
           { x: 31, y: 41, connections: [0, 2], rooms: ['020403']},
           { x: 36, y: 41, connections: [1,3], rooms: ['020404']},
           { x: 41, y: 41, connections: [2,4], rooms: ['020405']},
           { x: 44, y: 41, connections: [3,5], rooms: ['024FS1']},
           { x: 61, y: 41, connections: [4,6], rooms: ['020406']},
           { x: 66, y: 41, connections: [5,7], rooms: ['020407']},
           { x: 74, y: 41, connections: [6,8], rooms: ['020408']},
           { x: 97, y: 41, connections: [7], rooms: ['024FS2']},
         ],

    },
    // 다른 층 추가
  };
  
  export default floors;