import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

interface systemMessagePerChat {
  uuid: number
  message: string
}

export interface SettingsState {
  systemMessage: string
  systemMessageAllChat: systemMessagePerChat[]
  temperature: number
  top_p: number
}

export function defaultSetting(): SettingsState {
  return {
    systemMessageAllChat: [],
    systemMessage: 'You are ChatGPT, a large language model trained by OpenAI. Follow the user\'s instructions carefully. Respond using markdown.',
    temperature: 0.8,
    top_p: 1,
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
