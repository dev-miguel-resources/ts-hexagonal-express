export interface IEntity<Properties, PropertiesUpdate> {
  properties: () => Properties
  delete: () => void
  update: (fields: PropertiesUpdate) => void
}
