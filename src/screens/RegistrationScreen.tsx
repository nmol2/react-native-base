import React, { FunctionComponent, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface RegistrationScreenProps {}

const RegistrationScreen: FunctionComponent<RegistrationScreenProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDob] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    // You can implement your registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNumber);
    console.log('DOB:', dob);
    console.log('Gender:', gender);
  };

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    const {
      type,
      nativeEvent: { timestamp, utcOffset },
    } = event;
    if (date !== undefined) {
      setShowDatePicker(Platform.OS === 'ios'); // Hide the picker on iOS immediately
      setDob(date);
    }
    console.log(type, timestamp, utcOffset, date);
  };

  const handleShowDatePicker = () => {
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        onChangeText={text => setMobileNumber(text)}
        value={mobileNumber}
      />

      <TouchableOpacity
        style={styles.datePickerInput}
        onPress={handleShowDatePicker}>
        <Text style={styles.datePickerInputText}>
          {dob ? dob.toLocaleDateString() : 'Select DOB'}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dob}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}

      <View style={styles.pickerInput}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={gender}
          onValueChange={itemValue => setGender(itemValue)}>
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  datePickerInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  datePickerInputText: {
    color: 'black',
    fontSize: 14,
  },
  datePickerButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  datePickerButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  pickerInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    justifyContent: 'center',
  },
  picker: {
    color: 'black',
    fontSize: 12,
  },
  pickerItem: {
    color: 'gray',
    fontSize: 12,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegistrationScreen;
