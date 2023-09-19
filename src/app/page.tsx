'use client'
import Image from 'next/image'
import styles from './page.module.css'
import styled from "styled-components"
import './globals.css'

//styled-components CSS
export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto';
  background: linear-gradient(90deg, rgba(246, 209, 252, 1), rgba(185, 213, 255, 1));
`
export const LeftText = styled.h1`
  color: rgba(64, 64, 64, 1);
  
`

export default function Home() {
  return (
    <Main>
        <LeftText>To-Do UI</LeftText>
    </Main>
  )
}
