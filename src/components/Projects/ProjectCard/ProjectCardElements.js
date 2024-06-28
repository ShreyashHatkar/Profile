import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3); /* Added light and thin border */
  box-shadow: 0 8px 20px -3px rgba(0, 0, 0, 0.2), /* Increased shadow */
    0 6px 10px -2px rgba(0, 0, 0, 0.1);
  
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 25px -4px rgba(0, 0, 0, 0.3),
      0 8px 10px -2px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }

`;

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;
  img {
    object-fit: cover;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   text-align: center; /* Center-align text for better readability */

  h4 {
    font-size: 1.5rem;
     font-weight: 500; /* Slightly increase font weight for headings */
    color: #333; /* Darken text color for better contrast */
    margin-bottom: 0.5rem; /* Reduce margin-bottom for compactness */
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
     text-align: justify; /* Justify text for a clean look */
    line-height: 1.4; /* Increase line height for better readability */

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
    text-align: left; /* Left-align text on larger screens */
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.815);
  cursor: default;
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;