import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Link } from 'expo-router';


export default function Home() {
    return (
 
      <View style={styles.container}>
              <Text>Main</Text>
              <Link href="/">Back to login page</Link>
        </View>        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});