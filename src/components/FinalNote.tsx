// FinalNote.tsx

import CompletionImage from "./CompletionImage"
import CompletionMessage from "./CompletionMessage"
import ContinueButton from "./ContinueButton"

export default function FinalNote() {
    return (
    <section id="finalNote" className="flex flex-col flex-grow justify-around mt-[7rem] mx-[1.5rem] items-center">
        <CompletionImage />
        <CompletionMessage />
        <ContinueButton />
    </section>
    )
}