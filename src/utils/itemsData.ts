// Utility to get all items from all categories for searching

export interface Item {
    id: number;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    location: string;
    image: string;
    available: boolean;
    categoryId: string;
    categoryName: string;
}

export const getAllItems = (): Item[] => {
    const categoryItems: Record<string, any[]> = {
        music: [
            {
                id: 1,
                name: 'Professional Guitar',
                price: 25,
                rating: 4.8,
                reviews: 32,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Keyboard Synthesizer',
                price: 35,
                rating: 4.9,
                reviews: 28,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Drum Set',
                price: 50,
                rating: 4.7,
                reviews: 45,
                location: 'Eastside',
                image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Studio Microphone',
                price: 15,
                rating: 4.9,
                reviews: 67,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Violin with Case',
                price: 30,
                rating: 4.6,
                reviews: 21,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400',
                available: true,
            },
            {
                id: 6,
                name: 'DJ Controller',
                price: 40,
                rating: 4.8,
                reviews: 38,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400',
                available: true,
            },
        ],
        decoration: [
            {
                id: 1,
                name: 'Vintage Table Lamps',
                price: 15,
                rating: 4.7,
                reviews: 24,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'LED String Lights',
                price: 12,
                rating: 4.9,
                reviews: 45,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Wedding Arch Set',
                price: 80,
                rating: 4.8,
                reviews: 18,
                location: 'Eastside',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Balloon Decoration Kit',
                price: 20,
                rating: 4.6,
                reviews: 52,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Folding Chairs (Set of 10)',
                price: 35,
                rating: 4.5,
                reviews: 31,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400',
                available: true,
            },
        ],
        sports: [
            {
                id: 1,
                name: 'Mountain Bike',
                price: 30,
                rating: 4.8,
                reviews: 42,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Tennis Racket Set',
                price: 18,
                rating: 4.7,
                reviews: 28,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Camping Tent (4 Person)',
                price: 40,
                rating: 4.9,
                reviews: 56,
                location: 'Eastside',
                image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Kayak with Paddle',
                price: 45,
                rating: 4.8,
                reviews: 33,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Golf Club Set',
                price: 35,
                rating: 4.6,
                reviews: 24,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400',
                available: true,
            },
            {
                id: 6,
                name: 'Surfboard',
                price: 28,
                rating: 4.7,
                reviews: 19,
                location: 'Eastside',
                image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400',
                available: true,
            },
        ],
        uni: [
            {
                id: 1,
                name: 'Scientific Calculator',
                price: 8,
                rating: 4.6,
                reviews: 47,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Engineering Textbook Set',
                price: 25,
                rating: 4.5,
                reviews: 31,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Laptop Stand & Accessories',
                price: 12,
                rating: 4.8,
                reviews: 54,
                location: 'Eastside',
                image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Study Desk Lamp',
                price: 10,
                rating: 4.7,
                reviews: 38,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Art Supplies Kit',
                price: 20,
                rating: 4.9,
                reviews: 26,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400',
                available: true,
            },
        ],
        video: [
            {
                id: 1,
                name: 'DSLR Camera Kit',
                price: 60,
                rating: 4.9,
                reviews: 64,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'LED Ring Light',
                price: 20,
                rating: 4.8,
                reviews: 52,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Video Tripod Pro',
                price: 25,
                rating: 4.7,
                reviews: 38,
                location: 'Eastside',
                image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Drone with 4K Camera',
                price: 75,
                rating: 4.9,
                reviews: 41,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'GoPro Action Camera',
                price: 35,
                rating: 4.8,
                reviews: 57,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
                available: true,
            },
            {
                id: 6,
                name: 'Studio Lighting Kit',
                price: 50,
                rating: 4.7,
                reviews: 29,
                location: 'Eastside',
                image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=400',
                available: true,
            },
        ],
        other: [
            {
                id: 1,
                name: 'Power Tools Set',
                price: 35,
                rating: 4.6,
                reviews: 43,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Pressure Washer',
                price: 40,
                rating: 4.8,
                reviews: 36,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Projector & Screen',
                price: 45,
                rating: 4.7,
                reviews: 28,
                location: 'Eastside',
                image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Party Speaker System',
                price: 30,
                rating: 4.9,
                reviews: 51,
                location: 'Downtown',
                image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Ladder (Extension)',
                price: 18,
                rating: 4.5,
                reviews: 22,
                location: 'Westside',
                image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400',
                available: true,
            },
        ],
    };

    const categoryNames: Record<string, string> = {
        music: 'Music',
        decoration: 'Decoration',
        sports: 'Sports',
        uni: 'Uni Items',
        video: 'Video',
        other: 'Other Items',
    };

    const allItems: Item[] = [];
    
    Object.keys(categoryItems).forEach((categoryId) => {
        categoryItems[categoryId].forEach((item) => {
            allItems.push({
                ...item,
                categoryId,
                categoryName: categoryNames[categoryId],
            });
        });
    });

    return allItems;
};

export const searchItems = (query: string): Item[] => {
    if (!query.trim()) {
        return [];
    }
    
    const allItems = getAllItems();
    const lowerQuery = query.toLowerCase();
    
    return allItems.filter((item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.location.toLowerCase().includes(lowerQuery) ||
        item.categoryName.toLowerCase().includes(lowerQuery)
    );
};

