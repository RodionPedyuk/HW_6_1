const nameInitialState = {
  contacts: [
    {
      name: "Obama",
      phone: 213535091283,
      id: 1
    }
  ],
  filteredContact: []
};

const reducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "SEARCH_CONTACT":
      return {
        ...state,
        filteredContact: [...state.contacts].filter(contact =>
          contact.name.includes(action.payload)
        )
      };
    default:
      return state;
  }
};

export default reducer;
