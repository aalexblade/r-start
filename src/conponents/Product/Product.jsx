import styled from "styled-components";

const Wrapper = styled.div`
max-width: 300px;
padding: 20px;
border-radius: 10px;
box-shadow: 0 0 0 10px #000;
margin: 30px;
`;

// margin: ${(props) => props.data ? props.data : '0'}
// margin: ${(props) => props.data || '0'};
const Title = styled.h2`
    font-size: 20px;
    font-weight: 600px;
     margin: ${({data = '0'}) => data || '0'};
    color: ${({primary}) => (primary ? 'blue' : 'grey')};
    padding: ${(props) => props.primary ? '20px' : '0'};
`;

export const Product = () => { 
  
    return (
        <Wrapper>
            <Title> Not-Primery Lorem ipsum dolor sit amet</Title>
            <Title primary data='50px'>
                Prymery ipsum dolor sit amet
                </Title>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti harum dolor?
        Maiores reprehenderit vitae</p>
    </Wrapper>
    );
};