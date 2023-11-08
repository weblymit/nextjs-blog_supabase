"use client";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Hamburger({ handleOpen, ...props }) {
	// usestate show or not

	return <HiMenuAlt1 className='text-4xl' onClick={handleOpen} {...props} />;
}
