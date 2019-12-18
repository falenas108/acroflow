import React, {useState} from 'react';
import {View, FlatList, Dimensions, Text, Keyboard} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Pose from '../../models/pose';
import landingPageStyle from './landingPage.style';
import poses from '../../config/poses';
import PoseImage from '../common/poseImage/poseImage';
import {POSE_WIDTH, POSE_MARGIN} from '../common/poseImage/poseImage.style';

const styles = landingPageStyle();

export default () => {
    const [searchText, setSearchText] = useState<string>('');
    const [activePose, setActivePose] = useState<Pose | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(
        Dimensions.get('window').width,
    );

    return (
        <View
            onLayout={() => setWindowWidth(Dimensions.get('window').width)}
            onTouchStart={() => Keyboard.dismiss()}
            style={styles.rootContainer}
        >
            <PoseSearchBar text={searchText} setText={setSearchText} />
            <PoseList
                activePose={activePose}
                searchText={searchText}
                setActivePose={setActivePose}
                windowWidth={windowWidth}
            />
            <Reset hasActivePose={!!activePose} setActivePose={setActivePose} />
        </View>
    );
};

const PoseList = ({
    activePose,
    searchText,
    setActivePose,
    windowWidth,
}: {
    activePose: Pose | null;
    searchText: string;
    setActivePose: (pose: Pose) => void;
    windowWidth: number;
}) => {
    const filteredPoses = poses.filter(
        pose =>
            searchIncludesPose(searchText, pose) &&
            isConnectedToActivePose(activePose, pose),
    );
    const numberColums = Math.trunc(
        windowWidth / (POSE_WIDTH + POSE_MARGIN * 2),
    );

    return (
        <View style={styles.poseContainer}>
            <FlatList
                data={filteredPoses}
                key={windowWidth} // When this changes, the flatlist should re-render
                keyboardShouldPersistTaps="handled"
                keyExtractor={item => item.name}
                numColumns={numberColums}
                renderItem={({item}) => (
                    <PoseImage item={item} onPressPose={setActivePose} />
                )}
                showsVerticalScrollIndicator={false}
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
            placeholder="Search for a pose"
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
