import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getDashboardLink = () => {
        if (!user) return '/';
        if (user.role === 'admin') return '/admin-dashboard';
        if (user.role === 'doctor') return '/doctor-dashboard';
        return '/dashboard';
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm z-50 sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 md:h-20">
                    <div className="flex items-center cursor-pointer group" onClick={() => navigate('/')}>
                        <div className="shrink-0 flex items-center gap-2">
                            <img src="/logo.jpg" alt="MediScan Logo" className="h-10 md:h-14 w-auto rounded-lg" />
                            <span className="text-xl font-bold bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent hidden xs:block">
                                MediScan
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {!user ? (
                            <>
                                <Link to="/" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Home</Link>
                                <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">About Us</Link>
                            </>
                        ) : (
                            <div className="flex items-center gap-6">
                                {user.role === 'patient' && user.plan === 'premium' && (
                                    <span className="bg-amber-50 text-amber-600 text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 border border-amber-200 uppercase tracking-tighter">
                                        <i className="fa-solid fa-crown"></i> Pro
                                    </span>
                                )}

                                <Link
                                    to={getDashboardLink()}
                                    className="text-sm font-medium text-slate-600 hover:text-green-600 transition flex items-center gap-2"
                                >
                                    Dashboard
                                </Link>

                                <div className="h-6 w-px bg-slate-200"></div>

                                <div className="flex items-center gap-4">
                                    <Link
                                        to="/profile"
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="relative">
                                            {user.profileImage ? (
                                                <img
                                                    src={user.profileImage}
                                                    alt="Profile"
                                                    className="w-10 h-10 rounded-full object-cover border-2 border-slate-100 group-hover:border-blue-400 transition"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition">
                                                    <i className={`fa-solid ${user.role === 'admin' ? 'fa-shield-halved' : user.role === 'doctor' ? 'fa-user-doctor' : 'fa-circle-user'} text-lg`}></i>
                                                </div>
                                            )}
                                        </div>
                                    </Link>

                                    <button
                                        onClick={() => {
                                            logout();
                                            navigate('/');
                                        }}
                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                                        title="Logout"
                                    >
                                        <i className="fa-solid fa-right-from-bracket text-lg"></i>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 relative">
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 bg-white ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 pt-4 pb-6 space-y-3">
                    {!user ? (
                        <div className="space-y-3">
                            <Link
                                to="/"
                                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <i className="fa-solid fa-house mr-3 text-slate-400"></i> Home
                            </Link>
                            <Link
                                to="/about"
                                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <i className="fa-solid fa-circle-info mr-3 text-slate-400"></i> About Us
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 px-4 py-3 mb-2 bg-slate-50 rounded-2xl">
                                {user.profileImage ? (
                                    <img src={user.profileImage} alt="" className="w-10 h-10 rounded-full border border-slate-200" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400">
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                )}
                                <div>
                                    <div className="text-sm font-bold text-slate-900">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">{user.plan || 'Free'} Plan</div>
                                </div>
                            </div>
                            <Link
                                to={getDashboardLink()}
                                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <i className="fa-solid fa-chart-line mr-3 text-slate-400"></i> Dashboard
                            </Link>
                            <Link
                                to="/profile"
                                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <i className="fa-solid fa-user-gear mr-3 text-slate-400"></i> Settings
                            </Link>
                            <button
                                onClick={() => {
                                    logout();
                                    navigate('/');
                                    setIsMenuOpen(false);
                                }}
                                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-red-500 hover:bg-red-50 active:bg-red-100 transition mt-4"
                            >
                                <i className="fa-solid fa-right-from-bracket mr-3"></i> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
