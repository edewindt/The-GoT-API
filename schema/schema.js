const Character = require("../models/character")
const Family = require("../models/character")
const Media = require("../models/media")
const Quote = require("../models/quote")
const graphql = require('graphql')
const { GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = graphql

const CharacterType = new GraphQLObjectType({
    name:"Character",
    description:"Describes a Character",
    fields: () => ({
    id:{type: new GraphQLNonNull(GraphQLString)},
    firstname: {type: new GraphQLNonNull(GraphQLString)},
    lastname: {type: new GraphQLNonNull(GraphQLString)},
    fullname: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
//   quoteid:String,
//   familyid:String,
//   mediaid:String,
})
})

const FamilyType = new GraphQLObjectType({
    name: "Family",
    description: "Describes a House or Family",
    fields: () =>({
    house: {type: new GraphQLNonNull(GraphQLString)},
    region: {type: new GraphQLNonNull(GraphQLString)},
    sigil: {type: new GraphQLNonNull(GraphQLString)},
    blazon: {type: new GraphQLNonNull(GraphQLString)},
    seat: {type: new GraphQLNonNull(GraphQLString)},
    words:{type: GraphQLString},
    origin: {type: GraphQLString},
    notes: {type: GraphQLString},
    //characters: {type: new GraphQLList()}
})
})

const MediaType = new GraphQLObjectType({
    name:"Media",
    description:"Includes links to various Media",
    fields: () =>({
    image: {type: new GraphQLNonNull(GraphQLString)},
    gif: {type: new GraphQLNonNull(GraphQLString)},
    poster: {type: GraphQLString},
    wallpaper: {type: GraphQLString},
    art: {type: GraphQLString}
})
})

const QuoteType = new GraphQLObjectType({
    name:"Quote",
    description:"Describes a Quote",
    fields: () =>({
    body: {type: new GraphQLNonNull(GraphQLString)},
    episode: {type: GraphQLInt},
    season: {type: GraphQLInt},
    author: {type: new GraphQLNonNull(GraphQLString)}
})
})

const RootQueryType = new GraphQLObjectType({
    name: "RootQueryType",
    description:"The Root Query",
    fields: {
    character:{
        type:CharacterType,
        description:"A Single Character",
        args:{
        id:{ type: GraphQLString}
        }
    },
    characters:{
        type:new GraphQLList(CharacterType),
        description:"A list of all characters",
        resolve(parent, args){

        }
    },
    family:{
        type:FamilyType,
        description:"A Single Family or House",
        args:{
        id:{ type: GraphQLString}
        }
    },
    families:{
        type:new GraphQLList(FamilyType),
        description:"A list of all families",
        resolve(parent, args){
            
        }
    },
    media:{
        type:MediaType,
        description:"Media for a single Character",
        args:{
        id:{ type: GraphQLString}
        }
    },
    medias:{
        type:new GraphQLList(MediaType),
        description:"A list of all media",
        resolve(parent, args){
            
        }
    },
    quote:{
        type:QuoteType,
        description:"A Single Quote",
        args:{
        id:{ type: GraphQLString}
        }
    },
    quotes:{
        type:new GraphQLList(QuoteType),
        description:"A list of all quotes",
        resolve(parent, args){
            
        }
    }
    }
})

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "The Root Mutation",
    fields: () => ({
    addCharacter:{
        type:CharacterType,
        description:"Add a character",
        args:{
            
        },
        resolve(parent, args){

        }
    },
    addFamily:{
        type:,
        description:,
        args:{

        },
        resolve(parent, args){
            
        }
    },
    addMedia:{
        type:,
        description:,
        args:{

        },
        resolve(parent, args){
            
        }
    },
    addQuote:{
        type:,
        description:,
        args:{

        },
        resolve(parent, args){
            
        }
    }
    })
})