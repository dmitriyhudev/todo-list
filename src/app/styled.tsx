import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto';
    background: linear-gradient(90deg, rgba(246, 209, 252, 1), rgba(185, 213, 255, 1));
`
export const LeftText = styled.div`
    font-size: 5vh;
    display: inline-flex;
`
export const MainWindow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-grow: 0.4;
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
    margin-top: 100px;
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