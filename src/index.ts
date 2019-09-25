// import { GraphQLModule } from '@graphql-modules/core';
import gql from "graphql-tag";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { importSchema } from "graphql-import";
import { resolver } from "./resolver";

const PORT = 4000

const typeDefs =gql`
    type Query { 
        user(id: String): User
     }
    
    type User {
        name: String
        lastname: String
        age: Int
        id: String
    }
`


const server = new ApolloServer({ 
    playground : {
        settings: {
            "editor.theme": "dark",
        }
    },
    typeDefs,
    resolvers : resolver
 })

const app = express();
server.applyMiddleware({ app })

app.listen(PORT,()=>console.log(`listening on ${PORT}`));
