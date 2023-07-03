import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'


// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
//
// const typesArray = loadFilesSync(path.join(__dirname, '.'), {
//     recursive: true,
//     extensions: ['graphql'],
// })



const resolversArray = loadFilesSync("src/resolvers/query/*.ts", {
    recursive: true,
    extensions: ['ts'],
})



const newResolversArray = resolversArray.slice(1)

console.log(newResolversArray)

// export const typeDefs = mergeTypeDefs(typesArray)
export const resolversTugsuu = mergeResolvers(newResolversArray)