// Hero.tsx

import CardBack from "./CardBack"
import CardFront from "./CardFront"

export default function Hero() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#21092F] via-[#230068] to-[#21092F] w-full relative h-[35vh]">
            <CardBack />
            <CardFront />
        </div>
    )
}