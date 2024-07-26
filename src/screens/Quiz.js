import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const goals = [
  'Find A Mentor',
  'Expand My Connections',
  'Learn A New Skill',
  'Get A Internship/Job',
  // Add more goals as needed
];

const Quiz = ({navigation}) => {
  const [selectedGoals, setSelectedGoals] = useState(new Set());

  const handleSelectGoal = (goal) => {
    if (selectedGoals.has(goal)) {
      selectedGoals.delete(goal);
    } else {
      selectedGoals.add(goal);
    }
    // Update the state to reflect the changes
    setSelectedGoals(new Set(selectedGoals));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>What are your career goals for 2024?</Text>
      <Text style={styles.subHeader}>select all that apply.</Text>
      <View style={styles.goalsList}>
        {goals.map((goal, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.goalButton,
              { backgroundColor: selectedGoals.has(goal) ? '#7a42f4' : 'white' },
            ]}
            onPress={() => handleSelectGoal(goal)}
          >
            <Text
              style={[
                styles.goalButtonText,
                { color: selectedGoals.has(goal) ? 'white' : '#7a42f4' },
              ]}
            >
              {goal}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.enterButton}
      onPress={() => navigation.navigate('Quiz2')}>
        <Text style={styles.enterButtonText}>Enter</Text>
      </TouchableOpacity>
      <Text style={styles.progress}>1/10</Text>
    </View>
  );
};
export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6fa', // Light purple background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7a42f4', // Purple text color
    marginBottom: 10
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  goalsList: {
    width: '100%', // You may want to adjust this
    alignItems: 'center',
  },
  goalButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 5,
    width: '80%', // Adjust width as necessary
    alignItems: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
  },
  goalButtonText: {
    color: '#7a42f4', // Purple text color
    fontSize: 20,
  },
  enterButton: {
    backgroundColor: '#7a42f4', // Purple background color for the button
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
  },
  enterButtonText: {
    color: 'white',
    fontSize: 18,
  },
  progress: {
    fontSize: 25,
    color: '#7a42f4', // Purple text color
    marginTop: 20,
  },
});
