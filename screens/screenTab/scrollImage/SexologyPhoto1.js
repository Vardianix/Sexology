import React, { useRef } from 'react';
import {
    useWindowDimensions,
    Animated,
    ImageBackground,
    SafeAreaView,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

const images = new Array('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Institut_f%C3%BCr_Sexualwissenschaft_-_Bibliothek_1933.jpg/1024px-Institut_f%C3%BCr_Sexualwissenschaft_-_Bibliothek_1933.jpg', 'https://cdni.rt.com/russian/images/2018.05/article/5af34002370f2c45798b45a5.JPG');


export default function SexologyPhoto1() {
   
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <View>
                
                    <ScrollView
                    horizontal={true}
                    style={styles.scrollViewStyle}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }
                    ],
                    {useNativeDriver: false}
                    )}
                    scrollEventThrottle={1}
                >
                    {images.map((image, imageIndex) => {
                        return (
                            <View
                                style={{ width: windowWidth, height: 250 }}
                                key={imageIndex}
                            >
                                <ImageBackground source={{ uri: image }} style={styles.card}>

                                </ImageBackground>
                            </View>
                        );
                    })}
                </ScrollView></View>
                <View style={styles.indicatorContainer}>
                    {images.map((image, imageIndex) => {
                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1)
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp"
                        });
                        return (
                            <Animated.View
                                key={imageIndex}
                                style={[styles.normalDot, { width }]}
                            />
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",


    },
    scrollContainer: {
        height: 300,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        flex: 1,
        marginVertical: 4,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },

    infoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "#660666",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }

});