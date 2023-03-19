// App.tsx

import Hero from "./Hero"
import FormProperty from "./FormProperty"
import SubmitButton from "./SubmitButton"
import FinalNote from "./FinalNote"

export default function App() {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Hero />
      {/* <form action="" className="mt-[5rem] mx-[1.5rem] flex-grow flex flex-col justify-around">
        <FormProperty {...{title: "cardholder name", placeholder: "e.g. Jane Appleseed", value: "name"}}  />
        <FormProperty {...{title: "card number", placeholder: "e.g. 1234 5678 9123 0000", value: "number"}} />
        <div className="flex gap-x-3">
          <FormProperty {...{title: "exp. date", placeholder: "mm", value: "month"}} />
          <FormProperty {...{title: "(mm/yy)", placeholder: "yy", value: "year"}} />
          <FormProperty {...{title: "cvc", placeholder: "e.g. 123", value: "cvc"}} />
        </div>
        <SubmitButton />
      </form> */}
      <FinalNote />
    </div>
  )
}
