import styled from 'styled-components';

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
padding: 2rem 0;
grid-auto-rows: 1fr;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ImgCard = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 10px;
`;

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
`

export const CardContent = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContent = styled.div`
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px 0px 20px;
  border: 0;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0px;
  color: #FFFFFF99;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  gap: 3rem;
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0 1.5rem;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: linear-gradient(300deg, #13ADC7 0%, #945DD6 100%);
border-radius: 15px;
transition: 400ms ease;
&:hover{
  background: linear-gradient(300deg, #0ebedc 0%, #b982fc 100%)
}
`;

export const TagList = styled.ul`
display: flex;
gap: 2rem;
justify-content: flex-start;
padding: 2rem 0;
`
export const Tag = styled.li`
color: #eafcff;
font-size: 1.5rem;
`