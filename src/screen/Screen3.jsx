import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, Image, Alert, ScrollView } from 'react-native'
import { BackGroundGray, BorderRadious, Elevation, GrayColor, Green, height, Horizontal, MarginTop, width } from '../constant/ConstantColorSize'
import { AntDesign } from '@expo/vector-icons';
import TransactionHistory from "../component/TransactionHistory"
export default function Screen3() {
    return (
        <View style={{ flex: 1, backgroundColor: BackGroundGray, paddingTop: StatusBar.currentHeight }}>
            <ScrollView>
                <View style={{ height: height * 0.05, marginHorizontal: width * 0.05, flexDirection: "row", alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { console.warn("ok") }}><AntDesign name="arrowleft" size={width * 0.06} color="black" /></TouchableOpacity>
                    <Text style={{ paddingLeft: width * 0.02, fontSize: width * 0.042 }}>Back</Text>
                </View>
                <View style={{ padding: width * 0.05, backgroundColor: 'white', marginTop: MarginTop, marginHorizontal: Horizontal, borderRadius: BorderRadious, elevation: Elevation }}>
                    <View style={{ height: height * 0.06, flexDirection: "row" }}>
                        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: height * 0.023, width: height * 0.023 }}>
                                <Image source={require("../assets/icon/bitcoin.png")} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: "bold", fontSize: width * 0.037 }}>Bitcoin</Text>
                            <Text style={{ fontSize: width * 0.03, color: "black", opacity: 0.5, fontWeight: "bold" }}>BTC</Text>
                        </View>
                        <View style={{ flex: 1.3 }}></View>
                    </View>
                    <View style={{ height: height * 0.08, justifyContent: 'center', alignItems: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: width * 0.05 }}>13.770 ETH</Text>
                        <Text style={{ fontSize: width * 0.03, color: "black", opacity: 0.5, fontWeight: "bold" }}>$12,754.54</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => Alert.alert("Sucessfully Buy")} style={{ height: height * 0.05, backgroundColor: Green, borderRadius: 8, justifyContent: 'center', alignItems: "center", marginTop: height * 0.01 }}>
                        <Text style={{ fontWeight: "bold", fontSize: width * 0.035, color: "white" }}>BUY</Text>
                    </TouchableOpacity>
                </View>
                <TransactionHistory />
            </ScrollView>
        </View>
    )
}
