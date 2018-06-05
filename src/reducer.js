import {setCompany} from './actions';

const initialState = {
  leads: [
    {
      id: 1029378,
      logo: '/images/leads/lannister-house.png',
      name: 'Lannister Co',
      email: 'hearmeroar@lannister.co',
      contacts: [
        {
          name: 'Tyrion',
          img: '/images/leads/Tyrion_Lannister.jpg',
          email: 'tyrion@lannister.co'
        },
        {
          name: 'Jamie',
          img: '/images/leads/jaime.jpg',
          email: 'jamie@lannister.co'
        },
        {
          name: 'Cersei',
          img: '/images/leads/cersei.jpeg',
          email: 'cersei@lannister.co'
        }
      ],
      phone: '000-000-0000',
      status: 'Researching',
      employee_count: 772,
      address: '123 Kings Landing Rd.',
      financials: {
        revenue: 1000000,
        profit: 200000,
        capital: 20000000
      }
    },
    {
      id: 1029372,
      logo: '/images/leads/stark.jpg',
      name: 'Stark Co',
      email: 'winteriscoming@stark.co',
      contacts: [
        {
          name: 'Robb',
          img: '/images/leads/robb.jpg',
          email: 'robb@stark.co'
        },
        {
          name: 'Arya',
          img: '/images/leads/arya.jpg',
          email: 'arya@stark.co'
        },
        {
          name: 'Eddard',
          img: '/images/leads/eddard.jpg',
          email: 'ned@stark.co'
        }
      ],
      phone: '000-000-0000',
      status: 'Researching',
      employee_count: 772,
      address: '123 Kings Landing Rd.',
      financials: {
        revenue: 1000000,
        profit: 200000,
        capital: 20000000
      }
    }
  ]
}

const reducerRoutes = {
  [setCompany]: (state, action) => ({
    ...state, leads: state.leads.filter(lead => lead.id !== action.payload.id).concat([action.payload])
  }),
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}


export default rootReducer;
