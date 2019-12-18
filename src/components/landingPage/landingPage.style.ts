import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from '../../config/styles';

export default () => {
    return StyleSheet.create({
        poseContainer: {
            alignItems: 'center',
            flex: 1,
        },
        resetText: {
            alignSelf: 'center',
            flex: 0,
            flexShrink: 1,
            marginBottom: 20,
        },
        rootContainer: {
            backgroundColor: BACKGROUND_COLOR,
            flex: 1,
            justifyContent: 'flex-end',
        },
    });
};
