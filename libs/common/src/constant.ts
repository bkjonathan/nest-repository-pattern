export const DEFAULT_TYPEORM_TYPE = 'mysql'
export const DEFAULT_TYPEORM_HOST = 'localhost'
export const DEFAULT_TYPEORM_PORT = 3308
export const DEFAULT_TYPEORM_USERNAME = 'root'
export const DEFAULT_TYPEORM_PASSWORD = 'RootPwd'
export const DEFAULT_TYPEORM_DATABASE = 'nest_test'
export const DEFAULT_TYPEORM_SYNCHRONIZE = true
export const DEFAULT_TYPEORM_AUTOLOAD_ENTITIES = true

export type GenericFunction = (...args: any[]) => any

export type GenericClass = Record<string, any>
