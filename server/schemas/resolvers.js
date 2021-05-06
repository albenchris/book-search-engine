const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) return User.find().select('-__v -password');
            else throw new AuthenticationError('You are not logged in.');
        }
    }
};

module.exports = resolvers;
