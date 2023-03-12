import create from 'zustand'

interface Post{
    id: number
    title: string
    body: string
}


interface CounterState{
    count: number
    title: string
    increment: (value: number)=> void
    post: Post[]
}

export const useCounterStore = create<CounterState>((set) =>({
    count: 20,
    title: 'some title',
    post: [],
    increment: (value: number)=> set(state =>({
        count: state.count + value
    }))
}))
/*el set me va retornar un nuevo estado, un nuevo valor para el objeto de coun y title*/ 