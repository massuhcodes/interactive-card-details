// FormProperty.tsx

interface FormPropertyProps {
    title: string
    placeholder: string
    value: string
}

export default function FormProperty({title, placeholder, value}: FormPropertyProps) {
    return (
        <div className={`flex flex-col mt-5 ${value === "month" || value === "year" ? "basis-1/4" : "basis-1/2"}`}>
            <label htmlFor={value} className="text-[1rem] font-black uppercase tracking-[0.2rem] text-[#21092F]">{title}</label>
            <input type="text" name={value} id={value} placeholder={placeholder} className={`border rounded-[0.6rem] w-full py-2 indent-5 placeholder:text-[#21092f40] text-[1.4rem] mt-3 ${value === "month" || value === "year" ? "uppercase" : "lowercase"}`} required/>
        </div>
    )
}