const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);


const thoughtSchema = new Schema(

    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 300
        },
        createdAt: {
            type: Date,
            default: dayjs(),
            get: (date) => dayjs(date).format('MMM Do YYYY [at] h:mm A')
        },
        username: {
            type: String,
            require: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },

        id: false,
    }

);


userSchema.virtual('thoughtCount').get(function () {
    return this.reactions.length
});

const User = model('thought', thoughtSchema);

module.exports = Thought;

























