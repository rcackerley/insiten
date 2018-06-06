import {setCompany, deleteCompany, addCompany} from './actions';

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
          email: 'tyrion@lannister.co',
          id: 14568934256123
        },
        {
          name: 'Jamie',
          img: '/images/leads/jaime.jpg',
          email: 'jamie@lannister.co',
          id: 14568934987
        },
        {
          name: 'Cersei',
          img: '/images/leads/cersei.jpeg',
          email: 'cersei@lannister.co',
          id: 145689341111112
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
          email: 'robb@stark.co',
          id: 14568934
        },
        {
          name: 'Arya',
          img: '/images/leads/arya.jpg',
          email: 'arya@stark.co',
          id: 14568934222
        },
        {
          name: 'Eddard',
          img: '/images/leads/eddard.jpg',
          email: 'ned@stark.co',
          id: 2340987
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
      id: 1029245123472,
      logo: '/images/leads/tyrell.jpg',
      name: 'Tyrell Co',
      email: 'growingstrong@tyrell.co',
      contacts: [
        {
          name: 'Olenna',
          img: '/images/leads/queen.jpg',
          email: 'qot@tyrell.co',
          id: 23333
        },
        {
          name: 'Margaery',
          img: '/images/leads/marg.jpeg',
          email: 'marg@tyrell.co',
          id: 231
        },
        {
          name: 'Loras',
          img: '/images/leads/loras.jpg',
          email: 'loras@stark.co',
          id: 235
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
      id: 1029316789072,
      logo: '/images/leads/targs.jpg',
      name: 'Targaryen Co',
      email: 'fireandblood@dragons.co',
      contacts: [
        {
          name: 'Dany',
          img: '/images/leads/dany.jpeg',
          email: 'dany@dragons.co',
          id: 234
        },
        {
          name: 'Rhaegar',
          img: '/images/leads/rhaegar.png',
          email: 'rhaegar@dragons.co',
          id: 12
        },
        {
          name: 'Viserys',
          img: '/images/leads/viserys.jpg',
          email: 'viserys@dragons.co',
          id: 190
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
  [deleteCompany]: (state, action) => ({
    ...state, leads: state.leads.filter(lead => lead.id !== action.payload.id)
  }),
  [addCompany]: (state, action) => ({
    ...state, leads: state.leads.concat([action.payload])
  }),
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}


export default rootReducer;
