import Card from "../Card/Card";
import { v4 as uuid } from "uuid";
import './Grid.css'


function Grid({ numberofCards }) {
    return <div className="grid">
        {Array(numberofCards).fill(<Card />).map(() => <Card key={uuid()} iconName={""} />)}
    </div>
}

export default Grid;