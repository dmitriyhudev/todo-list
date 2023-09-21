'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {
  Main,
  LeftText,
  TextPartOne,
  TextPartTwo,
  MainWindow,
  AccountWindow,
  ToDoLabel,
  UserNameLabel,
  BottomWindows,
  LeftWindow,
  DateButton,
  LeftWindowLabel,
  AllTasksButton,
  DateDirectionButton,
  DateLabel,
  AddTaskButton,
  AddTaskLabel,
  TasksWindow,
  VisibleTask,
  TaskName,
  EmptySpaceInTask,
  TaskDate,
} from "./styled.tsx"
import './globals.css'

export default function Home() {
  return (
    <Main>
        <LeftText>
            <TextPartOne>To-Do</TextPartOne>
            &nbsp;
            <TextPartTwo>UI</TextPartTwo>
        </LeftText>
        <MainWindow>
            <AccountWindow>
                <ToDoLabel>To-Do</ToDoLabel>
                <UserNameLabel>UserName</UserNameLabel>
                <img src="AccountIcon.svg"></img>  
            </AccountWindow>
                <BottomWindows>
                    <LeftWindow>
                        <DateButton>
                            <img src="CalendarIcon.svg"></img>
                            <LeftWindowLabel>Today</LeftWindowLabel>
                        </DateButton>
                        <AllTasksButton>
                            <img src="SelectAllIcon.svg"></img>
                            <LeftWindowLabel>All</LeftWindowLabel>
                        </AllTasksButton>
                        <DateDirectionButton>
                            <img src="DateDirectionIcon.svg"></img>
                            <DateLabel>Date</DateLabel>
                        </DateDirectionButton>
                        <AddTaskButton>
                            <img src="AddIcon.svg"></img>
                            <AddTaskLabel>Add task</AddTaskLabel>
                        </AddTaskButton>
                    </LeftWindow>
                    <TasksWindow>
                        <VisibleTask>
                            <img src="TaskDoneIcon.svg"></img>
                            <TaskName>Task 1</TaskName>
                            <EmptySpaceInTask></EmptySpaceInTask>
                            <TaskDate>Today at 18.30</TaskDate>
                            <img src="OptionsIcon.svg"></img>
                        </VisibleTask>
                        <VisibleTask>
                            <img src="TaskNotDoneIcon.svg"></img>
                            <TaskName>Task 2</TaskName>
                            <EmptySpaceInTask></EmptySpaceInTask>
                            <TaskDate>Today at 18.30</TaskDate>
                            <img src="OptionsIcon.svg"></img>
                        </VisibleTask>
                    </TasksWindow>
                </BottomWindows>
        </MainWindow>
    </Main>
  )
}
