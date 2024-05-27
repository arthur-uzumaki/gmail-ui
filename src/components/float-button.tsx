
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';


export function FloatButton() {
  return (
    <TouchableOpacity
      className="px-8 py-4 bg-gray-600 rounded-full
       absolute bottom-4 right-5 flex-row gap-1 items-center"

    >
      <MaterialIcons name='edit' size={22} color={colors.orange[500]} />
    </TouchableOpacity>
  )
}