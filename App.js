// import React, { useState } from "react";
// import { View, Text, Switch, StyleSheet } from "react-native";
// import {
//   Provider as PaperProvider,
//   DefaultTheme,
//   DarkTheme,
//   Button,
// } from "react-native-paper";

// import { TouchableOpacity } from "react-native";
// const App = () => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

//   return (
//     <PaperProvider theme={isDarkTheme ? DarkTheme : DefaultTheme}>
//       <View
//         style={[
//           styles.container,
//           { backgroundColor: isDarkTheme ? "#1f2a37" : "#e1f5fe" },
//         ]}
//       >
//         <Text
//           style={[
//             styles.headerText,
//             { color: isDarkTheme ? "#ffffff" : "#00796b" },
//           ]}
//         >
//           Tema Geçişi
//         </Text>

//         <View style={styles.switchContainer}>
//           <Text
//             style={[
//               styles.text,
//               { color: isDarkTheme ? "#ffffff" : "#00796b" },
//             ]}
//           >
//             {isDarkTheme ? "Koyu Tema" : "Açık Tema"}
//           </Text>

//           <Switch
//             style={styles.switch}
//             value={isDarkTheme}
//             onValueChange={toggleTheme}
//           />
//         </View>
//         <TouchableOpacity
//           mode="contained"
//           style={(styles.button)}
//           onPress={toggleTheme}
//           labelStyle={styles.buttonLabel}
//         >
//           <Text style={styles.buttonLabel}>Tema Değiştir</Text>
//         </TouchableOpacity>
//       </View>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   headerText: {
//     fontSize: 36,
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: 40,
//     color: "#333",
//   },
//   text: {
//     fontSize: 22,
//     fontWeight: "500",
//     marginBottom: 10,
//   },
//   switchContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   switch: {
//     marginTop: 10,
//     transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
//   },
//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 30,
//     marginTop: 40,
//     backgroundColor: "#00796b",
//   },
//   buttonLabel: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#fff",
//   },
// });

// export default App;
//////////////////////////////////////

// import React, { useState } from "react";
// import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
// import {
//   Provider as PaperProvider,
//   DefaultTheme,
//   DarkTheme,
// } from "react-native-paper";

// const App = () => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

//   return (
//     <PaperProvider theme={isDarkTheme ? DarkTheme : DefaultTheme}>
//       <View
//         style={[
//           styles.container,
//           { backgroundColor: isDarkTheme ? "#1f2a37" : "#e1f5fe" },
//         ]}
//       >
//         <Text
//           style={[
//             styles.headerText,
//             { color: isDarkTheme ? "#ffffff" : "#00796b" },
//           ]}
//         >
//           React Native -
//           Tema Geçişi
//         </Text>

//         <View style={styles.switchContainer}>
//           <Text
//             style={[
//               styles.text,
//               { color: isDarkTheme ? "#ffffff" : "#00796b" },
//             ]}
//           >
//             {isDarkTheme ? "Koyu Tema" : "Açık Tema"}
//           </Text>

//           <Switch
//             style={styles.switch}
//             value={isDarkTheme}
//             onValueChange={toggleTheme}
//           />
//         </View>

//         <TouchableOpacity style={styles.button} onPress={toggleTheme}>
//           <Text style={styles.buttonLabel}>Tema Değiştir</Text>
//         </TouchableOpacity>
//       </View>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     justifyContent: "space-between",
//   },
//   headerText: {
//     fontSize: 36,
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: 40,
//     color: "#333",
//   },
//   text: {
//     fontSize: 22,
//     fontWeight: "500",
//     marginBottom: 10,
//   },
//   switchContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   switch: {
//     marginTop: 10,
//     transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
//   },
//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 30,
//     marginTop: 40,
//     backgroundColor: "#00796b",
//     alignItems: "center",
//     fontWeight: "bold",
//     fontSize: 25,
//   },
//   buttonLabel: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#fff",
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "center",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//     backgroundColor: "#00796b",
//   },
// });

// export default App;


///////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { View, Text, Switch, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
// import {
//   Provider as PaperProvider,
//   DefaultTheme,
//   DarkTheme,
// } from "react-native-paper";

// const App = () => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

