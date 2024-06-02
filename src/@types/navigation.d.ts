import {DrawerNavigationOptions} from '@react-navigation/drawer'
import {IconName} from '@/components/drawer-button'

export interface CustomOptionProps extends DrawerNavigationOptions {
  iconName: IconName
  isDivider?:boolean
  notifications?: number
  sectionTitle?: strings
}