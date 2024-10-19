import React, { useState } from 'react';
import { StyleSheet, Text, Switch, View, Button } from 'react-native';

const Settings = ({ navigation }: any) => {
  // State to track whether a feature is enabled
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(false);

  // Function to toggle the feature on or off
  const toggleSwitch = () => setIsFeatureEnabled((previousState) => !previousState);

  // Function to handle saving the settings
  const handleSaveSettings = () => {
    // Here you can save the settings 
    console.log('Feature Enabled:', isFeatureEnabled);

    // Navigate back to the previous screen after saving the settings
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      {/* Setting Option */}
      <View style={styles.settingContainer}>
        <Text style={styles.label}>Enable Feature:</Text>
        <Switch value={isFeatureEnabled} onValueChange={toggleSwitch} />
      </View>

      {/* Save Button */}
      <Button title="Save Settings" onPress={handleSaveSettings} />

      {/* Cancel Button */}
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

// Define styles for the Settings screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

// Export the Settings component as the default export
export default Settings;