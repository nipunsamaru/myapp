import {StyleSheet, View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from './Input';
import Button from '../ui/Button';
import {getFormattedDate} from '../../util/date';
import {Colors} from '../../constants/style';

const TasksForm = ({submitButtonLabel, onCancel, onSubmit, defaultValues}) => {
  const [inputs, setInputs] = useState({
    taskName: {
      value: defaultValues ? defaultValues.taskName : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs(curInputs => {
      return {
        ...curInputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  }
  function submitHandler() {
    const taskData = {
      taskName: inputs.taskName.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const taskIsValid = taskData.taskName.trim().length > 0;
    const dateIsValid = taskData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = taskData.description.trim().length > 0;
    if (!taskIsValid || !dateIsValid || !descriptionIsValid) {
      //   Alert.alert('Invalid input', 'Please check your input values');
      setInputs(curInputs => {
        return {
          taskName: {value: curInputs.taskName.value, isValid: taskIsValid},
          date: {value: curInputs.date.value, isValid: dateIsValid},
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(taskData);
  }

  const formIsInvalid =
    !inputs.taskName.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Task</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Task Name"
          invalid={!inputs.description.isValid}
          textInputConfig={{
            onChangeText: inputChangedHandler.bind(this, 'taskName'),
            value: inputs.taskName.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!inputs.description.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    color: Colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default TasksForm;
