import { request, gql, GraphQLClient } from 'graphql-request'
import { getSdk, SdkFunctionWrapper, UserLoginDocument, UserLoginQuery } from 'graphql-generated'


const endpoint = 'https://sp-api.kpc-dev.com'

export const client = new GraphQLClient(endpoint)

// Middlewares
const catchErrorWrapper: SdkFunctionWrapper = async <T>(action: () => Promise<T>): Promise<T> => {
    try {
        return await action()
    } catch(error) {
        const parsedError = JSON.parse(JSON.stringify(error))

        console.log(parsedError?.response?.errors)

        return await action()
    }
}


const graphqlClient = getSdk(client, catchErrorWrapper)


export default graphqlClient