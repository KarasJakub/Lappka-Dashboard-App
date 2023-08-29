import Dashboard from "components/Dashboard/DashboardLayout"
import AccountSettingsPage from "components/Dashboard/AccountSettings/AccountSettings"
const AccountSettings = () => {
  return (
    <Dashboard isSettingsExpanded>
      <AccountSettingsPage />
    </Dashboard>
  )
}

export default AccountSettings
