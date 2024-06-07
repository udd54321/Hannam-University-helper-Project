const building11Floor = {
    '11_1F': {
      image: require('../../image/11-1층.png'),
      rooms: {
        '110101': { x: 8, y: 50 , target: ['111FS1','111FS2'],tmp:[0]},
        '110102': { x: 17, y: 50 , target: ['111FS1','111FS2'],tmp:[0]},
        '110107': { x: 52, y: 63 , target: ['111FS1','111FS2'],tmp:[0]},
        '110108 ': { x: 63, y: 63 , target: ['111FS1','111FS2'],tmp:[0]},
        '110109': { x: 73, y: 63 , target: ['111FS1','111FS2'],tmp:[0]},
        '110113': { x: 83, y: 63 , target: ['111FS1','111FS2'],tmp:[1]},
        '110114': { x: 92, y: 50 , target: ['111FS1','111FS2'],tmp:[1]},
        '110115': { x: 83, y: 35 , target: ['111FS1','111FS2'],tmp:[1]},
        '110118': { x: 62, y: 35 , target: ['111FS1','111FS2'],tmp:[1]},
        '110119': { x: 8, y: 21 , target: ['111FS1','111FS2'],tmp:[0]},
        '110120': { x: 19, y: 21 , target: ['111FS1','111FS2'],tmp:[0]},



        '111FS1': { x: 38, y:35, target: [] },
        '111FS2': { x: 74, y:35, target: [] },

        '02Entrance': { x: 35, y:69, target: [] },
      },
      hallway: [
           { x: 8, y: 35, connections: [1], rooms: ['110101','110119'], },
           { x: 18, y: 35, connections: [0, 2], rooms: ['110102','110120'], },
           { x: 30, y: 35, connections: [1,3], rooms: ['111FS1'], },
           { x: 35, y: 50, connections: [2,4], rooms: [], },//3
           { x: 51, y: 50, connections: [3,5], rooms: ['110107'], },
           { x: 62, y: 50, connections: [4,6], rooms: ['110108','110118'], },
           { x: 74, y: 50, connections: [5,7], rooms: ['110109','111FS2'], },
           { x: 84, y: 50, connections: [6], rooms: ['110113','110114','110115'], }


         ],

    },
    '11_2F': {
      image: require('../../image/11-2층.png'),
      rooms: {
        '110203': { x: 55, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[0]},
        '110204': { x: 66, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},
        '110205': { x: 77, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},
        '110206': { x: 88, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[2]},
        '110210 ': { x: 83, y: 38 , target: ['112FS1','112FS2', '112FS3'],tmp:[2]},
        '110211': { x: 76, y: 38 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},
        '110213': { x: 66, y: 38 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},


        '112FS1': { x: 40, y:34, target: [] },
        '112FS2': { x: 76, y:34, target: [] },
        '112FS3': { x: 91, y:48, target: [] },

   

      },
      hallway: [
           { x: 40, y: 48, connections: [1], rooms: ['112FS1'], },
           { x: 54, y: 48, connections: [0, 2], rooms: ['110203'], },
           { x: 68, y: 48, connections: [1,3], rooms: ['110204','110213'], },
           { x: 76, y: 48, connections: [2,4], rooms: ['110211','112FS2'], },//3
           { x: 82, y: 48, connections: [3,5], rooms: ['110205','110210'], },
           { x: 88, y: 48, connections: [4], rooms: ['110206','112FS3'], },


         ],

    },
    '11_3F': {
      image: require('../../image/11-3층.png'),
      rooms: {
        '110303': { x: 52, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[0]},
        '110304': { x: 60, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},
        '110305': { x: 68, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},
        '110305-A': { x: 75, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},
        '110306': { x: 80, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},
        '110308 ': { x: 88, y: 63 , target: ['112FS1','112FS2', '112FS3'],tmp:[2]},
        '110310': { x: 86, y: 38 , target: ['112FS1','112FS2', '112FS3'],tmp:[2]},
        '110311': { x: 81, y: 38 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},
        '110312': { x: 66, y: 38 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},
        '110313': { x: 59, y: 38 , target: ['112FS1','112FS2', '112FS3'],tmp:[1]},


        '112FS1': { x: 40, y:34, target: [] },
        '112FS2': { x: 76, y:34, target: [] },
        '112FS3': { x: 91, y:48, target: [] },


      },
      hallway: [
           { x: 40, y: 48, connections: [1], rooms: ['113FS1'], },
           { x: 53, y: 48, connections: [0, 2], rooms: ['110303'], },
           { x: 60, y: 48, connections: [1,3], rooms: ['110304','110213'], },
           { x: 70, y: 48, connections: [2,4], rooms: ['110312','110305'], },//3
           { x: 76, y: 48, connections: [3,5], rooms: ['110305-A'], },
           { x: 82, y: 48, connections: [4,6], rooms: ['110311','110306'], },
           { x: 88, y: 48, connections: [5], rooms: ['110310','110308','112FS3'], },


         ],
    },
    
    // 다른 층 추가
  };
  
  export default building11Floor;