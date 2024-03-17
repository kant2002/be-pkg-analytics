import { PlatformType } from '@kant2002-diia-inhouse/types'

export interface AnalyticsDevice {
    identifier?: string
    platform: {
        type?: PlatformType
        version?: string
    }
}
