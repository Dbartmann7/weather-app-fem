import { OptionType } from "../../types"
import { Option } from "./Option"
import { SectionTitle } from "./SectionTitle"

type OptionSectionProps = {
    data:OptionType
    onSelect: (...args:any[]) => void

}

export const OptionSection = ({data, onSelect}:OptionSectionProps) => {

    return(
        <div>
            <SectionTitle title={data.label} />
            {
                data.options?.map((option, i) => {
                    return <Option data={option} onSelect={onSelect}/> 
                } )
            }
        </div>
    ) 
}