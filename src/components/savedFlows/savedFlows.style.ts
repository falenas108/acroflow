import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from '../../config/styles';

export default () => {
    return StyleSheet.create({
        placeholderText: {
            marginStart: 20,
            marginTop: 50,
        },
        rootContainer: {
            backgroundColor: BACKGROUND_COLOR,
            flex: 1,
        },
    });
};
