import React from "react";

export default function BtnSubmit({
	type = "submit",
	className = "",
	...props
}) {
	return (
		<button
			type={type}
			className={`${className} rounded-lg px-4 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:shadow-outline ring-2 ring-indigo-500 focus:ring-offset-2 w-full mt-5`}
			{...props}
		/>
	);
}
