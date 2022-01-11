import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  position: absolute;
  width: 100%; height: 100vh;    left: 250px;
  font-size: 50px;
`;

function Settings(){
    return(
        <Section>Settings</Section>
    )
}

export default Settings;