import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
// import CheckBox from '@react-native-community/checkbox';

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkPasswordError, setCheckPasswordError] = React.useState('');
  const [showCheckPassword, setShowCheckPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);


  const [checkPassword, setCheckPassword] = React.useState('');
  const showPasswordFunction = () => {
    setShowPassword(!showPassword);
  }
  const showCheckPasswordFunction = () => {
    setShowCheckPassword(!showCheckPassword);
  }
  const submitData=()=>{
    if(!firstName||!lastName||!email||!password||!checkPassword){
      setAlert('all filed required')
    }else{
      const user = {
        firstName: firstName,
        lastName: lastName,
        email:email,
        password: password,
      };
  
      // send a POST  request to the backend API to register the user



      // axios
      //   .get("http://localhost:3000/api/v1/users")
      //   .then((response) => {
      //     console.log(response);
      //     console.log(
      //       "Registration successful",
      //       "You have been registered Successfully"
      //     );
      //     // setName("");
      //     // setEmail("");
      //     // setPassword("");
      //   })
      //   .catch((error) => {
      //     console.log(
      //       "Registration Error",
      //       "An error occurred while registering"
      //     );
      //     console.log("registration failed", error);
      //   });
    return fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
 
    .catch(error => {
      console.error("error",error);
    });

    }
  }

  return (
    <SafeAreaView>

      <View
        style={{
          height: '100%',
          backgroundColor: 'white'
        }}>
        <View style={styles.logoContainer}>
          <Text >
            hello logo
          </Text>
        </View>
        <ScrollView>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
              placeholder="First Name"
              keyboardType="default"
              id="firstName"
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setLastName(text)}
              value={lastName}
              placeholder="Last Name"
              keyboardType="default"
              id="lastName"
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
              inputMode="email"
              id="email"
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
            {checkPasswordError &&
              <Text style={{ color: 'red' }}>
                {checkPasswordError}
              </Text>
            }
            <View style={{ position: 'relative' }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setCheckPassword(text)}
                secureTextEntry={!showCheckPassword}
                value={checkPassword}
                placeholder="Check Password"
                keyboardType="numeric"
                id="checkPassword"
                onBlur={() => {
                  if (password !== checkPassword) {
                    setCheckPasswordError('password didnot much')
                  }
                }}
                onFocus={()=>{
                  setCheckPasswordError('')

                }}
              />

              {/*<Feather
                  name="eye-off"
                  size={24}
                  color="#aaa"
                  style={{ position: 'absolute', bottom: 29, right: 0 }}
                  onPress={toggleShowPassword}
                />
                :
                <Feather
                name="eye-off"
                size={24}
                color="#aaa"
                style={{ position: 'absolute', bottom: 29, right: 0 }}
                onPress={toggleShowPassword}
              />

              } */}
              {/* <MaterialCommunityIcons
                name={showCheckPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#aaa"
                style={{ position: 'absolute', bottom: 29, right: 0 }}
                onPress={toggleShowPassword}
              /> */}

            </View>
            <View style={{marginBottom:10}}>
              
        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
            <Button
              title="Create an account"
              onPress={submitData}
            />
               <View
               style={{flexDirection:'row', marginTop:20,alignSelf:'center'}}
               >
            <Text>OR </Text>
            <Text
            onPress={() => navigation.navigate('Login')}
            style={{color:'#000'}}
            >Login to your account</Text>

          </View>
          </View>
       
        </ScrollView>
      </View >
    </SafeAreaView >
  )
}

export default RegisterScreen

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
