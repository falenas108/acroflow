import {ImageSourcePropType} from 'react-native';

export default interface Pose {
    connections: string[];
    imageName: ImageSourcePropType;
    name: string;
}
