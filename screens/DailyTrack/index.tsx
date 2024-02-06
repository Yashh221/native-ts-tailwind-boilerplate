import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";

type DailyTrackProps = {
  navigation: StackNavigationProp<any, any>;
};
const DailyTrack: React.FC<DailyTrackProps> = ({ navigation }) => {
  return (
    <View>
      <Text
        className="flex-1 justify-center items-center bg-red-600 text-white"
        onPress={() => navigation.navigate("Home")}
      >
        DailyTrack
      </Text>
    </View>
  );
};

export default DailyTrack;
