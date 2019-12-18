import React, {useState} from 'react';
import {View, FlatList, Dimensions, Text} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Pose from '../../models/pose';
import landingPageStyle from './landingPage.style';
import poses from '../../config/poses';
import PoseImage from '../common/poseImage/poseImage';
import {POSE_WIDTH, POSE_MARGIN} from '../common/poseImage/poseImage.style';

const styles = landingPageStyle();

export default () => {
    const [searchText, setSearchText] = useState<string>('');
    const [activePose, setActivePose] = useState<Pose | null>(null);

    return (
        <View style={styles.rootContainer}>
            <ScrollView
                keyboardShouldPersistTaps={false}
                style={styles.contentContainer}
            >
                <PoseSearchBar text={searchText} setText={setSearchText} />
                <PoseList
                    activePose={activePose}
                    searchText={searchText}
                    setActivePose={setActivePose}
                />
            </ScrollView>
            <Reset hasActivePose={!!activePose} setActivePose={setActivePose} />
        </View>
    );
};

const PoseList = ({
    activePose,
    searchText,
    setActivePose,
}: {
    activePose: Pose | null;
    searchText: string;
    setActivePose: (pose: Pose) => void;
}) => {
    const filteredPoses = poses.filter(
        pose =>
            searchIncludesPose(searchText, pose) &&
            isConnectedToActivePose(activePose, pose),
    );
    return (
        <View style={styles.poseContainer}>
            <FlatList
                data={filteredPoses}
                keyExtractor={item => item.name}
                numColumns={Math.trunc(
                    Dimensions.get('window').width /
                        (POSE_WIDTH + POSE_MARGIN * 2),
                )}
                renderItem={({item}) => (
                    <PoseImage item={item} onPressPose={setActivePose} />
                )}
            />
        </View>
    );
};

const PoseSearchBar = ({
    text,
    setText,
}: {
    text: string;
    setText: (text: string) => void;
}) => {
    return (
        <SearchBar
            key="search bar"
            onChangeText={newText => setText(newText)}
            value={text}
        />
    );
};

const Reset = ({
    hasActivePose,
    setActivePose,
}: {
    hasActivePose: boolean;
    setActivePose: (emptyPose: null) => void;
}) => {
    if (!hasActivePose) {
        return null;
    }
    return (
        <Text onPress={() => setActivePose(null)} style={styles.resetText}>
            Reset Flow
        </Text>
    );
};

const isConnectedToActivePose = (activePose: Pose | null, pose: Pose) => {
    // return true if no active pose, because then we want to show all poses
    return (
        !activePose || activePose.connections.some(name => name === pose.name)
    );
};

const searchIncludesPose = (searchText: string, pose: Pose) => {
    return pose.name.toLowerCase().includes(searchText.toLowerCase());
};
