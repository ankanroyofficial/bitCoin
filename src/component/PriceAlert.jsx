import React from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'
import { BorderRadious, Elevation, GrayColor, height, Horizontal, MarginTop, width } from "../constant/ConstantColorSize"
import { MaterialIcons } from '@expo/vector-icons';

export default function PriceAlert() {
    return (
        <TouchableOpacity activeOpacity={0.8} style={{ height: height * 0.12, backgroundColor: "white", marginHorizontal: Horizontal, borderRadius: BorderRadious, elevation: Elevation, flexDirection: "row", marginTop: MarginTop }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <MaterialIcons name="notifications-active" size={width * 0.07} color="#ffbe00" />
            </View>
            <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={{ fontWeight: "bold", fontSize: width * 0.045 }}>Set Price Alert</Text>
                <Text numberOfLines={1} style={{ fontWeight: "bold", fontSize: width * 0.031, color: GrayColor, paddingTop: height * 0.007 }}>Get notified when your coin are moving</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <MaterialIcons name="keyboard-arrow-right" size={width * 0.1} color={GrayColor} />
            </View>
        </TouchableOpacity>
    )
}
