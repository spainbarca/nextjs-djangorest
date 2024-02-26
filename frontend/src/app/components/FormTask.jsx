"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

function FormTask() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const router = useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(title, description)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`, {
            method: "POST",
            body: JSON.stringify({title, description}),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await res.json()
        console.log(data)
        router.refresh()
    };

    return (
        <div className="bg-slate-200 p-7 h-fit">
            <form onSubmit={handleSubmit}>
            <h2 className="text-black font-bold">Añadir Tarea</h2><br />
            <div class="mb-5">
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Tarea:</label>
                <input type="text" id="title" name="title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nombre de la tarea" onChange={e => setTitle(e.target.value)} required />
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Descripción:</label>
                <textarea type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Descripción detallada de la tarea" onChange={e => setDescription(e.target.value)} required />
            </div>
            
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Guardar</button>
            </form>
        </div>
    )
}


export default FormTask