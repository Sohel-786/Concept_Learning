import styled from 'styled-components';

function show(el){
    console.log(el);
    
}

export const Li = styled.li `
    padding: 5px 15px;
    border-radius: 10px;
    background-color: ${(props) => (props.theme === 'light' ? '#97FFF4': 'white')};
    font-size: 12px;
    font-weight: bolder;
    color: #0c356a;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: 1px solid transparent;

    &:hover {
        background-color: #D5FFD0;
        border-color: #0C356A;
        color: #279EFF;
        font-size: 11.5px;
        transition: all 0.5s;
    }
`