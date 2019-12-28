/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/camelcase */
import { IContentPackManifest } from './io/ExtraContent'
import { IManufacturerData, ICoreBonusData, IFrameData, IMechWeaponData, IMechSystemData, IWeaponModData, ITalentData } from './interface'


type IFrameData_Fixed = Omit<IFrameData, 'license' | 'license_level' | 'source'>

interface compendiumTagData {
  id: string
  name: string
  description: string
}

type NoBrew<T> = Omit<T, 'brew'>

export type SCHEMA__manifest = IContentPackManifest
export type SCHEMA__manufacturers = NoBrew<IManufacturerData>[]
export type SCHEMA__core_bonus = NoBrew<ICoreBonusData>[]
export type SCHEMA__frames = NoBrew<IFrameData_Fixed>[]
export type SCHEMA__weapons = NoBrew<IMechWeaponData>[]
export type SCHEMA__systems = NoBrew<IMechSystemData>[]
export type SCHEMA__mods = NoBrew<IWeaponModData>[]
export type SCHEMA__talents = NoBrew<ITalentData>[]
// temporary until we have a proper interface for compendium tag data
export type SCHEMA__tags = compendiumTagData[]