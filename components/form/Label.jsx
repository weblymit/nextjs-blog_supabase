import React from "react";

export default function Label({ children, htmlFor, className = "", ...props }) {
	return (
		<label
			htmlFor={htmlFor}
			className={`block text-gray-500 pb-2 font-light text-sm first-letter:uppercase  ${className}`}
			{...props}
		>
			{children}
		</label>
	);
}
