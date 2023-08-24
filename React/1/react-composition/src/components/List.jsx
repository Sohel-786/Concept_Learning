import styled from 'styled-components';

const Li = styled.li `
    padding: 5px 15px;
    border-radius: 10px;
    background-color: #97FFF4;
    font-size: 12px;
    font-weight: bolder;
    color: #0c356a;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: 1px solid transparent;
`;

function List({list}) {
    return (
        <ul className="nav_list">
            {
                list.map((el, i) => <Li key={i}>{el}</Li>)
            }
        </ul>
    )
}

export default List;