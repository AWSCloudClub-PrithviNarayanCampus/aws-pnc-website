const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Define Schemas
const EventSchema = new mongoose.Schema({
    eventTitle: String,
    eventDescription: String,
    deliverables: String,
    eventDate: String,
    guest: [String],
    guestProfile: [String],
    eventType: String,
    venue: String,
    eventLink: String,
    rsvpLink: String,
    createdAt: { type: Date, default: Date.now }
});

const TeamSchema = new mongoose.Schema({
    fullname: String,
    role: String,
    email: String,
    number: String,
    address: String,
    description: String,
    order: String,
    linkedIn: String,
    image: [String],
    facebook: String,
    instagram: String,
    twitter: String,
    github: String,
    createdAt: { type: Date, default: Date.now }
});

const BlogSchema = new mongoose.Schema({
    title: String,
    meta_description: String,
    slug: String,
    textContent: String,
    headerImageUrl: [String],
    author: String,
    category: String,
    hasPublished: Boolean,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
    userId: String,
    fullname: String,
    email: String,
    profileImage: String,
    role: String,
    createdAt: { type: Date, default: Date.now }
});

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

// Create Models
const EventModel = mongoose.model('EventModel', EventSchema);
const TeamModel = mongoose.model('TeamModel', TeamSchema);
const BlogModel = mongoose.model('BlogModel', BlogSchema);
const UserModel = mongoose.model('UserModel', UserSchema);
const ContactModel = mongoose.model('ContactModel', ContactSchema);

// Helper function to convert MongoDB $oid to ObjectId
function convertMongoDBData(data) {
    if (Array.isArray(data)) {
        return data.map(item => convertMongoDBData(item));
    }
    if (data && typeof data === 'object') {
        const converted = { ...data };
        if (converted._id && converted._id.$oid) {
            converted._id = new mongoose.Types.ObjectId(converted._id.$oid);
        }
        if (converted.createdAt && converted.createdAt.$date) {
            converted.createdAt = new Date(converted.createdAt.$date);
        }
        if (converted.updatedAt && converted.updatedAt.$date) {
            converted.updatedAt = new Date(converted.updatedAt.$date);
        }
        return converted;
    }
    return data;
}

async function seed() {
    try {
        console.log('🔌 Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URL, {
            socketTimeoutMS: 45000,
            serverSelectionTimeoutMS: 45000,
            connectTimeoutMS: 45000,
        });
        console.log('✅ Connected to MongoDB\n');

        // Clear existing collections
        console.log('🗑️  Clearing existing collections...');
        await Promise.all([
            EventModel.deleteMany({}),
            TeamModel.deleteMany({}),
            BlogModel.deleteMany({}),
            UserModel.deleteMany({}),
            ContactModel.deleteMany({})
        ]);
        console.log('✅ Collections cleared\n');

        // Load and insert data
        const results = {};

        // Events
        try {
            const eventsPath = 'd:\\eventmodels.json';
            if (fs.existsSync(eventsPath)) {
                console.log('📥 Loading events...');
                const eventsData = JSON.parse(fs.readFileSync(eventsPath, 'utf-8'));
                const convertedEvents = convertMongoDBData(eventsData);
                await EventModel.insertMany(convertedEvents);
                results.events = convertedEvents.length;
                console.log(`✅ Inserted ${convertedEvents.length} events\n`);
            } else {
                console.log('⚠️  eventmodels.json not found at d:\\eventmodels.json\n');
            }
        } catch (error) {
            console.error('❌ Error loading events:', error.message);
        }

        // Users
        try {
            const usersPath = 'd:\\usermodels.json';
            if (fs.existsSync(usersPath)) {
                console.log('📥 Loading users...');
                const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
                const convertedUsers = convertMongoDBData(usersData);
                await UserModel.insertMany(convertedUsers);
                results.users = convertedUsers.length;
                console.log(`✅ Inserted ${convertedUsers.length} users\n`);
            } else {
                console.log('⚠️  usermodels.json not found at d:\\usermodels.json\n');
            }
        } catch (error) {
            console.error('❌ Error loading users:', error.message);
        }

        // Blogs
        try {
            const blogsPath = path.join(__dirname, 'blogs.json');
            // Try multiple locations
            let finalPath = blogsPath;
            if (!fs.existsSync(finalPath)) {
                finalPath = 'd:\\blogs.json';
            }
            if (!fs.existsSync(finalPath)) {
                finalPath = 'd:\\test.blogmodels.json';
            }

            if (fs.existsSync(finalPath)) {
                console.log('📥 Loading blogs...');
                const blogsData = JSON.parse(fs.readFileSync(finalPath, 'utf-8'));
                const convertedBlogs = convertMongoDBData(blogsData);
                await BlogModel.insertMany(convertedBlogs);
                results.blogs = convertedBlogs.length;
                console.log(`✅ Inserted ${convertedBlogs.length} blogs\n`);
            } else {
                console.log('⚠️  Blogs JSON file not found\n');
            }
        } catch (error) {
            console.error('❌ Error loading blogs:', error.message);
        }

        console.log('\n========== SEEDING COMPLETE ==========');
        console.log(JSON.stringify(results, null, 2));
        console.log('====================================\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
}

seed();
