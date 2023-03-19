// CardBack.tsx

import back from "../assets/bg-card-back.png"

export default function CardBack() {
    return (
        <div className="w-[80%] absolute top-[10%] right-[5%]">
            <img src={back} className="w-full"  />
        </div>
    )
}