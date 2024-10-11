import { ChildrenProp } from "../libs/hooks";

function Keypad ({ children }: ChildrenProp) {
  return (
    <section className="keypad">
      { children }
    </section>
  )
}

export default Keypad