import { Upload, DollarSign } from 'lucide-react';

export default function ListItem() {
    return (
        <div className="min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            List Your <span className="bg-gradient-to-r from-white to-[#4ECDC4]  bg-clip-text text-transparent">Item</span>
                        </h1>
                        <p className="text-lg text-neutral-400">
                            Start earning by renting out your items to others
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
                        {/* Item Details */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-white">Item Details</h2>
                            
                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-2">
                                    Item Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Professional DSLR Camera"
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-2">
                                    Category
                                </label>
                                <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50">
                                    <option>Select a category</option>
                                    <option>Music</option>
                                    <option>Video</option>
                                    <option>Decoration</option>
                                    <option>Sports</option>
                                    <option>Uni Items</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Describe your item in detail..."
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                                />
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-white">Pricing</h2>
                            
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                <input
                                    type="number"
                                    placeholder="Daily rental price"
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                                />
                            </div>
                        </div>

                        {/* Photos */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-white">Photos</h2>
                            
                            <div className="border-2 border-dashed border-neutral-800 rounded-lg p-8 text-center hover:border-neutral-700 transition-colors cursor-pointer">
                                <Upload className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
                                <p className="text-neutral-300 font-medium mb-1">
                                    Click to upload or drag and drop
                                </p>
                                <p className="text-sm text-neutral-500">
                                    PNG, JPG up to 10MB
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-white">Location</h2>
                            
                            <input
                                type="text"
                                placeholder="Your location"
                                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                            />
                        </div>

                        {/* Submit Button */}
                        <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/20">
                            List Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
