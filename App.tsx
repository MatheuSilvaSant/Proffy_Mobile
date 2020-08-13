import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import { Poppins_400Regular,Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from  '@expo-google-fonts/archivo';

import AppStack from './src/router/AppStack';

export default function App() {

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }else{
      return (
          <>
            <AppStack />
            <StatusBar style="light" />
          </>
      );
    }
}

