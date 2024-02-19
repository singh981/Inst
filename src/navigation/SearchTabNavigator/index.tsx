import {
    createMaterialTopTabNavigator,
    MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import UserSearchScreen from '../../screens/UserSearchScreen';
import PostSearchScreen from '../../screens/PostSearchScreen';
import {StyleSheet, Text, View} from 'react-native';
import {size, weight} from '../../theme/fonts';
import colors from '../../theme/color';
import {SearchStackNavigatorParamList} from '../types';

const MaterialTopTab =
    createMaterialTopTabNavigator<SearchStackNavigatorParamList>();

const SearchTabBar = ({
    state,
    descriptors,
    navigation,
}: MaterialTopTabBarProps) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label = options.title;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 50,
                            maxHeight: 50,
                        }}
                        key={index}>
                        <Text
                            onPress={onPress}
                            style={{
                                color: isFocused ? colors.black : colors.grey,
                                fontSize: isFocused ? size.xl - 2 : size.lg,
                                fontWeight: isFocused
                                    ? weight.semi
                                    : weight.medium,
                            }}>
                            {label}
                        </Text>
                        {isFocused && <View style={styles.indicator} />}
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    indicator: {
        width: 50,
        height: 2,
        backgroundColor: 'black',
        top: 3,
    },
});

const SearchTabNavigator = () => {
    return (
        <MaterialTopTab.Navigator
            tabBar={props => <SearchTabBar {...props} />}
            initialRouteName="UserSearch">
            <MaterialTopTab.Screen
                name="UserSearch"
                component={UserSearchScreen}
                options={{
                    title: 'Users',
                }}
            />
            <MaterialTopTab.Screen
                name="PostSearch"
                component={PostSearchScreen}
                options={{
                    title: 'Posts',
                }}
            />
        </MaterialTopTab.Navigator>
    );
};

export default SearchTabNavigator;
