import { Drawer } from "expo-router/drawer"

import { CustomOptionProps } from "@/@types/navigation"
import { DrawerContent } from "@/components/drawer-content"

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{ headerShown: false, drawerStyle: { width: "75%" } }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: "Todas as Caixas de entrada",
            iconName: "all-inbox",
            notifications: 5,
            isDivider: true,
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="inbox"
        options={
          {
            title: "Entrada",
            iconName: "inbox",
            notifications: 3,
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="starts"
        options={
          {
            title: "Com estrelas",
            iconName: "star-outline",
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="postponed"
        options={
          {
            title: "Adiados",
            iconName: "schedule",
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="important"
        options={
          {
            title: "Importante",
            iconName: "label-important-outline",
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="send"
        options={
          {
            title: "Enviado",
            iconName: "send",
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="programmed"
        options={
          {
            title: "Programado",
            iconName: "schedule-send",
          } as CustomOptionProps
        }
      />

      <Drawer.Screen
        name="exit-box"
        options={
          {
            title: "Caixa de saída",
            iconName: "outbox",
          } as CustomOptionProps
        }
      />

      <Drawer.Screen
        name="sketch"
        options={
          {
            title: "Rascunho",
            iconName: "note",
          } as CustomOptionProps
        }
      />

      <Drawer.Screen
        name="all-emails"
        options={
          {
            title: "Todos os e-mails",
            iconName: "email",
          } as CustomOptionProps
        }
      />

      <Drawer.Screen
        name="span"
        options={
          {
            title: "Spam",
            iconName: "info-outline",
          } as CustomOptionProps
        }
      />

      <Drawer.Screen
        name="trash"
        options={
          {
            title: "Lixeira",
            iconName: "delete-outline",
            isDivider: true,
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="read"
        options={
          {
            title: "Lixeira",
            iconName: "label-important-outline",
            sectionTitle: "Marcadores",
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="general"
        options={
          {
            title: "Lixeira",
            iconName: "label-important-outline",
            isDivider: true,
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="new-marker"
        options={
          {
            title: "Criar novo",
            iconName: "add",
            isDivider: true,
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="config"
        options={
          {
            title: "Configurações",
            iconName: "settings",
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="feedback"
        options={
          {
            title: "Enviar feedback",
            iconName: "feedback",
          } as CustomOptionProps
        }
      />
      <Drawer.Screen
        name="help"
        options={
          {
            title: "Ajuda",
            iconName: "help-outline",
          } as CustomOptionProps
        }
      />
    </Drawer>
  )
}