

type SectionTitleProps = {
    title:string
}

export const SectionTitle = ({title}:SectionTitleProps) => {

    return(
        <div className='border-t border-border-color py-1'>
            <p className=" text-xs text-gray-400 px-2">{title}</p>
        </div>
    )
}