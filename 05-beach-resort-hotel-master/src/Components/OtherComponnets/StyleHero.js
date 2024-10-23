import styled from "styled-components";

const Style_Hero = styled.header`
  min-height: 66vh;
  background: url(${(props) => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Style_Hero;
