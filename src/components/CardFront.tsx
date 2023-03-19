// CardFront.tsx

import front from "../assets/bg-card-front.png"

export default function CardFront() {
    return (
        <div className="w-[80%] absolute top-[50%] left-[5%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <img className="w-full" src={front} alt="Front of a bank card" />
        </div>
    )
}