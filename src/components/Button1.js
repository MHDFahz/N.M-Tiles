import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  padding: 0.3rem 0.5rem;
  font-weight: 600;
  font-size: 1.4rem;
  color: #fff;
  background: var(--main);
  border: none;
  letter-spacing: 1px;
  border-radius: 0.6rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  outline: none;
  transition: all 0.3s ease;
  line-height: 1.8;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15),
    inset 0 1px 2px 0 rgba(255, 255, 255, 0.35);
  font-family: "Cairo";
  &.white {
    color: var(--main);
    background: #fff;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2),
      inset 0 1px 1px 0 rgba(255, 255, 255, 0.5);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 2px 4px 0 rgba(0, 0, 0, 0.4);
      background-color:black;
  }
  &:hover{
    outline:none:
  }
`;
