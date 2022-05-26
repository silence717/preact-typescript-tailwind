import {FunctionComponent, h} from 'preact';
import { FieldType } from 'scripts/type'


const Nps: FunctionComponent<FieldType> = (props) => {
    const { code, label } = props
    return (
        <div>
            <h3>Nps field</h3>
            <div>{code}</div>
            <div>{label}</div>
        </div>
    )
}

export default Nps