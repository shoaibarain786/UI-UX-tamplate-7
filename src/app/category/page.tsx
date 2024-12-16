"use client";

import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Heart icons
import { GiCarDoor } from 'react-icons/gi'; // Fuel icon placeholder
import { BiCog } from 'react-icons/bi'; // Transmission icon
import { FaUsers } from 'react-icons/fa'; // Seats icon
import React, { useState } from "react";
import Image from "next/image"; // Importing Image from Next.js
import PickDropSection from "@/components/PickDropSection";
import Link from 'next/link';
const Category = () => {
  // Define the selected values
  const selectedTypes = ["Sport", "SUV"]; 
  const selectedCapacities = ["2 Person", "8 or More"]; 
  const price = 100; 

  const types = [
    { name: "Sport", count: 10 },
    { name: "SUV", count: 12 },
    { name: "MPV", count: 16 },
    { name: "Sedan", count: 20 },
    { name: "Coupe", count: 14 },
    { name: "Hatchback", count: 14 },
  ];

  const capacities = [
    { name: "2 Person", count: 10 },
    { name: "4 Person", count: 14 },
    { name: "6 Person", count: 12 },
    { name: "8 or More", count: 16 },
  ];

  const cars = [
    {
        id: 1,
        name: "Koenigsegg",
        type: "Sport",
        price: 99.00,
        capacity: "90L",
        transmission: "Manual",
        seats: "2 People",
        img: "/car1.png",
        favorite: true,
      },
      {
        id: 2,
        name: "Nissan GT-R",
        type: "Sport",
        price: 80,
        capacity: "80L",
        transmission: "Manual",
        seats: "2 People",
        img: "/car2.png",
        favorite: false,
        originalPrice: 100,
      },
      {
        id: 3,
        name: "Rolls - Royce",
        type: "Sedan",
        price: 96,
        capacity: "70L",
        transmission: "Manual",
        seats: "4 People",
        img: "/car3.png",
        favorite: false,
      },
      {
        id: 4,
        name: "All New Rush",
        type: "SUV",
        price: 72,
        capacity: "70L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car5.png",
        favorite: false,
      },
      {
        id: 5,
        name: "CR-V",
        type: "SUV",
        price: 80,
        capacity: "80L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car6.png",
        favorite: true,
      },
      {
        id: 6,
        name: "All New Terios",
        type: "SUV",
        price: 74,
        capacity: "90L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car7.png",
        favorite: false,
      },
      {
        id: 7,
        name: "CR-V",
        type: "SUV",
        price: 80,
        capacity: "80L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car8.png",
        favorite: false,
      },
      {
        id: 8,
        name: "MG ZX Exclusive",
        type: "Hatchback",
        price: 76,
        capacity: "70L",
        transmission: "Manual",
        seats: "4 People",
        img: "/car9.png",
        favorite: false,
      },
      {
        id: 9,
        name: "New MG ZS",
        type: "SUV",
        price: 80,
        capacity: "80L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car10.png",
        favorite: true,
      },
    
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
    
       

      {/* Main Content */}
      <div className="flex-1 p-6">
        <PickDropSection />
        <div className="mt-6 overflow-x-auto sm:overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white shadow-md rounded-lg p-6 relative w-full sm:w-[350px] md:w-[360px] lg:w-[360px] h-auto"
              >
                {/* Name and Heart Icon - Above Image */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <button>
                    {car.favorite ? (
                      <FaHeart className="w-6 h-6 text-red-500" />
                    ) : (
                      <FaRegHeart className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Image using Next.js Image component with shadow */}
                <div className="mt-24 mb-4 flex justify-center relative">
                  <Image
                    src={car.img}
                    alt={car.name}
                    width={232} // Set the width of the image to match card width
                    height={128} // Adjust the height of the image for better center alignment
                    className="w-auto h-auto object-contain"
                  />
                  {/* Add shadow under the image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white opacity-25 shadow-lg h-8"></div>
                </div>

                {/* Car Details */}
                <div className="flex items-center text-gray-500 text-sm mt-4 sm:mt-20 space-x-4">
                  <div className="flex items-center space-x-1">
                    <GiCarDoor className="w-4 h-4 text-gray-500" />
                    <p>{car.capacity}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BiCog className="w-4 h-4 text-gray-500" />
                    <p>{car.transmission}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUsers className="w-4 h-4 text-gray-500" />
                    <p>{car.seats}</p>
                  </div>
                </div>

                {/* Price and Rent Button */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-semibold">${car.price} / day</span>
                  <Link href="/payment">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    
                  >
                    Rent Now
                  </button>
                  </Link>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
