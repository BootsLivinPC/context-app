import React from 'react'

const AccountContext = React.createContext()

export const AccountConsumer = AccountContext.Consumer

class AccountProvider extends React.Component {
  state = {
    username: "JerryOfTheDay",
    firstName: "Benny",
    lastName: "Jerseyson",
    avatar: "",
    email: "bennyBear@jotd.com",
    favoriteHobby: "Ski",
    dateJoined: "06/13/19",
}

render() {
  return (
    <AccountContext.Provider value={this.state}>
    { this.props.children }
    </AccountContext.Provider>
  )
}
}

export default AccountProvider