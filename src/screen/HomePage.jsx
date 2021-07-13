import React, { useEffect } from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity, LogBox } from 'react-native'
import { BackGroundGray, height, PurpleColor, width } from "../constant/ConstantColorSize"
import { Ionicons } from '@expo/vector-icons';
import PriceAlert from "../component/PriceAlert"
import Trending from "../component/Trending"
import ShortNote from "../component/ShortNote"
import TransactionHistory from "../component/TransactionHistory"


export default function HomePage({ navigation }) {
    const data = [
        { "id": 1 },
        { "id": 2 },
        { "id": 3 },
        { "id": 4 },
        { "id": 5 },
    ]
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])
    const CardData = {
        "title": "Investing Safety",
        "shortNote": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    };
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: BackGroundGray }}>
                <View style={{ height: height * 0.46 }}>
                    <View style={{ height: height * 0.385, backgroundColor: PurpleColor }}></View>
                    <View style={{ flex: 1, position: "absolute" }}>
                        <View style={{ height: height * 0.08, marginHorizontal: width * 0.08, justifyContent: 'center', alignItems: "flex-end", paddingTop: StatusBar.currentHeight }}>
                            <TouchableOpacity>
                                <Ionicons name="notifications" size={width * 0.055} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: height * 0.12, marginTop: height * 0.018, justifyContent: "space-evenly", alignItems: "center" }}>
                            <Text style={{ color: 'white', fontSize: width * 0.035 }}>Your Portfolio Balance</Text>
                            <Text style={{ color: 'white', fontSize: width * 0.065, fontWeight: "bold" }}>$12,724.33</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: 'white', fontSize: width * 0.032, }}>+2.35%</Text>
                                <Text style={{ color: 'white', fontSize: width * 0.032, marginLeft: 10 }}>Last 24 Hours</Text>
                            </View>
                        </View>
                        <Trending navigation={navigation} />
                    </View>
                </View>
                <PriceAlert />
                <ShortNote data={CardData} />
                <TransactionHistory />
            </View>
        </ScrollView>
    )
}
