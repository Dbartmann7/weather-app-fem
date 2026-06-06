import { OptionType, SectionType } from "../../types"
import { Option } from "./Option"
import { SectionTitle } from "./SectionTitle"

type OptionSectionProps = {
    data:SectionType
    close: () => void
}

export const OptionSection = ({data, close}:OptionSectionProps) => {

    return(
        <div>
            <SectionTitle title={data.label} />
            {
                data.options?.map((option, i) => {
                    return <Option data={option} close={close}/> 
                } )
            }
        </div>
    ) 
}