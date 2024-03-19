import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader label="Sign Up" backButton={true} />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={174} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Gap height={24} />
        <Button
          label="Continue"
          backgroundColor="#02CF8E"
          textColor="#020202"
          onSubmit={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});