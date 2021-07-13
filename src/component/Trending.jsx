import React from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import { BorderRadious, Elevation, height, MarginTop, PurpleColor, width } from "../constant/ConstantColorSize"

export default function Trending(props) {
    const Trending = [
        {
            "id": 1,
            "Coin_Type": "Bitcoin",
            "Coin_ShortName": "BTC",
            "logo": require("../assets/icon/bitcoin.png"),
            "Amount": "12,724.33",
            "Profit": +7.24
        },
        {
            "id": 2,
            "Coin_Type": "Ethereum",
            "Coin_ShortName": "ETH",
            "logo": require("../assets/icon/Ethereum.png"),
            "Amount": "12,724.33",
            "Profit": -5.45
        },
        {
            "id": 3,
            "Coin_Type": "Litecoin",
            "Coin_ShortName": "LTC",
            "logo": require("../assets/icon/Litecoin.png"),
            "Amount": "12,724.33",
            "Profit": +7.24
        },
        {
            "id": 4,
            "Coin_Type": "Monero",
            "Coin_ShortName": "XMR",
            "logo": require("../assets/icon/Monero.png"),
            "Amount": "12,724.33",
            "Profit": -4.32
        },
        {
            "id": 5,
            "Coin_Type": "Cardano",
            "Coin_ShortName": "ADA",
            "logo": require("../assets/icon/Cardano.png"),
            "Amount": "12,724.33",
            "Profit": +7.24
        },

    ]
    return (
        <View style={{ height: height * 0.25, marginTop: MarginTop }}>
            <Text style={{ paddingLeft: width * 0.03, color: 'white', fontSize: width * 0.038, fontWeight: "bold", marginBottom: height * 0.02 }}>Trending</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Trending.map((item, index) => (
                    <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate("CurrencyDetails")} key={index} style={{ height: height * 0.17, width: width * 0.42, backgroundColor: "white", borderRadius: BorderRadious, elevation: Elevation, marginLeft: width * 0.03, marginRight: index % (Trending.length) - (Trending.length - 1) == 0 ? width * 0.03 : 0 }}>
                        <View style={{ flex: 1, margin: width * 0.04 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
                                    <View style={{ height: height * 0.03, width: height * 0.03 }}>
                                        <Image source={item.logo} style={{ height: "100%", width: "100%", resizeMode: 'cover' }} />
                                    </View>
                                </View>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: width * 0.037 }}>{item.Coin_Type}</Text>
                                    <Text style={{ fontSize: width * 0.033, color: "black", opacity: 0.5 }}>{item.Coin_ShortName}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, paddingLeft: width * 0.02 }}>
                                <Text style={{ color: 'black', fontSize: width * 0.04, fontWeight: "bold" }}>$12,724.33</Text>
                                <Text style={{ color: item.Profit >= 0 ? "#52e3a0" : "#e35286", fontSize: width * 0.033, fontWeight: "bold" }}>{item.Profit >= 0 ? "+" : null}{item.Profit}%</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}
