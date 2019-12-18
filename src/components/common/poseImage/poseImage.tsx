import {Image, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Pose from '../../../models/pose';
import PoseImageStyle from './poseImage.style';

const styles = PoseImageStyle();

export default ({
    item,
    onPressPose,
}: {
    item: Pose;
    onPressPose: (pose: Pose) => void;
}) => {
    return (
        <TouchableOpacity onPress={() => onPressPose(item)}>
            <Image source={item.imageName} style={styles.image} />
            <Text style={styles.imageName}>{item.name}</Text>
        </TouchableOpacity>
    );
};
