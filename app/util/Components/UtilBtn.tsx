import Image from "next/image"

type UtilBtnProps = {
    logo?:string,
    title:string,
    clickFn:(...args:any[]) => void,
}

export const UtilBtn = ({logo, title, clickFn}:UtilBtnProps) => {


    return(
        <div className="relative flex w-fit gap-2 h-10 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-md" onClick={clickFn}>
            {logo ? <Image src={logo} alt={"logo"}/> : null}
            <p>{title}</p>
        </div>
    )
}