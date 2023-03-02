import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Avatar,
  TextInput,
  Box,
  HStack,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, Image, ImageBackground } from "react-native";
import image_profile from "./assets/bacd.jpg";
import image_responsive from "./assets/eed.png";
import logo_image from "./assets/AlgosamaWhite.png";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { View } from "react-native";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <AppBar
        style={{ marginTop: 35, padding: 5, backgroundColor: "black" }}
        title="Algosama"
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
        trailing={(props) =>
          loggedIn ? (
            <IconButton
              icon={<Avatar label="Yaman KATBY" size={28} />}
              onPress={() => setLoggedIn(!loggedIn)}
              {...props}
            />
          ) : (
            <Button
              variant="text"
              title="Login"
              compact
              style={{ marginEnd: 4 }}
              onPress={() => setLoggedIn(!loggedIn)}
              {...props}
            />
          )
        }
      />

      <ImageBackground
        source={image_profile}
        style={{ width: "100%", height: "100%" }}
      >
        <Box>
          <Image
            source={logo_image}
            style={{
              width: "35%",
              height: "20%",
              marginTop: 60,
              marginLeft: 130,
            }}
          ></Image>
          <Text
            variant="h3"
            style={{
              margin: 50,
              color: "white",
              fontSize: 35,
              textAlign: "center",
            }}
          >
            We help startups go faster{" "}
          </Text>
          <Box style={{ paddingLeft: "25%", paddingRight: "25%" }}>
            <Button
              title="  Getting STARTED"
              color="#ED6A9E"
              tintColor="white"
            />
          </Box>
          <Text
            variant="h1"
            style={{
              color: "white",
              textAlign: "center",
              textDecorationLine: "underline",
              fontSize:20,
              marginTop: 20
            }}
          >
            Our Services
          </Text>
          <Box
          style={{
            backgroundColor: "#F5EDDC",
            margin: 20,
            borderRadius: 20,
            marginTop: 100,
            paddingBottom: 40,
            paddingTop: 30,
          }}
        >
          <TextInput
            variant="standard"
            label="adresse mail"
            style={{ margin: 16 }}
          />
          <TextInput
            variant="standard"
            label="password"
            type="password"
            style={{ margin: 16 }}
          />
          <Button title="send" style={{ margin: 16 }} />
          <Button
            variant="text"
            title="create account?"
            style={{ margin: 16 }}
          />
        </Box>
    
        </Box> */}

        {/* <Box
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "28%",
          }}
        >
          <Text
            variant="h3"
            style={{
              margin: 30,
              color: "black",
              fontSize: 40,
              textAlign: "center",
            }}
          >
            We help startups go faster{" "}
          </Text>
          <Box style={{ paddingLeft: "25%", paddingRight: "25%" }}>
            <Button
              title="  Getting STARTED"
              color="#ED6A9E"
              tintColor="white"
            />
          </Box>
        </Box>
        <Box
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "31%",
          }}
        >
          <Text
            variant="h3"
            style={{
              margin: 10,
              color: "white",
              fontSize: 40,
              textAlign: "center",
              textDecorationLine: "underline",
            }}
          >
            Our Process
          </Text>
          <Text
            variant="h3"
            style={{
              margin: 1,
              color: "white",
              fontSize: 20,
              textAlign: "center",
              textDecorationLine: "underline",
            }}
          >
            THE MAGIC IS IN THE DETAILS
          </Text>
          <Text
            variant="h3"
            style={{
              margin: 1,
              color: "white",
              fontSize: 15,
              textAlign: "center",
              textDecorationLine: "underline",
            }}
          >
            We love crafting unique products tailored to our clients’
            requirements, using a customer-centric Agile product delivery
            approach. This ensures the delivery of a continuous flow of valuable
            products and services to clients and users. We do this across
            multiple touch points to help startups and companies achieve their
            goals fast and effectively.
          </Text>
        </Box> */}
        {/* <Box
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "40%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              marginTop: 10,
              fontSize: 30,
              color: "black",
            }}
          >
            About
          </Text>
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              marginTop: 5,
              fontSize: 20,
              color: "black",
            }}
          >
            WE BRING YOUR IDEAS TO LIFE
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginTop: 3,
              fontSize: 20,
              color: "black",
            }}
          >
            We love crafting unique products tailored to our clients’
            requirements, using a customer-centric Agile product delivery
            approach. This ensures the delivery of a continuous flow of valuable
            products and services to clients and users. We do this across
            multiple touch points to help startups and companies achieve their
            goals fast and effectively.
          </Text>
        </Box>
        <Box
          style={{
            backgroundColor: "black",
          }}
        >
          <Image
            source={image_responsive}
            style={{
              width: "100%",
              height: "50%",
              marginTop: 20,
            }}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              marginTop: 3,
              fontSize: 30,
              color: "white",
            }}
          >
            We work on responsive web site
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginTop: 3,
              fontSize: 20,
              color: "white",
            }}
          >
            
          </Text>
         
        </Box>
        <Box
          style={{
            backgroundColor: "#F5EDDC",
            margin: 20,
            borderRadius: 20,
            marginTop: 100,
            paddingBottom: 40,
            paddingTop: 30,
          }}
        >
          <TextInput
            variant="standard"
            label="adresse mail"
            style={{ margin: 16 }}
          />
          <TextInput
            variant="standard"
            label="password"
            type="password"
            style={{ margin: 16 }}
          />
          <Button title="send" style={{ margin: 16 }} />
          <Button
            variant="text"
            title="create account?"
            style={{ margin: 16 }}
          />
        </Box>
    
      </ImageBackground>
    </>
  );
};

export default App;
