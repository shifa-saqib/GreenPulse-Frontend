import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import { Platform, View, ActivityIndicator } from 'react-native';
import { signInAnonymously } from './src/services/authService';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function initialize() {
      try {
        await signInAnonymously();
      } catch (error) {
        console.error('Error signing in anonymously:', error);
      } finally {
        setIsReady(true);
      }
    }
    initialize();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, backgroundColor: '#F6F7F2', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
