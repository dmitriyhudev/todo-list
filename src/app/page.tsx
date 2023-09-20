'use client'
import Image from 'next/image'
import styles from './page.module.css'
import styled from "styled-components"
import './globals.css'

//styled-components CSS
export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto';
  background: linear-gradient(90deg, rgba(246, 209, 252, 1), rgba(185, 213, 255, 1));
`
export const LeftText = styled.div`
  font-size: 96px;
  display: inline-flex;
`
export const MainWindow = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  flex-grow: 0.8;
  width: 672px;
  max-height: 390px;
`
export const AccountWindow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 12px 16px;
  height: 47px;
  border-radius: 10px;
  border-style: none;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(147, 51, 234, 1);
`
export const BottomWindows = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  height: 312px;
  margin-top: 32px;
`
export const LeftWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const DateButton = styled.div`
  display: flex;
  width: 185px;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  color: rgba(147, 51, 234, 1);
  background-color: rgba(147, 51, 234, 0.06);
`
export const AllTasksButton = styled.div`
  display: flex;
  width: 185px;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  color: rgba(107, 114, 128, 1);
`
export const DateDirectionButton = styled.div`
  display: flex;
  width: 185px;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  color: rgba(107, 114, 128, 1);
`
export const AddTaskButton = styled.div`
  display: flex;
  width: 185px;
  height: 40px;
  padding: 10px;
  margin-top: 100px; //////////////////////
  border-radius: 10px;
  font-size: 16px;
  color: rgba(147, 51, 234, 1);
  background-color: rgba(147, 51, 234, 0.06);
`
export const TasksWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 7px 7px 7px;
  margin: 0px 0px 0px 21px;
  border-radius: 10px;
  background-color: rgba(244, 244, 244, 1);
`
export const VisibleTask = styled.div`
  display: flex;

  
  align-items: center;
  height: 33px;
  margin: 2px 16px 2px 16px;
  padding: 16px 8px 16px 8px;
  border-radius: 10px;
  background-color: rgba(147, 51, 234, 0.06);
`

export default function Home() {
  return (
    <Main>
        <LeftText>
            <h1 style={{fontWeight: "700", color: "rgba(64, 64, 64, 1)"}}>To-Do</h1>
            <div style={{width: "36px"}}></div>
            <h1 style={{fontWeight: "700", color: "rgba(147, 51, 234, 1)"}}>UI</h1>
        </LeftText>
        <MainWindow>
            <AccountWindow>
                <p style={{fontSize: "20px"}}>To-Do</p>
                <p style={{fontSize: "16px", fontWeight: "400"}}>UserName</p>
                <img src="AccountIcon.svg"></img>  
            </AccountWindow>
            <div>
                <BottomWindows>
                    <LeftWindow>
                        <DateButton>
                            <img src="CalendarIcon.svg"></img>
                            <p style={{marginLeft: "12px"}}>Today</p>
                        </DateButton>
                        <AllTasksButton>
                            <img src="SelectAllIcon.svg"></img>
                            <p style={{marginLeft: "12px"}}>All</p>
                        </AllTasksButton>
                        <DateDirectionButton>
                            <img src="DateDirectionIcon.svg"></img>
                            <p style={{marginLeft: "9px"}}>Date</p>
                        </DateDirectionButton>
                        <AddTaskButton>
                            <img src="AddIcon.svg"></img>
                            <p style={{marginLeft: "12px"}}>Add task</p>
                        </AddTaskButton>
                    </LeftWindow>
                    <TasksWindow>
                        <VisibleTask>
                            <img src="TaskDoneIcon.svg"></img>
                            <p style={{margin: "0px 0px 0px 20px", width: "100px",fontSize: "16px", fontWeight: "400"}}>Task 2</p>
                            <div style={{width: "100%"}}></div>
                            <p style={{width: "200px", alignSelf: "center", fontSize: "14px", fontWeight: "400", color: "rgba(107, 114, 128, 1)"}}>Today at 18.30</p>
                            <img src="OptionsIcon.svg"></img>
                        </VisibleTask>
                        <VisibleTask>
                            <img src="TaskNotDoneIcon.svg"></img>
                            <p style={{margin: "0px 0px 0px 20px", width: "100px",fontSize: "16px", fontWeight: "400"}}>Task 2</p>
                            <div style={{width: "100%"}}></div>
                            <p style={{width: "200px", alignSelf: "center", fontSize: "14px", fontWeight: "400", color: "rgba(107, 114, 128, 1)"}}>Today at 18.30</p>
                            <img style={{margin: "0px 0px 0px 0px", alignSelf: "center"}} src="OptionsIcon.svg"></img>
                        </VisibleTask>
                    </TasksWindow>
                </BottomWindows>
            </div>
        </MainWindow>
    </Main>
  )
}
