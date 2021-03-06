/* eslint-disable no-unused-vars */ // TODO: This is workaround

export type Property = {
    name: string,
    type: string,
    optional: boolean
}

export type DocInterface = {
    name: string,
    properties: Property[]
}

export type Resolver = ((data: DocInterface) => string[]) | undefined
