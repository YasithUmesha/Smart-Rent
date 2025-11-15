import { useParams } from 'react-router-dom';
import { Music, Lamp, Trophy, GraduationCap, Package, Star, MapPin } from 'lucide-react';

export default function CategoryDetail() {
    const { categoryId } = useParams<{ categoryId: string }>();

    const categoryInfo: Record<string, { title: string; icon: any; gradient: string }> = {
        music: { title: 'Music', icon: Music, gradient: 'from-violet-500 to-fuchsia-500' },
        decoration: { title: 'Decoration', icon: Lamp, gradient: 'from-amber-500 to-orange-500' },
        sports: { title: 'Sports', icon: Trophy, gradient: 'from-emerald-500 to-teal-500' },
        uni: { title: 'Uni Items', icon: GraduationCap, gradient: 'from-blue-500 to-cyan-500' },
        other: { title: 'Other Items', icon: Package, gradient: 'from-rose-500 to-pink-500' },
    };

    const category = categoryInfo[categoryId || 'other'];
    const Icon = category.icon;

    // Mock items for demonstration
    const items = [
        {
            id: 1,
            name: 'Professional Guitar',
            price: 25,
            rating: 4.8,
            reviews: 32,
            location: 'Downtown',
            image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400',
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
    ];

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white">{category.title}</h1>
                        <p className="text-neutral-400 mt-1">{items.length} items available</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-8">
                    <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium">
                        All Items
                    </button>
                    <button className="px-4 py-2 bg-neutral-900 text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-800 border border-neutral-800">
                        Available Now
                    </button>
                    <button className="px-4 py-2 bg-neutral-900 text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-800 border border-neutral-800">
                        Price: Low to High
                    </button>
                    <button className="px-4 py-2 bg-neutral-900 text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-800 border border-neutral-800">
                        Rating
                    </button>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all cursor-pointer"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {!item.available && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        <span className="px-4 py-2 bg-neutral-900 text-white rounded-lg font-medium">
                                            Currently Rented
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 space-y-3">
                                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                    {item.name}
                                </h3>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span>{item.rating}</span>
                                    </div>
                                    <span className="text-neutral-500">({item.reviews})</span>
                                    <div className="flex items-center gap-1 text-neutral-400">
                                        <MapPin className="w-4 h-4" />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                                    <div className="text-white font-semibold">
                                        ${item.price}
                                        <span className="text-neutral-400 text-sm font-normal">/day</span>
                                    </div>
                                    {item.available && (
                                        <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all">
                                            Rent Now
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
