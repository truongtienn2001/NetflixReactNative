import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
  TextInput
} from "react-native";
import Movie from "../../data/Movie";
import { LinearGradient } from "expo-linear-gradient";
var { width, height } = Dimensions.get("window");

const MoviesByCategory = ({ movies, navigation, style }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigation.navigate("MovieDetail", { item });
          }}
          style={{ ...styles.movieItem, ...style }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: item.poster }}
              style={{
                width: 150,
                height: 80,
                resizeMode: "cover",
                borderRadius: 10,
              }}
            />
            <View style={{ marginLeft: 10, justifyContent: 'center' }}>
              <Text style={{ color: "#fff", fontSize: 14 }}>{item.name}</Text>
          
            </View>

          </View>
        </Pressable>
      )}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
};

const SearchMovies = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showTopSearch, setShowTopSearch] = useState(true);

  // Mock data for trending movies
  useEffect(() => {
    // You may fetch trending movies from an API here
    setTrendingMovies(Movie.items.find((item) => item.id === "category5")?.movies || []);
  }, []);

  const handleSearch = () => {
    const filter = Movie.items.flatMap((category) =>
      category.movies.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSearchResults(filter);

    // Ẩn Top Search khi có kết quả tìm kiếm và hiển thị khi không có kết quả
    setShowTopSearch(!search || search.length === 0 || filter.length === 0);
  };

  // Lấy phần tử đầu tiên từ searchResults
  const firstSearchResult = searchResults.length > 0 ? [searchResults[0]] : [];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{ width: "100%" }}>
        {/* TextInput Search */}
        <View style={{ flexDirection: 'row', backgroundColor: "#424242", width: 395, height: 52, alignItems: 'center' }}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 10 }}
            source={require("../../images/ic_baseline-mic.png")}
          />
          <TextInput
            style={{ width: 245, height: 31, color: "#C4C4C4", marginLeft: 30 }}
            placeholder="Search for a show, movie, genre, e.t.c."
            onChangeText={(text) => setSearch(text)}
          />
          <Pressable onPress={handleSearch}>
            <Image
              style={{ width: 20, height: 20, marginLeft: 60 }}
              source={require("../../images/ant-design_search-outlined.png")}
            />
          </Pressable>
        </View>

        {/* TODO: Phim đang thịnh hành */}
        {!showTopSearch && (
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: 10,
              }}
            >
              Search Results
            </Text>
            {/* Sử dụng firstSearchResult thay vì searchResults */}
            <MoviesByCategory
              movies={firstSearchResult}
              navigation={navigation}
              style={{ marginTop: 10, backgroundColor: '#424242' }}
            />
          </View>
        )}

        {showTopSearch && (
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: 10,
              }}
            >
              Top Search
            </Text>
            {/* TODO: Hiển thị danh sách phim nổi bật */}
            <MoviesByCategory
              movies={trendingMovies}
              navigation={navigation}
              style={{ marginTop: 10, backgroundColor: '#424242' }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginBottom: 60,
  },
  movieItem: {
    margin: 5,
  },
});

export default SearchMovies;
