import Pose from '../models/pose';

// Stores all poses in the app
const poses: Pose[] = [
    {
        connections: ['fighting', 'chilling'],
        name: 'crane',
        imageName: require('../images/crane.jpg'),
    },
    {
        connections: ['crane'],
        name: 'fighting',
        imageName: require('../images/fighting.png'),
    },
    {
        connections: ['crane', 'standing'],
        name: 'chilling',
        imageName: require('../images/chilling.jpg'),
    },
    {
        connections: ['chilling'],
        name: 'standing',
        imageName: require('../images/standing.png'),
    },
];

export default poses;
