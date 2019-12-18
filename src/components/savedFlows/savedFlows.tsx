import React from 'react';
import {View, Text} from 'react-native';
import savedFlowsStyle from './savedFlows.style';

const styles = savedFlowsStyle();
export default () => {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.placeholderText}>
                This feature isn't complete yet. Please check in later!
            </Text>
        </View>
    );
};
