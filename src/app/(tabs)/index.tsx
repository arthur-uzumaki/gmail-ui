

import { Text, View } from 'react-native';
import { Input } from '@/components/input';
import { MenuButton } from '@/components/menu-button';
import { Avatar } from '@/components/avatar';
export default function Home() {
  return (
    <View className='flex-1 bg-gray-900 pt-14 P-4 '>
      <Input>
        <MenuButton />
        <Input.Field placeholder='Pesquisar no e-mail' />
        <Avatar
          source={{ uri: 'https://github.com/Arttanjeiro.png' }}
          size='small'
        />
      </Input>
    </View>
  )
}