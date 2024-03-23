// index.js

import CreateYourOwnKitty from '@/components/CreateYourOwnKitty';
import DiscoverRestaurants from '@/components/DiscoverRestaurants';
import FoodieParadise from '@/components/FoodieParadise';
import Header from '@/components/Header';
import Login from '@/components/Login';
import 'tailwindcss/tailwind.css';

export default function Home() {
    return (
        <div>
            <Header />
            <Login />
            <CreateYourOwnKitty />
            <DiscoverRestaurants />
            <FoodieParadise />
            {/* Content of the page here */}
        </div>
    );
}
