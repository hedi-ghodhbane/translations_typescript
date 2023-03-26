import { useIntl } from "react-intl";

export const Counter = ()=>{
    const {formatMessage}=useIntl();

    return <div>
        {formatMessage({id:'count'})}
    </div>
}