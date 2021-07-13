import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { BorderRadious, Elevation, height, Horizontal, MarginTop, PurpleColor, width } from '../constant/ConstantColorSize'

export default function ShortNote(props) {

    const [press, setPress] = useState(false)

    const CardData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    return (
        <View style={{ backgroundColor: PurpleColor, marginTop: MarginTop, marginHorizontal: Horizontal, borderRadius: BorderRadious, elevation: Elevation, padding: width * 0.05 }}>
            <Text style={{ color: "white", fontWeight: "bold" }} >{props.data.title}</Text>
            <Text numberOfLines={press == false ? 4 : 20} style={{ color: "white", opacity: 0.6, paddingTop: height * 0.02, textAlign: "justify" }} >{props.data.shortNote}</Text>
            <Text onPress={() => setPress(!press)} style={{ color: "#0000FF", textDecorationLine: 'underline', fontStyle: 'italic', paddingTop: height * 0.02 }}>Read More</Text>
        </View>
    )
}
