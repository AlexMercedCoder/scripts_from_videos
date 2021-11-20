import { atom, useRecoilState } from "recoil";

const counterState = atom({
    key: "counterState",
    default: 0
})

export const useCounterState = () => useRecoilState(counterState)