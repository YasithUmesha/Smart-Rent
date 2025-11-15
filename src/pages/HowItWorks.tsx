import { Search, MessageCircle, Package, Shield, CreditCard, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
    const steps = [
        {
            icon: Search,
            title: 'Browse & Search',
            description: 'Find the perfect item from our diverse collection of rentals. Use filters and search to discover what you need.',
            color: 'from-violet-500 to-fuchsia-500',
        },
        {
            icon: MessageCircle,
            title: 'Connect with Owner',
            description: 'Message the item owner to discuss details, availability, and arrange pickup or delivery options.',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: CreditCard,
            title: 'Secure Payment',
            description: 'Complete your rental with our secure payment system. Your transaction is protected and insured.',
            color: 'from-emerald-500 to-teal-500',
        },
        {
            icon: Package,
            title: 'Pick Up & Enjoy',
            description: 'Get your item and start using it. All rentals come with insurance coverage for peace of mind.',
            color: 'from-amber-500 to-orange-500',
        },
        {
            icon: ThumbsUp,
            title: 'Return & Review',
            description: 'Return the item on time and leave a review. Help others make informed decisions.',
            color: 'from-rose-500 to-pink-500',
        },
    ];

    const forRenters = [
        'Browse thousands of items across multiple categories',
        'Flexible rental periods from days to months',
        'Secure payment and insurance coverage',
        'Direct communication with item owners',
        'Review system for quality assurance',
    ];

    const forOwners = [
        'List your items in minutes for free',
        'Set your own rental prices and terms',
        'Reach a large community of renters',
        'Secure payment processing',
        'Insurance protection for your items',
    ];

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">How It Works</h1>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Renting and listing items is simple and secure with SmartRent
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-8 mb-20">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Rent in 5 Easy Steps
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-neutral-500 font-bold text-sm">
                                                    STEP {index + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white">
                                                {step.title}
                                            </h3>
                                            <p className="text-neutral-400 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* For Renters */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <Package className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">For Renters</h2>
                        </div>
                        <ul className="space-y-3">
                            {forRenters.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    </div>
                                    <span className="text-neutral-300">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Owners */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">For Item Owners</h2>
                        </div>
                        <ul className="space-y-3">
                            {forOwners.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-violet-500 rounded-full" />
                                    </div>
                                    <span className="text-neutral-300">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-12 text-center space-y-6">
                    <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
                    <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                        Join thousands of users who are already renting and earning on SmartRent
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/browse" className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/20">
                            Browse Items
                        </Link>
                        <Link to="/list-item" className="px-8 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all border border-neutral-800">
                            List Your Item
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
