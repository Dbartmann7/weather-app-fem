import { OptionType } from "../../types"
import { Option } from "./Option"
import { SectionTitle } from "./SectionTitle"

type OptionSectionProps = {
    data:OptionType

}

export const OptionSection = ({data}:OptionSectionProps) => {

    return(
        <div>
            <SectionTitle title={data.label} />
            {
                data.options?.map((option, i) => {
                    return <Option data={option} onSelect={data.onSelect ?? (() => {})}/> 
                } )
            }
        </div>
    ) 
}