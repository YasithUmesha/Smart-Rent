import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';

interface HomeProps {
    searchQuery: string;
}

export default function Home({ searchQuery }: HomeProps) {
    return (
        <>
            <Hero />
            <CategoryGrid searchQuery={searchQuery} />
        </>
    );
}
