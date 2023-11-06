"use client";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { createPost } from "@/utils/requestClient";

let requiredMsg = "Champs obligatoire";
const schema = yup
	.object({
		title: yup.string().min(2, "Minimum 2 caractères").required(requiredMsg),
		content: yup.string().required(requiredMsg),
	})
	.required();

export default function PostCreate() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (formData) => {
		// create post on supabase
		try {
			const postData = {
				title: formData.title,
				content: formData.content,
			};

			await createPost(postData, router);
		} catch (error) {
			console.log("Error creating post:", error.message);
			// Handle error, show error message
		}
	};

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form onSubmit={handleSubmit(onSubmit)} className='max-w-lg mx-auto'>
			<div className=''>
				<label htmlFor='title'>Titre de l'article</label>
				<input {...register("title")} />
				<p className='error'>{errors.title?.message}</p>
			</div>
			<div className=''>
				<label htmlFor='content'>Content</label>
				<textarea {...register("content")} cols='30' rows='10'></textarea>
				<p className='error'>{errors.content?.message}</p>
			</div>
			<input
				type='submit'
				className='bg-teal-500 text-white p-3 rounded-lg block mt-5'
			/>
		</form>
	);
}
