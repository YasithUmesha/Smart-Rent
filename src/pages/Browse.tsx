import CategoryGrid from '../components/CategoryGrid';

interface BrowseProps {
    searchQuery: string;
}

export default function Browse({ searchQuery }: BrowseProps) {
    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-4 mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">Browse All Categories</h1>
                    <p className="text-lg text-neutral-400 max-w-2xl">
                        Discover our complete collection of rental items across all categories
                    </p>
                </div>
                <CategoryGrid searchQuery={searchQuery} />
            </div>
        </div>
    );
}
