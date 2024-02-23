import { createSlice } from "@reduxjs/toolkit";
import MockData from "./mockdata.json";
import { monsterSliceReducers } from "../redux/monstersSlice";

export const withData = createSlice({
  name: "monsters",
  initialState: {
    monsterList: MockData,
    selectedMonsterId: MockData[0].id,
    computerMonsterId: MockData[1].id,
    winnerName: "",
    isLoading: false,
    winnerError: false,
    fetchError: false
  },
  reducers: monsterSliceReducers
});

export const emptyMock = createSlice({
  name: "monsters",
  initialState: {
    monsterList: [],
    selectedMonsterId: "",
    computerMonsterId: "",
    winnerName: "",
    isLoading: false,
    winnerError: false,
    fetchError: false
  },
  reducers: monsterSliceReducers
});

export const onlyPlayerSelected = createSlice({
  name: "monsters",
  initialState: {
    monsterList: MockData,
    selectedMonsterId: MockData[0].id,
    computerMonsterId: "",
    winnerName: "",
    isLoading: false,
    winnerError: false,
    fetchError: false
  },
  reducers: monsterSliceReducers
});

export const loading = createSlice({
  name: "monsters",
  initialState: {
    monsterList: MockData,
    selectedMonsterId: MockData[0].id,
    computerMonsterId: MockData[1].id,
    winnerName: "",
    isLoading: true,
    winnerError: false,
    fetchError: false
  },
  reducers: monsterSliceReducers
});
