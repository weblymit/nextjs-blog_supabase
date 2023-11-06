import React from "react";

export default function Textarea({ className = "", errors, ...props }) {
	return (
		<>
			<textarea cols='30' rows='10' className={className} {...props}></textarea>
			<p className='errMsg'>{errors?.message}</p>
		</>
	);
}
