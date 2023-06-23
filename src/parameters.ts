import { defaultComplexModificationsParameters } from "karabiner.ts"

export const initializeParams = () => {
  defaultComplexModificationsParameters['basic.simultaneous_threshold_milliseconds'] = 50
  defaultComplexModificationsParameters['basic.to_if_alone_timeout_milliseconds'] = 1000
  defaultComplexModificationsParameters['basic.to_if_held_down_threshold_milliseconds'] = 500
  defaultComplexModificationsParameters['basic.to_delayed_action_delay_milliseconds'] = 500
}