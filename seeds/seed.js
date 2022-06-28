const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    // drop existing Users and Thoughts
    await User.deleteMany({});
    await Thought.deleteMany({});

    const userSeeds = [
        {
            username: 'ShaneWilmes',
            email:  'shanewilmes@yahoo.com'
        },
        {
            username:  'SteveMurray',
            email: 'stevemurray@gmail.com' 
        },
        {
            username:  'JeffBrightman',
            email: 'jeffbrightman@gmail.com' 
        },
    ];

    const thoughtSeeds = [
        {
            thoughtData: 'I am getting the hang of this!',
            username:  'ShaneWilmes'

        },
        {
            thoughtData: 'I really enjoy Mongoose!',
            username:  'SteveMurray'

        },
        {
            thoughtData: 'I like using Node.js and express!',
            username:  'JeffBrightman'

        },
    ];

    await User.collection.insertMany(userSeeds);
    await Thought.collection.insertMany(thoughtSeeds);

    console.table(userSeeds);
    console.table(thoughtSeeds);
    console.info('Seeding complete!');
    process.exit(0);

});