
import { useState } from "preact/hooks";

export function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <div class="w-full m-auto">

            <button
                class="border px-4 py-2 text-xl"
                onClick={() => setCounter(counter - 1)}
            > -
            </button>

            <span class="text-violet-600 text-xl m-5">{counter}</span>
            <button
                class="border px-4 py-2 text-xl"
                onClick={() => setCounter(counter + 1)}
            >
                +
            </button>
        </div>
    )
}