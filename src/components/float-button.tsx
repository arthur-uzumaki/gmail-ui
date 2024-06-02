
import { TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native"
import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';


type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <View
      className="px-4 py-3 bg-gray-600 rounded-full absolute right-4 bottom-4 gap-1 flex-row items-center "
      activeOpacity={0.7}
      {...rest}
    >
      {icon && (
        <MaterialIcons name={icon} size={22} color={colors.orange[500]} />
      )}
      <Text className="font-subtitle text-orange-500">Escrever</Text>
    </View>
  )
}