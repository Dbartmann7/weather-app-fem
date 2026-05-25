

type OptionProps = {
    value:string
    submitFn:(...args:any[]) => any
}

export const Option = ({value, submitFn}:OptionProps) => {

    return(
        <div className="flex w-full h-10 hover:bg-white/10 rounded-md" onClick={() => submitFn(value)}>
            <p className="my-auto px-2">{value}</p>
        </div>
    )
}