import axios from 'axios';
import qs from 'qs';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'https://accounts.spotify.com';

export const getToken = createAsyncThunk(
  'auth/token',
  async (body, { rejectWithValue }) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      const { data } = await axios.post<string>(
        `${backendURL}/api/token`,
        qs.stringify(body),
        config
      );
      return data;
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
