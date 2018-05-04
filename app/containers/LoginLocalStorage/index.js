// @flow
import { compose } from 'recompose'
import { withData, withActions } from 'spunky'

import LoginLocalStorage from './LoginLocalStorage'
import withFailureNotification from '../../hocs/withFailureNotification'
import accountsActions from '../../actions/accountsActions'
import { nep2LoginActions } from '../../actions/authActions'

const mapAccountsDataToProps = (accounts) => ({
  accounts
})

const mapActionsToProps = (actions) => ({
  loginNep2: (passphrase, encryptedWIF) => actions.call({ passphrase, encryptedWIF })
})

export default compose(
  withData(accountsActions, mapAccountsDataToProps),
  withActions(nep2LoginActions, mapActionsToProps),
  withFailureNotification(nep2LoginActions)
)(LoginLocalStorage)
