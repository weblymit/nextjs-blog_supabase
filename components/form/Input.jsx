import React from "react";
import Label from "./Label";

export default function Input({
	disable = false,
	className = "",
	name,
	register,
	errors,
	...props
}) {
	return (
		<div className='my-4'>
			<Label htmlFor={name}>{name}</Label>
			<input className='input' {...register(name)} {...props} />
			<p className='errMsg'>{errors?.message}</p>
		</div>
	);
}
