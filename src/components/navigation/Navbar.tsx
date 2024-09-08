import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <header className="p-2 mb-2 bg-slate-500 text-slate-100">
            <nav className="">
                <ul className="flex gap-2">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pokemons">All pokemons</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;