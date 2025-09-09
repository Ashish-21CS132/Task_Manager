import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);



  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className='bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white min-h-screen relative overflow-hidden'>
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
              {/* Hero Section */}
              <div className="text-center max-w-4xl mx-auto">
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'>
                  Welcome to 
                  <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Task Manager App
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Organize your life, boost productivity, and achieve your goals with our intuitive task management platform
                </p>

                <Link to="/signup" className='group inline-flex items-center bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105'>
                  <span className='transition-all duration-300'>Join now to manage your tasks</span>
                  <span className='ml-4 text-base transition-all duration-300 group-hover:translate-x-1'>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                    <p className="text-white/80 text-sm">Instantly add and organize your tasks</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl mb-4">📊</div>
                    <h3 className="text-lg font-semibold mb-2">Smart Analytics</h3>
                    <p className="text-white/80 text-sm">Track your productivity and progress</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl mb-4">🎯</div>
                    <h3 className="text-lg font-semibold mb-2">Goal Focused</h3>
                    <p className="text-white/80 text-sm">Stay focused on what matters most</p>
                  </div>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/60">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-2">★★★★★</span>
                    <span className="text-sm">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">👥</span>
                    <span className="text-sm">50K+ Happy Users</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-sm">1M+ Tasks Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mx-8 mt-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className='text-2xl sm:text-3xl font-bold mb-2'>
                    Welcome back, {authState.user.name}! 👋
                  </h1>
                  <p className="text-indigo-100 text-lg">Ready to tackle your goals today?</p>
                </div>
                <div className="hidden md:block bg-white/20 rounded-lg p-4">
                  <div className="text-3xl">📅</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8 mt-8 mb-8">
              {/* <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="text-green-600 text-xl">✓</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Completed Today</h3>
                    <p className="text-2xl font-bold text-gray-900">8</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="text-blue-600 text-xl">⏰</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Pending</h3>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <div className="text-purple-600 text-xl">⚡</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Productivity</h3>
                    <p className="text-2xl font-bold text-gray-900">85%</p>
                  </div>
                </div>
              </div> */}
            </div>

            <Tasks />
          </>
        )}
      </MainLayout>
    </>
  )
}

export default Home