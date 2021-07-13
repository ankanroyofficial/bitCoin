import React from 'react'
import { View, Text, Image } from 'react-native'
import { height, width } from '../constant/ConstantColorSize'
import { MaterialIcons } from '@expo/vector-icons';
export default function CurrencyLevel() {
    return (
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
            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                <Text style={{ fontWeight: "bold", fontSize: width * 0.037 }}>$12,222.56</Text>
                <Text style={{ fontSize: width * 0.03, color: "black", opacity: 0.5, fontWeight: "bold" }}>13.769 ETC</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                {/* <MaterialIcons name="keyboard-arrow-right" size={width * 0.07} color={GrayColor} /> */}
            </View>
        </View>
    )
}