//   return (
//     <PaperProvider theme={isDarkTheme ? DarkTheme : DefaultTheme}>
//       <View
//         style={[
//           styles.container,
//           { backgroundColor: isDarkTheme ? "#1f2a37" : "#e1f5fe" },
//         ]}
//       >
//         <View style={styles.contentContainer}>
//           <Text
//             style={[
//               styles.headerText,
//               { color: isDarkTheme ? "#ffffff" : "#00796b" },
//             ]}
//           >
//             React Native - Tema Geçişi
//           </Text>

//           <View style={styles.switchContainer}>
//             <Text
//               style={[
//                 styles.text,
//                 { color: isDarkTheme ? "#ffffff" : "#00796b" },
//               ]}
//             >
//               {isDarkTheme ? "Koyu Tema" : "Açık Tema"}
//             </Text>

//             <Switch
//               style={styles.switch}
//               value={isDarkTheme}
//               onValueChange={toggleTheme}
//             />
//           </View>

//           <TouchableOpacity style={styles.button} onPress={toggleTheme}>
//             <Text style={styles.buttonLabel}>Tema Değiştir</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center", // Button'ı alt kısma yerleştirir
//     alignItems: "center",
//     padding: 20,
//   },
//   contentContainer: {
//     alignItems: "center",
//     marginTop: 50, // Üstten biraz boşluk
//     marginBottom: 100, // Alttan boşluk (yani yazılar ile buton arası açılır)
//   },
//   headerText: {
//     fontSize: 36,
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: 40,
//     color: "#333",
//   },
//   text: {
//     fontSize: 22,
//     fontWeight: "500",
//     marginBottom: 10,
//   },
//   switchContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   switch: {
//     marginTop: 10,
//     transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
//   },
//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 30,
//     marginTop: 40,
//     backgroundColor: "#00796b",
//     alignItems: "center",
//     marginBottom: 40,
//   },
//   buttonLabel: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#fff",
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "center",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//     // backgroundColor: "#e1f5fe",
//   },
// });

// export default App;


import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from "react-native-paper";

import AntDesign from "@expo/vector-icons/AntDesign";
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const rotation = useState(new Animated.Value(0))[0];
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <PaperProvider theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <View
        style={[
          styles.container,
          { backgroundColor: isDarkTheme ? "#1f2a37" : "#e1f5fe" },
        ]}
      >
        {/* Üst kısım */}
        <View style={styles.contentContainer}>
          <Text
            style={[
              styles.headerText,
              { color: isDarkTheme ? "#ffffff" : "#00796b" },
            ]}
          >
            React Native
          </Text>
          <Text
            style={[
              styles.headerText1,
              { color: isDarkTheme ? "#ffffff" : "#00796b" },
            ]}
          >
            Tema Geçişi
          </Text>

          <View style={styles.switchContainer}>
            <Text
              style={[
                styles.text,
                { color: isDarkTheme ? "#ffffff" : "#00796b" },
              ]}
            >
              {isDarkTheme ? "Koyu Tema" : "Açık Tema"}
            </Text>

            <Switch
              style={styles.switch}
              value={isDarkTheme}
              onValueChange={toggleTheme}
            />
          </View>
        </View>

        {/* Alt kısım - Buton */}
        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
          <Text style={styles.buttonLabel}>Tema Değiştir</Text>
          <AntDesign
            name="right"
            size={27}
            onPress={toggleTheme}
            color={isDarkTheme ? "#ffffff" : "#ffffff"}
          />
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 50, // Üstten biraz boşluk
    //marginBottom: 100, // Alttan boşluk (yani yazılar ile buton arası açılır)
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",

    // color: "#333",
  },
  headerText1: {
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "space-between",
    flexDirection: "column-reverse",
    marginBottom: 290,
    marginTop: 30,
    //color: "#333",
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 10,
    marginBottom: 30, // Yazı ile Switch arasında boşluk
    textAlign: "center", // Yazıyı da ortala
  },
  switchContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  switch: {
    marginTop: 10,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    backgroundColor: "#00796b",
    alignItems: "center",
    marginBottom: 40, // Butonun da ekranın en dibine yapışmaması için
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 30,
  },
  buttonLabel: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,

    paddingHorizontal: 20,
  },
});

export default App;
