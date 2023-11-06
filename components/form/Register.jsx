"use client";
import React from "react";
import Label from "./Label";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import BtnSubmit from "./BtnSubmit";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirectWithRefreshPage } from "@/utils/redirectWithRefreshPage";

let requiredMsg = "Champs obligatoire";
const schema = yup
	.object({
		email: yup.string().email("Email invalide").required(requiredMsg),
		password: yup.string().min(6, "6 caractères minimum").required(requiredMsg),
	})
	.required();

export default function Register() {
	const router = useRouter();
	const supabase = createClientComponentClient();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		// create new user on supabase
		try {
			const { error } = await supabase.auth.signUp({
				email: data.email,
				password: data.password,
				options: {
					data: {
						username: data.email,
						role: "user",
						avatar_url: "https://i.pravatar.cc/300",
					},
					emailRedirectTo: `${location.origin}/auth/callback`,
				},
			});
			if (error) {
				console.log(error.message);
				throw error;
			}
			redirectWithRefreshPage(router, "/");
		} catch (error) {
			console.log("Error creating user:", error.message);
			// Handle error, show error message
		}
	};
	return (
		<div className='max-w-sm mx-auto'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-2'>
					<Input
						type='email'
						name='email'
						register={register}
						errors={errors.email}
					/>
				</div>
				<div className=''>
					<Input
						type='password'
						name='password'
						register={register}
						errors={errors.password}
					/>
				</div>
				<BtnSubmit>Inscription</BtnSubmit>
				<p className='text-gray-700 pt-6'>
					Déja inscrit ?
					<Link href='/login' className='text-teal-500 pl-3'>
						Se connecter
					</Link>
				</p>
			</form>
		</div>
	);
}
