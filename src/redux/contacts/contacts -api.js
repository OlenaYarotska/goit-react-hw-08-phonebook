import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;










// import { combineReducers, createReducer } from "@reduxjs/toolkit";
// import { getContacts, addContact, deleteContact, changeFilter, changeContactName, changeContactNumber } from './contactsOperations';


// const items = createReducer([], {
//   [getContacts.fulfilled]: (_, action) => action.payload,
//   [addContact.fulfilled]: (state, action) => [...state, action.payload],
//   [deleteContact.fulfilled]: (state, action) => state.filter(item => item.id !== action.payload.id),
//   [changeContactName.fulfilled]: (state, action) =>
//     state.map(item => item.id !== action.payload.id ? action.payload : item),
//   [changeContactNumber.fulfilled]: (state, action) =>
//     state.map(item => item.id !== action.payload.id ? action.payload : item),
// });

// const loading = createReducer(false, {
//   [getContacts.pending]: () => true,
//   [getContacts.fulfilled]: () => false,
//   [getContacts.rejected]: () => false,

//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,

//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,

//   [changeContactName.pending]: () => true,
//   [changeContactName.fulfilled]: () => false,
//   [changeContactName.rejected]: () => false,

//   [changeContactNumber.pending]: () => true,
//   [changeContactNumber.fulfilled]: () => false,
//   [changeContactNumber.rejected]: () => false,

// });

// const error = createReducer(null, {
//   [getContacts.pending]: () => null,
//   [getContacts.fulfilled]: () => null,
//   [getContacts.rejected]: (_, action) => action.payload,

//   [addContact.pending]: () => null,
//   [addContact.fulfilled]: () => null,
//   [addContact.rejected]: (_, action) => action.payload,

//   [deleteContact.pending]: () => null,
//   [deleteContact.fulfilled]: () => null,
//   [deleteContact.rejected]: (_, action) => action.payload,

//   [changeContactName.pending]: () => null,
//   [changeContactName.fulfilled]: () => null,
//   [changeContactName.rejected]: (_, action) => action.payload,

//   [changeContactNumber.pending]: () => null,
//   [changeContactNumber.fulfilled]: () => null,
//   [changeContactNumber.rejected]: (_, action) => action.payload,
 
// });
// const initialState = '';
// const filter = createReducer(initialState, {
//   [changeFilter]: (_, action) => action.payload,
// });

// export const contactsReducer = combineReducers({
//   items,
//   loading,
//   error,
//   filter,
// });
