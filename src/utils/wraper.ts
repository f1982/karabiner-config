import { FromKeyParam, ToKeyParam, map } from 'karabiner.ts'

export const mapModifierTap = (from: FromKeyParam & ToKeyParam) => {
  return map(from).to(from)
}
export const mapModifierTap2 = (
  from: FromKeyParam & ToKeyParam
) => {
  return map(from).to(from).toIfAlone
}
