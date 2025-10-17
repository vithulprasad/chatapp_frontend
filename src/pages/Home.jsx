import React from 'react'
import NavBar from '../components/NavBar'

function Home() {
  return (
    <div className='bg-blue-950 max-w-screen-lg mx-auto'>
 
    <section class="gradient-bg text-white py-16 md:py-24">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Connect with anyone, anywhere</h1>
                <p class="text-xl mb-8 text-indigo-100">A modern chat application that brings people together with seamless communication and powerful features.</p>
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">Start Chatting Now</button>
                    <button class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition duration-200">Watch Demo</button>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
                <div class="bg-white rounded-2xl p-6 shadow-xl max-w-md w-full">
                    <div class="flex items-center space-x-4 mb-6">
                        <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span class="text-indigo-600 font-bold">JD</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">John Doe</h3>
                            <p class="text-sm text-gray-500">Online</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex justify-start">
                            <div class="bg-gray-100 rounded-lg p-3 max-w-xs">
                                <p class="text-gray-700">Hey there! How's the project going?</p>
                                <p class="text-xs text-gray-500 mt-1">10:24 AM</p>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <div class="bg-indigo-600 text-white rounded-lg p-3 max-w-xs">
                                <p>It's going great! Just finished the initial design mockups.</p>
                                <p class="text-xs text-indigo-200 mt-1">10:25 AM</p>
                            </div>
                        </div>
                        <div class="flex justify-start">
                            <div class="bg-gray-100 rounded-lg p-3 max-w-xs">
                                <p class="text-gray-700">Awesome! Can you share them with the team?</p>
                                <p class="text-xs text-gray-500 mt-1">10:26 AM</p>
                            </div>
                        </div>
                        <div class="mt-4 flex">
                            <input type="text" placeholder="Type a message..." class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                            <button class="bg-indigo-600 text-white px-4 rounded-r-lg">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Modern Communication Made Simple</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">ChatConnect revolutionizes how people connect with an intuitive interface, powerful features, and enterprise-grade security.</p>
            </div>
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <svg class="w-full max-w-md mx-auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 100H400V300H100V100Z" fill="#E5E7EB"/>
                        <path d="M120 120H380V200H120V120Z" fill="#FFFFFF"/>
                        <path d="M120 220H250V280H120V220Z" fill="#FFFFFF"/>
                        <circle cx="140" cy="140" r="10" fill="#4F46E5"/>
                        <rect x="160" y="135" width="120" height="10" fill="#E5E7EB"/>
                        <circle cx="140" cy="170" r="10" fill="#4F46E5"/>
                        <rect x="160" y="165" width="80" height="10" fill="#E5E7EB"/>
                        <circle cx="140" cy="240" r="10" fill="#4F46E5"/>
                        <rect x="160" y="235" width="60" height="10" fill="#E5E7EB"/>
                        <circle cx="140" cy="270" r="10" fill="#4F46E5"/>
                        <rect x="160" y="265" width="100" height="10" fill="#E5E7EB"/>
                        <path d="M280 220H380V280H280V220Z" fill="#4F46E5"/>
                        <path d="M300 240L340 270L380 220" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="md:w-1/2 md:pl-12">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6">Why Choose ChatConnect?</h3>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-indigo-100 p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">End-to-End Encryption</h4>
                                <p class="text-gray-600">Your conversations are secure with military-grade encryption that ensures only you and your recipients can read your messages.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-indigo-100 p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">Lightning Fast</h4>
                                <p class="text-gray-600">Experience real-time messaging with minimal latency. Messages are delivered instantly, no matter where you are.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-indigo-100 p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">Cross-Platform</h4>
                                <p class="text-gray-600">Seamlessly switch between devices. ChatConnect works on desktop, mobile, and tablet with synchronized conversations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

  
    
    </div>
  )
}

export default Home