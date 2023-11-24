import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MyList({ route }) {
  // Lấy dữ liệu phim từ tham số truyền qua navigation
  const movieListData = route.params?.movieListData || [];

  return (
    <View>
      <Text>MyList</Text>
      <Image
          source={require("../../images/previous.png")}
          style={{ width: 30, height: 30 , marginLeft: 180}}
        />
         <Image
          source={require("../../images/previous.png")}
          style={{ width: 30, height: 30 , marginLeft: 180}}
        />
    </View>
  );
}

const styles = StyleSheet.create({});
