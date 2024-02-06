import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";

type HomeProps = {
  navigation: StackNavigationProp<any, any>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View>
      <Text
        className="flex-1 justify-center items-center bg-red-600 text-white"
        onPress={() => navigation.navigate("DailyTrack")}
      >
        Home
      </Text>
    </View>
  );
};

export default Home;
