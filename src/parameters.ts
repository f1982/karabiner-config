import { defaultComplexModificationsParameters } from "karabiner.ts"

export const initializeParams = () => {
  defaultComplexModificationsParameters['basic.simultaneous_threshold_milliseconds'] = 42
  defaultComplexModificationsParameters['basic.to_if_alone_timeout_milliseconds'] = 1001
  defaultComplexModificationsParameters['basic.to_if_held_down_threshold_milliseconds'] = 501
  defaultComplexModificationsParameters['basic.to_delayed_action_delay_milliseconds'] = 501
}