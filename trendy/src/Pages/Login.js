import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Login = () => {
    return (
        <SafeAreaView>

            <View
                style={{
                    height: '100%'
                }}>
                <View style={styles.logoContainer}>
                    <Text >
                        hello logo
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <Text>fdsfsfj</Text>
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
const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: '40%',
        marginBottom: '20%'
    },
    formContainer: {
        marginHorizontal: 50,
    },

});

export default Login