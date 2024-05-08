"use client"
import supabase from '@/app/config/supabaseClient'
export default function Page(){

    async function submit(e){
        e.preventDefault()
        const values = new FormData(e.target)
       // console.log(values.get("date"))
        const { data, error } = await supabase
            .from('Appointment booking')
            .insert([
                { date: values.get("date"), time: values.get("time") },
            ])
            .select()
            console.log(data)

    }
    return (
        <form onSubmit={submit}>
            <input name="date" type="date" />
            <input name="time" type="time" />
            <button>button</button>
        </form>
    )
} 