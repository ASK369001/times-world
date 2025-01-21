import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async () => {
    const response = await axios.get(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    return response.data;
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    visible: 10,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    loadMore: (state) => {
      state.visible += 10;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadMore } = countrySlice.actions;
export default countrySlice.reducer;
