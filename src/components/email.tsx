import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { colors } from '@/styles/colors'

import { Avatar } from './avatar'

import { EmailDataProps } from '@/util/emails'


interface EmailProps {
  data: EmailDataProps
}

export function Email({ data }: EmailProps) {
  return (
    <View className='w-full flex-row gap-4 '>
      <Avatar
        source={{ uri: data.avatar }}
      />

      <View className='flex-1'>
        <View className='flex-row gap-1 items-center'>
          {data.marker && (
            <MaterialIcons
              name='label-important'
              size={16}
              color={colors.yellow[600]}
            />
          )}
          <Text className='flex-1 text-gray-400 text-lg font-subtitle'>
            {data.name}
          </Text>

          <Text className='text-gray-400 text-sm font-body'>
            {data.date}
          </Text>
        </View>

        <Text
          className='text-base font-body text-gray-400'
          numberOfLines={1}
          lineBreakMode='tail'
        >
          {data.subject}
        </Text>

        <View
          className='flex-row items-center  gap-4'
        >
          <Text
            className='text-base font-body text-gray-400 flex-1'
            numberOfLines={1}
            lineBreakMode='tail'
          >
            {data.message}
          </Text>

          <MaterialIcons
            name={data.start ? "star" : "star-outline"}
            size={22}
            color={ data.start ? colors.yellow[600] : colors.blue[600]}
          />

        </View>
      </View>
    </View>
  )
}