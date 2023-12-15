import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submitData = () => {
    navigation.navigate('Home')

    // if (!userName || !password) {
    //   setAlert('all filed required')
    // } else {
    // }
  }
  return (
    <SafeAreaView>

      <View
        style={{
          height: '100%',
        }}>
     <View
     style={{marginTop:'25%'}}
     >
     <View style={styles.logoContainer}>
          <Text >
            hello logo
          </Text>
        </View>
        <ScrollView>

          <View style={styles.formContainer}>

            <TextInput
              style={styles.input}
              onChangeText={(text) => setUserName(text)}
              value={userName}
              placeholder="user Name"
              keyboardType="default"
              id="userName"
            />

            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              keyboardType="numeric"
              id="password"
            />

            <Button
              title="Sign In"
              onPress={submitData}
            />


            <Text
              style={{
                alignSelf: 'center',
                marginTop: 10,

              }}

            >OR</Text>
            <View
            style={styles.loginWithSocialMedia}
            >

            </View>


            <View
              style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}
            >
              <Text>Don,t have an account ?  </Text>
              <Text
                onPress={() => navigation.navigate('Register')}
                style={{ color: '#000' }}
              >Sign Up</Text>

            </View>
          </View>

        </ScrollView>

     </View>
      </View>

      {/* <ScrollView
contentInsetAdjustmentBehavior="automatic"
style={backgroundStyle}>
<Header />
<View
style={{
  backgroundColor: isDarkMode ? Colors.black : Colors.white,
}}>
<Section title="Step One">
  Edit <Text style={styles.highlight}>App.tsx</Text> to change this
  screen and then come back to see your edits.
</Section>
<Section title="See Your Changes">
  <ReloadInstructions />
</Section>
<Section title="Debug">
  <DebugInstructions />
</Section>
<Section title="Learn More">
  Read the docs to discover what to do next:
</Section>
<LearnMoreLinks />
</View>
</ScrollView> */}
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%'
  },
  formContainer: {
    marginHorizontal: 50,
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 15,
  }

});
