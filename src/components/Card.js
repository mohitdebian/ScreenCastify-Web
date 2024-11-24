import React from 'react';
import styled from 'styled-components';

const Card = ({ text, icon }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z" />
          </svg>
          <p className="para">
            {text}
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    border-radius: 24px;
    line-height: 1.6;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    transform: translate(0px, -16px); /* Apply hover transform here */
  }

  .content {
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 36px;
    border-radius: 22px;
    color: #ffffff;
    overflow: hidden;
    background: #0a3cff;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content::before {
    position: absolute;
    content: "";
    top: 0; /* Set hover top position */
    left: 50%;
    width: 100%; /* Set hover width */
    height: 100%; /* Set hover height */
    transform: translate(-50%);
    background: #ced8ff;
    z-index: -1;
    transform-origin: bottom;
    border-radius: inherit;
    rotate: -8deg; /* Set hover rotation */
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content::after {
    position: absolute;
    content: "";
    top: 0; /* Set hover top position */
    left: 50%;
    width: 100%; /* Set hover width */
    height: 100%; /* Set hover height */
    transform: translate(-50%);
    background: #e7ecff;
    z-index: -2;
    transform-origin: bottom;
    border-radius: inherit;
    rotate: 8deg; /* Set hover rotation */
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content svg {
    width: 48px;
    height: 48px;
  }

  .content .para {
    z-index: 1;
    opacity: 1;
    font-size: 18px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .link {
    z-index: 1;
    color: #fea000;
    text-decoration: none;
    font-family: inherit;
    font-size: 16px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .link:hover {
    text-decoration: underline;
  }
`;

export default Card;
