import styled from 'styled-components';

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 200px auto 0;
  width: 500px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  background-color: #313A48;
  @media (max-width: 720px) {
    width: 600px;
    margin: 500px auto 0;
  }
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 10px;
`;

export const CardHeading = styled.h1`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #51FFA8; //
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
  font-family: 'Manrope', sans-serif;
  letter-spacing: 5px;
  transition: width 2s;
  @media (max-width: 720px) {
   font-size: 24px;
  }
`;

export const CardBody = styled.body`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #CDE2E8;
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
  font-family: 'Manrope', sans-serif;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 25px;
  background-color: #313A48;
  transition: width 2s;
  @media (max-width: 720px) {
   font-size: 48px;
   padding-bottom: 35px;
  }
`;

export const DiceButton = styled.button`
background-color: #51FFA8;
  border: 0;
  width: 4rem;
  height: 4rem;
  display: block;
  position: absolute;
  transform: translateY(-50%) translateX(-50%);
  font-weight: bold;
  font-size: 2em;
  color: white;
  left: 50%;
  border-radius: 50%;
  filter: drop-shadow(16px 16px 20px blue);
  -webkit-filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.5));
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
  }
  @media (max-width: 720px) {
   width: 7rem;
   height: 7rem;
   margin-top: 20px;
  }
`;