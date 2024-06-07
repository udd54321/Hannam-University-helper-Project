const building05Floor = {
    '05_1F': {
      image: require('../../image/05-1층.png'),
      rooms: {
        '050101': { x: 9, y: 24 , target: ['021FS1','051FS2', '051FS3'],tmp:[0]},
        '050102': { x: 14, y: 24 , target: ['021FS1','051FS2', '051FS3'],tmp:[0]},
        '050103': { x: 18, y: 24 , target: ['021FS1','051FS2', '051FS3'],tmp:[1]},
        '050104': { x: 23, y: 24 , target: ['021FS1','051FS2', '051FS3'],tmp:[1]},
        '050106': { x: 37, y: 42 , target: ['021FS1','051FS2', '051FS3'],tmp:[1]},
        '050107': { x: 43, y: 42 , target: ['021FS1','051FS2', '051FS3'],tmp:[1]},
        '050108': { x: 49, y: 42 , target: ['021FS1','051FS2', '051FS3'],tmp:[2]},
        '050109': { x: 54, y: 42 , target: ['021FS1','051FS2', '051FS3'],tmp:[2]},
        '050110': { x: 61, y: 42 , target: ['021FS1','051FS2', '051FS3'],tmp:[2]},
        '050111': { x: 67, y: 42 , target: ['021FS1','051FS2', '051FS3'],tmp:[2]},
        '050112': { x: 85, y: 42 , target: ['021FS1','051FS2', '051FS3'],tmp:[2]},
        '050113': { x: 81, y: 63 , target: ['021FS1','051FS2', '051FS3'],tmp:[2]},
        '050114': { x: 93, y: 63 , target: ['021FS1','051FS2', '051FS3'],tmp:[2]},

        '051FS1': { x: 4, y:18, target: [] },
        '051FS2': { x: 33, y:18, target: [] },
        '051FS3': { x: 72, y:30, target: [] },

        '0': { x: 30, y:35, target: [] },

        '05Entrance': { x: 73, y:66, target: ['021FS1','051FS2', '051FS3'],tmp:[1] },
        '05Entrance2': { x: 30, y:52, target: ['021FS1','051FS2', '051FS3'],tmp:[2] },
      },
      hallway: [
           { x: 4, y: 15, connections: [1], rooms: [ '051FS1'], },
           { x: 8, y: 15, connections: [0, 2], rooms: ['050101'], },
           { x: 15, y: 15, connections: [1,3], rooms: ['050102'], },
           { x: 19, y: 15, connections: [2,4], rooms: ['050103'], },
           { x: 26, y: 15, connections: [3,5], rooms: ['050104'], },
           { x: 31, y: 15, connections: [4,6], rooms: ['051FS2'], },
           { x: 31, y: 22, connections: [5, 7], rooms: [], },
           { x: 31, y: 28, connections: [6, 8], rooms: [], },
           { x: 31, y: 35, connections: [7,9,10], rooms: [], },
           { x:31, y: 50, connections: [8], rooms: [], },//9
           { x: 36, y: 35, connections: [8,11], rooms: ['050106'], },//10
           { x: 42, y: 35, connections: [10,12], rooms: ['050107'], },
           { x: 49, y: 35, connections: [11,13], rooms: ['050108'], },
           { x: 55, y: 35, connections: [12,14], rooms: ['050109'], },
           { x: 62, y: 35, connections: [13,15], rooms: ['050110'], },
           { x: 69, y: 35, connections: [14,16], rooms: ['050111'], },
           { x: 73, y: 35, connections: [15,17], rooms: ['051FS3'], },//16
           { x: 73, y: 47, connections: [16,18], rooms: ['050112'], },
           { x: 73, y: 61, connections: [17,19], rooms: ['050113'], },
           { x: 89, y: 61, connections: [18], rooms: ['050114'], },

         ],

    },
    '05_2F': {
      image: require('../../image/05-2층.png'),
      rooms: {
        '050201': { x: 9, y: 45 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[0]},
        '050202': { x: 17, y: 45 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[0]},
        '050202-A': { x: 24, y: 45 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[1]},
        '050203': { x: 35, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[1]},
        '050203-A': { x: 40, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[1]},
        '050203-B': { x: 45, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[1]},
        '050203-C': { x: 50, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[1]},
        '050204': { x: 55, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050205': { x: 59, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050206': { x: 63, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050206-A': { x: 67, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050207': { x: 72, y: 77 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050208': { x: 76, y: 77 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050209': { x: 81, y: 77 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050210': { x: 86, y: 77 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050211': { x: 91, y: 77 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050212': { x: 94, y: 77 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050213': { x: 76, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050214': { x: 80, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050215': { x: 85, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050216': { x: 90, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050217': { x: 95, y: 63 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050219': { x: 67, y: 34 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050220': { x: 60, y: 21 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[3]},
        '050221': { x: 58, y: 5 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[3]},
        '050222': { x: 55, y: 34 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},
        '050223': { x: 55, y: 44 , target: ['021FS1','051FS2', '051FS3','051FS4'],tmp:[2]},


        '052FS1': { x: 2, y:38, target: [] },
        '052FS2': { x: 31, y:38, target: [] },
        '052FS3': { x: 72, y:50, target: [] },
        '052FS4': { x: 64, y:13, target: [] },



        // 다른 방 좌표
      },
      hallway: [
           { x: 8, y: 38, connections: [1], rooms: ['050201','052FS1']},//0
           { x: 18, y: 38, connections: [0, 2], rooms: ['050202']},
           { x: 25, y: 38, connections: [1,3], rooms: ['050202-A']},
           { x: 29, y: 38, connections: [2,4], rooms: ['052FS2']},//3
           { x: 29, y: 53, connections: [3,5], rooms: []},
           { x: 36, y: 53, connections: [4,6], rooms: ['050203']},//5
           { x: 42, y: 53, connections: [5,7], rooms: ['050203-A']},
           { x: 47, y: 53, connections: [6,8], rooms: ['050203-B']},
           { x: 51, y: 53, connections: [7,9], rooms: ['050203-C']},
           { x:55, y: 53, connections: [8,10], rooms: ['050204']},//9
           { x: 60, y: 53, connections: [9,11,20], rooms: ['050205']},//
           { x: 64, y: 53, connections: [10,12], rooms: ['050206']},//11
           { x: 69, y: 53, connections: [11,13], rooms: ['050206-A']},
           { x: 72, y: 53, connections: [12,14], rooms: ['052FS3']},//13
           { x: 72, y: 70, connections: [13,15], rooms: ['050207']},
           { x: 76, y: 70, connections: [14,16], rooms: ['050208','050213']},
           { x: 81, y: 70, connections: [15,17], rooms: ['050209','050214']},
           { x: 86, y: 70, connections: [16,18], rooms: ['050210','050215']},
           { x: 91, y: 70, connections: [17,19], rooms: ['050211','050216']},
           { x: 96, y: 70, connections: [18], rooms: ['050212','050217']},//19
           { x: 60, y: 44, connections: [10,21], rooms: ['050223']},
           { x: 60, y: 34, connections: [20,22], rooms: ['050222','050219','050220']},
           { x: 60, y: 12, connections: [21], rooms: ['050221','052FS4']},
         ],

    },
    '05_3F': {
      image: require('../../image/05-3층.png'),
      rooms: {
        '050301': { x: 7, y: 55 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[0]},
        '050302': { x: 12, y: 55 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[0]},
        '050303': { x: 16, y: 55 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[0]},
        '050304': { x: 20, y: 55 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[1]},
        '050305': { x: 24, y: 55 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[1]},
        '050309': { x: 36, y: 65 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[1]},
        '050310': { x: 41, y: 65 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[1]},
        '050311': { x: 45, y: 65 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[1]},
        '050312': { x: 50, y: 65 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[1]},
        '050313': { x: 55, y: 65 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[1]},
        '050314': { x: 59, y: 65 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050315': { x: 63, y: 65 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050316': { x: 68, y: 65 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050317': { x: 71, y: 78 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050318': { x: 76, y: 78 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050319': { x: 81, y: 78 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050320': { x: 85, y: 78 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050321': { x: 90, y: 78 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050322': { x: 95, y: 78 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050323': { x: 93, y: 69 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050324': { x: 80, y: 69 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050326': { x: 65, y: 47 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050327': { x: 65, y: 40 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050328': { x: 65, y: 34 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050329': { x: 65, y: 28 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050330': { x: 55, y: 18 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050331': { x: 55, y:  26, target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050332': { x: 55, y: 33 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050334': { x: 55, y: 40 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050335': { x: 55, y: 47 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050337': { x: 55, y: 54 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[2]},
        '050339': { x: 60, y: 6 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050340': { x: 56, y: 6 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050341': { x: 52, y: 6 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050342': { x: 48, y: 6 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050343': { x: 44, y: 6 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050344': { x: 40, y: 6 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050345': { x: 36, y: 6, target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050346': { x: 32, y: 6 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[3]},
        '050349': { x: 12, y: 6 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[0]},
        '050350': { x: 6, y: 18, target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[0]},
        '050351': { x: 6, y: 29 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[0]},
        '050352': { x: 6, y: 39 , target: ['053FS1','053FS2', '053FS3','053FS4'],tmp:[0]},

        '053FS1': { x: 3, y:49  ,target: []},
        '053FS2': { x: 32, y:49  ,target: []},
        '053FS3': { x: 71, y:58  ,target: []},
        '053FS4': { x: 65, y:23  ,target: []},

       // '0': { x: 12, y:41  ,target: []},
      },
      hallway: [
        { x: 7, y: 49, connections: [1], rooms: ['050301','053FS1']},//0
        { x: 12, y: 49, connections: [0, 2,37], rooms: ['050302']},
        { x: 16, y: 49, connections: [1,3], rooms: ['050303']},
        { x: 21, y: 49, connections: [2,4], rooms: ['050304']},//3
        { x: 25, y: 49, connections: [3,5], rooms: ['050305']},
        { x: 29, y: 49, connections: [4,6], rooms: ['053FS2']},//5
        { x: 37, y: 60, connections: [5,7], rooms: ['050309']},
        { x: 42, y: 60, connections: [6,8], rooms: ['050310']},
        { x: 47, y: 60, connections: [7,9], rooms: ['050311']},
        { x: 51, y: 60, connections: [8,10], rooms: ['050312']},//9
        { x: 55, y: 60, connections: [9,11], rooms: ['050313','050337']},//
        { x: 60, y: 60, connections: [10,12,21], rooms: ['050314']},//11
        { x: 65, y: 60, connections: [11,13], rooms: ['050315']},
        { x: 70, y: 60, connections: [12,14], rooms: ['050316']},
        { x: 72, y: 60, connections: [13,15], rooms: ['053FS3']},//

        { x: 72, y: 74, connections: [14,16], rooms: ['050317']},//15
        { x: 77, y: 74, connections: [15,17], rooms: ['050318']},
        { x: 81, y: 74, connections: [16,18], rooms: ['050319','050324']},
        { x: 86, y: 74, connections: [17,19], rooms: ['050320']},
        { x: 91, y: 74, connections: [18,20], rooms: ['050321']},//19
        { x: 96, y: 74, connections: [19], rooms: ['050323','050322']},//20

        { x: 60, y: 47, connections: [20,22], rooms: ['050335','050326']},//21
        { x: 60, y: 40, connections: [21,23], rooms: ['050334','050327']},
        { x: 60, y: 33, connections: [22,24], rooms: ['050332','050328']},
        { x: 60, y: 27, connections: [23,25], rooms: ['050331','050329','053FS4']},
        { x: 60, y: 18, connections: [24,26], rooms: ['050330',]},
        { x: 60, y: 12, connections: [25,27], rooms: ['050339']},
        { x: 57, y: 12, connections: [26,28], rooms: ['050340']},
        { x: 53, y: 12, connections: [27,29], rooms: ['050331',]},
        { x: 49, y: 12, connections: [28,30], rooms: ['050342']},
        { x: 45, y: 12, connections: [29,31], rooms: ['050343']},
        { x: 41, y: 12, connections: [30,32], rooms: ['050344',]},
        { x: 37, y: 12, connections: [31,33], rooms: ['050345']},
        { x: 34, y: 12, connections: [32,34], rooms: ['050346']},
        { x: 12, y: 12, connections: [33,35], rooms: ['050349']},
        { x: 12, y: 19, connections: [34,36], rooms: ['050350']},
        { x: 12, y: 29, connections: [35,37], rooms: ['050351',]},
        { x: 12, y: 38, connections: [36,1], rooms: ['050352']},
      ],
    },
    '05_4F': {
      image: require('../../image/05-4층.png'),
      rooms: {
        '050401': { x: 7, y: 52 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[0]},
        '050402': { x: 10, y: 52 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[0]},
        '050403': { x: 14, y: 52 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[0]},
        '050404': { x: 18, y: 52 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[1]},
        '050405': { x: 21, y: 52 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[1]},
        '050406': { x: 24, y: 52 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[1]},
        '050409': { x: 36, y: 65 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[1]},
        '050410': { x: 41, y: 65 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[1]},
        '050411': { x: 45, y: 65 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[1]},
        '050412': { x: 50, y: 65 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[1]},
        '050413': { x: 55, y: 65 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[1]},
        '050414': { x: 59, y: 65 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050415': { x: 63, y: 65 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050416': { x: 67, y: 65 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050417': { x: 71, y: 78 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050418': { x: 76, y: 78 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050419': { x: 81, y: 78 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050420': { x: 85, y: 78 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050421': { x: 90, y: 78 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050422': { x: 95, y: 78 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050423': { x: 93, y: 69 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050424': { x: 87, y: 69 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050425': { x: 82, y: 69 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050426': { x: 77, y: 69 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[2]},
        '050430': { x: 65, y: 41 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[3]},
        '050431': { x: 65, y: 35, target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[3]},
        '050432': { x: 65, y: 29 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[3]},
        '050433': { x: 60, y: 18 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[3]},
        '050434': { x: 43, y: 21 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[3]},
        '050435': { x: 55, y: 6 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[3]},
        '050436': { x: 40, y: 6 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[3]},
        '050440': { x: 12, y: 6 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[0]},
        '050441': { x: 6, y: 21 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[0]},
        '050442': { x: 6, y: 33 , target: ['054FS1','054FS2', '054FS3','054FS4'],tmp:[0]},

        '054FS1': { x: 3, y:49  ,target: []},
        '054FS2': { x: 32, y:49  ,target: []},
        '054FS3': { x: 71, y:58  ,target: []},
        '054FS4': { x: 65, y:23  ,target: []},

      
        // 다른 방 좌표
      },
      hallway: [
           { x: 8, y: 48, connections: [1], rooms: ['050401','054FS1']},
           { x: 11, y: 48, connections: [0, 2], rooms: ['050402']},
           { x: 14, y: 48, connections: [1,3,34], rooms: ['050403']},//
           { x: 19, y: 48, connections: [2,4], rooms: ['050404']},
           { x: 22, y: 48, connections: [3,5], rooms: ['050405']},
           { x: 25, y: 48, connections: [4,6], rooms: ['050406']},
           { x: 30, y: 48, connections: [5,7], rooms: ['054FS2']},
           { x: 30, y: 60, connections: [6,8], rooms: []},//7
           { x: 37, y: 60, connections: [7,9], rooms: ['050409']},
           { x: 42, y: 60, connections: [8,10], rooms: ['050410']},
           { x: 47, y: 60, connections: [9,11], rooms: ['050411']},
           { x: 52, y: 60, connections: [10,12], rooms: ['050412']},
           { x: 56, y: 60, connections: [11,13,23], rooms: ['050413']},//12
           { x: 60, y: 60, connections: [12,14], rooms: ['050414']},
           { x: 64, y: 60, connections: [13,15], rooms: ['050415']},
           { x: 68, y: 60, connections: [14,16], rooms: ['050416']},
           { x: 72, y: 60, connections: [15,17], rooms: ['054FS3']},
           { x: 72, y: 73, connections: [16,18], rooms: ['050417']},
           { x: 78, y: 73, connections: [17,19], rooms: ['050418','050426']},
           { x: 83, y: 73, connections: [18,20], rooms: ['050425','050419']},
           { x: 87, y: 73, connections: [19,21], rooms: ['050420','050424']},
           { x: 91, y: 73, connections: [20,22], rooms: ['050421']},
           { x: 95, y: 73, connections: [21], rooms: ['05423','050422']},//22
           { x: 56, y: 41, connections: [12,24], rooms: ['050430']},//23
           { x: 56, y: 34, connections: [23,25], rooms: ['050431']},
           { x: 56, y: 28, connections: [24,26], rooms: ['050432']},
           { x: 56, y: 23, connections: [25,27], rooms: ['054FS4']},
           { x: 56, y: 18, connections: [26,28], rooms: ['050433']},
           { x: 56, y: 13, connections: [27,29], rooms: ['050435']},
           { x: 48, y: 13, connections: [28,30], rooms: ['050434']},
           { x: 42, y: 13, connections: [29,31], rooms: ['050436']},
           { x: 16, y: 13, connections: [30,32], rooms: ['050440']},
           { x: 14, y: 13, connections: [31,33], rooms: []},
           { x: 14, y: 23, connections: [32,34], rooms: ['050441']},
           { x: 14, y: 33, connections: [33,2], rooms: ['050442']},
         ],
          
    },
    // 다른 층 추가
  };
  
  export default building05Floor;