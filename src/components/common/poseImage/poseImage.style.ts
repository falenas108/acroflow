import {StyleSheet} from 'react-native';

export const POSE_WIDTH = 100;
export const POSE_MARGIN = 20;

export default () => {
    return StyleSheet.create({
        image: {
            width: POSE_WIDTH,
            height: POSE_WIDTH,
            margin: POSE_MARGIN,
            resizeMode: 'contain',
        },
        imageName: {
            alignSelf: 'center',
        },
    });
};
