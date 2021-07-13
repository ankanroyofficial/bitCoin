import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import { BackGroundGray, BorderRadious, Elevation, GrayColor, Green, height, Horizontal, MarginTop, Padding, PurpleColor, width } from '../constant/ConstantColorSize'
import { AntDesign } from '@expo/vector-icons';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryScatter } from "victory-native"
import ShortNote from "../component/ShortNote"
import CurrencyLevel from "../component/CurrencyLevel"
import VictoryStyle from '../constant/VictoryStyle';

const chartData =
    [
        { x: "15 MIN", y: "15" },
        { x: "25 MIN", y: "30" },
        { x: "30 MIN", y: "25" },
        { x: "40 MIN", y: "35" },
        { x: "45 MIN", y: "45" },
        { x: "60 MIN", y: "60" },

    ]

export default function CurrencyDetails({ navigation }) {
    const CardData = {
        "title": "About Ethereum",
        "shortNote": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    };
    return (
        <View style={{ flex: 1, backgroundColor: BackGroundGray, paddingTop: StatusBar.currentHeight }}>
            <ScrollView>
                <View style={{ height: height * 0.05, marginHorizontal: width * 0.05, flexDirection: "row", alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}><AntDesign name="arrowleft" size={width * 0.06} color="black" /></TouchableOpacity>
                    <Text style={{ paddingLeft: width * 0.02, fontSize: width * 0.042 }}>Back</Text>
                </View>
                <View style={{ height: height * 0.4, backgroundColor: "white", marginHorizontal: Horizontal, elevation: Elevation, borderRadius: BorderRadious }}>
                    <View style={{ padding: Padding, }}>
                        <CurrencyLevel />
                    </View>
                    <View style={{ flex: 1 }}>
                        <VictoryChart
                            theme={VictoryStyle}
                            height={height * 0.3}
                        >
                            <VictoryLine
                                style={{
                                    data: { stroke: PurpleColor },
                                    parent: { border: "1px solid #ccc" }
                                }}
                                categories={{
                                    x: ["15 MIN", "30 MIN", "45 MIN", "60 MIN"],
                                    y: ["15", "30", "45"]
                                }}
                                data={chartData}
                            />
                            <VictoryScatter data={chartData}
                                size={width * 0.014}
                                style={{
                                    data: {
                                        fill: PurpleColor
                                    }
                                }}
                            />
                            <VictoryAxis style={{
                                grid: {
                                    stroke: "transparent"
                                }
                            }} />
                            <VictoryAxis dependentAxis
                                style={{
                                    grid: {
                                        stroke: "transparent"
                                    },
                                    grid: {
                                        stroke: "gray"
                                    }
                                }}
                            />
                        </VictoryChart>
                    </View>
                </View>



                <View style={{ padding: width * 0.05, backgroundColor: 'white', marginTop: MarginTop, marginHorizontal: Horizontal, borderRadius: BorderRadious, elevation: Elevation }}>
                    <CurrencyLevel />
                    <TouchableOpacity activeOpacity={0.7} style={{ height: height * 0.05, backgroundColor: Green, borderRadius: 8, justifyContent: 'center', alignItems: "center", marginTop: height * 0.02 }}>
                        <Text style={{ fontWeight: "bold", fontSize: width * 0.035, color: "white" }}>BUY</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: MarginTop }}>
                    <ShortNote data={CardData} />
                </View>
            </ScrollView>
        </View>
    )
}
// 9749804462