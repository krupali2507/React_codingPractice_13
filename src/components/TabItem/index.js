// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, id, onChangeTab, isActive} = props
  const {displayText} = tabDetails

  const activeTabClass = isActive ? 'active-tab' : ''

  const onUpdatingTab = () => {
    onChangeTab(id)
  }

  return (
    <li onClick={onUpdatingTab} className={`${activeTabClass}`}>
      <button type="button" className={`tabs btn ${activeTabClass}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
