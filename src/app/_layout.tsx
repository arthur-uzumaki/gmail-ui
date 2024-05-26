import '@/styles/global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"

import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router'
import { Loading } from '@/components/loading';
export default function Layout() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <Loading/>
  }
  return (
    <GestureHandlerRootView className='flex-1'>
      <StatusBar style='light' />
      <Slot />
    </GestureHandlerRootView>
  )
}