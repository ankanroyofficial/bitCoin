import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { BorderRadious, Elevation, GrayColor, height, Horizontal, MarginTop, PurpleColor, width } from "../constant/ConstantColorSize"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function TransactionHistory() {

    const data = [
        { "id": "1" },
        { "id": "2" },
        { "id": "3" },
        { "id": "4" },
        { "id": "5" },
        { "id": "6" },
        { "id": "7" },
        { "id": "8" },
        { "id": "9" },
    ]

    const renderitem = () => (
        <View style={{ height: height * 0.08, backgroundColor: "white", flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "row", }}>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="swap-horizontal" size={width * 0.08} color={PurpleColor} />
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View>
                        <Text  style={{ fontWeight: "bold", fontSize: width * 0.038, color: "black" ,letterSpacing:0.5}} >Sold Ethereum</Text>
                        <Text style={{ fontWeight: "bold", fontSize: width * 0.028, color: "black", opacity: 0.6 }}>14:20 12 Apr</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                    <Text style={{ fontWeight: "bold", fontSize: width * 0.038, color: "black",letterSpacing:0.5 }}>-2.0034 ETH</Text>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="keyboard-arrow-right" size={width * 0.07} color={GrayColor} />
                </View>
            </View>
        </View>
    )

    const itemSeparator = () => (
        <View style={{ height: 0.5, backgroundColor: GrayColor }} />
    )

    return (
        <View style={{ padding: width * 0.05, backgroundColor: "white", marginHorizontal: Horizontal, marginTop: MarginTop, marginBottom: height * 0.085 + MarginTop, borderRadius: BorderRadious, elevation: 2}}>
            <Text style={{ fontWeight: "bold", fontSize: width * 0.045 }} >Transaction History</Text>
            <View style={{ paddingTop: height * 0.02 }}>

                <FlatList
                    data={data}
                    renderItem={renderitem}
                    keyExtractor={(item,index) => index.toString()}
                    ItemSeparatorComponent={itemSeparator}
                />



            </View>
        </View>
    )
}
