import { useState } from 'react'
import Home from './components/Home'
import PaymentRequestDetail from './components/PaymentRequestDetail'
import AddFundsPromptModal from './components/AddFundsPromptModal'
import AddFundsModal from './components/AddFundsModal'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [showRejectToast, setShowRejectToast] = useState(false)
  const [showScheduleToast, setShowScheduleToast] = useState(false)
  const [showAddFundsToast, setShowAddFundsToast] = useState(false)
  const [showAddFundsModal, setShowAddFundsModal] = useState(false)
  const [scheduledDate, setScheduledDate] = useState(null)
  const [isFromScheduleFlow, setIsFromScheduleFlow] = useState(false)
  const [showAddFundsPromptAfterSchedule, setShowAddFundsPromptAfterSchedule] = useState(false)
  const [receivingCompany, setReceivingCompany] = useState('Brex')
  
  // Demo state - easily change these to test different scenarios:
  // 
  // TO TEST DIFFERENT SCENARIOS, modify these values (lines 48-50):
  // 
  // ============================================================================
  // SCENARIO 1: DUE TODAY + HAS FUNDS → Send Payment Directly
  // ============================================================================
  // Flow: Accept → Send payment → Notification "Payment received"
  // 
  // To test:
  //   - Set accountBalance >= paymentAmount (e.g., accountBalance: 5000000 = $50.000,00)
  //   - Set dueDate to today's date in GMT-3 (use: getTodayInGMT3())
  //   - Click "Accept" → Should directly send payment and show "Payment confirmed" toast
  //
  // Example values:
  //   accountBalance: 5000000  // $50.000,00
  //   paymentAmount: 802492    // $8.024,92
  //   dueDate: getTodayInGMT3() // Today's date
  //
  // ============================================================================
  // SCENARIO 2: DUE TODAY + NO FUNDS → Add Funds Flow
  // ============================================================================
  // Flow: Accept → Add funds modal (with payment amount as default) → After submit → Payment processed
  // 
  // To test:
  //   - Set accountBalance < paymentAmount (e.g., accountBalance: 100000 = $1.000,00)
  //   - Set dueDate to today's date in GMT-3 (use: getTodayInGMT3())
  //   - Click "Accept" → Shows Add Funds Modal (with payment amount pre-filled)
  //   - Fill payment method and submit → Shows "Payment confirmed" toast
  //
  // Example values:
  //   accountBalance: 100000   // $1.000,00 (insufficient)
  //   paymentAmount: 802492    // $8.024,92
  //   dueDate: getTodayInGMT3() // Today's date
  //
  // ============================================================================
  // SCENARIO 3: NOT DUE TODAY + HAS FUNDS → Schedule Payment
  // ============================================================================
  // Flow: Accept → Schedule Payment Modal → Select date → Schedule → Notification only
  // 
  // To test:
  //   - Set accountBalance >= paymentAmount (e.g., accountBalance: 5000000 = $50.000,00)
  //   - Set dueDate to a future date (e.g., '2025-12-25')
  //   - Click "Accept" → Shows Schedule Payment Modal
  //   - Select a payment date (must be <= due date) → Click "Schedule Payment"
  //   - Redirects to Home → Shows "Payment scheduled to [date]" toast
  //   - NO "Add funds now?" modal appears (sufficient funds)
  //
  // Example values:
  //   accountBalance: 5000000  // $50.000,00 (sufficient)
  //   paymentAmount: 802492    // $8.024,92
  //   dueDate: '2025-12-25'    // Future date
  //
  // ============================================================================
  // SCENARIO 4: NOT DUE TODAY + NO FUNDS → Schedule → Ask to Add Funds
  // ============================================================================
  // Flow: Accept → Schedule Payment Modal → Select date → Schedule → "Add funds now?" modal
  // 
  // To test:
  //   - Set accountBalance < paymentAmount (e.g., accountBalance: 100000 = $1.000,00)
  //   - Set dueDate to a future date (e.g., '2025-12-25')
  //   - Click "Accept" → Shows Schedule Payment Modal
  //   - Select a payment date (must be <= due date) → Click "Schedule Payment"
  //   - Redirects to Home → Shows "Payment scheduled to [date]" toast
  //   - Shows "Add funds now?" modal (AddFundsPromptModal)
  //   - Option A: Click "Not Now" → Modal closes, toast remains
  //   - Option B: Click "Add Funds" → Opens Add Funds Modal → After submitting
  //     → Shows "Funds added successfully. The payment will be processed as scheduled." toast
  //
  // Example values:
  //   accountBalance: 100000   // $1.000,00 (insufficient)
  //   paymentAmount: 802492    // $8.024,92
  //   dueDate: '2025-12-25'     // Future date
  //
  // ============================================================================
  // SCENARIO 5: REJECT PAYMENT
  // ============================================================================
  // Flow: Reject → Confirmation Modal → Confirm → Cancel payment → Notification
  // 
  // To test:
  //   - Any accountBalance and dueDate values work
  //   - Click "Reject" → Shows "Are you sure you want to reject this payment?" modal
  //   - Click "Reject Payment" → Redirects to Home → Shows "Payment request rejected" toast
  //
  // Example values (any values work):
  //   accountBalance: 802491   // Any value
  //   paymentAmount: 802492    // Any value
  //   dueDate: '2025-11-16'    // Any date
  //
  // ============================================================================
  // 
  // ============================================================================

  const [accountBalance] = useState(400000) // Change the Actual Balance from the account (in cents)
  const [paymentAmount] = useState(402492) // Change the Payment Amount from the request (in cents)
  const [dueDate] = useState('2025-11-17') // Change the Due date in YYYY-MM-DD format from the request

  const navigateToPaymentDetail = () => {
    setCurrentPage('payment-detail')
  }

  const navigateToHome = () => {
    setCurrentPage('home')
  }

  const handlePaymentAccepted = () => {
    // Check if there are sufficient funds
    const hasSufficientFunds = accountBalance >= paymentAmount
    
    if (hasSufficientFunds) {
      setShowSuccessToast(true)
      navigateToHome()
    }
  }

  const handleCloseToast = () => {
    setShowSuccessToast(false)
  }

  const handleCloseRejectToast = () => {
    setShowRejectToast(false)
  }

  const handlePaymentRejected = () => {
    setShowRejectToast(true)
    navigateToHome()
  }

  const handlePaymentScheduled = (selectedDate, companyName = 'Brex') => {
    setScheduledDate(selectedDate)
    setReceivingCompany(companyName)
    // Check if there are sufficient funds
    const hasSufficientFunds = accountBalance >= paymentAmount
    
    setIsFromScheduleFlow(false)
    setShowScheduleToast(true) // Always show the schedule toast
    
    // Only show "Add funds now?" modal if funds are insufficient
    if (!hasSufficientFunds) {
      setShowAddFundsPromptAfterSchedule(true)
    } else {
      setShowAddFundsPromptAfterSchedule(false)
    }
    
    navigateToHome()
  }

  const handleNotNowFromPromptAfterSchedule = () => {
    setShowAddFundsPromptAfterSchedule(false)
    // Toast is already showing, just close the modal
  }

  const handleAddFundsFromPromptAfterSchedule = () => {
    setShowAddFundsPromptAfterSchedule(false)
    // Open Add Funds Modal
    setShowAddFundsModal(true)
  }

  const handleCloseScheduleToast = () => {
    setShowScheduleToast(false)
  }

  const handleCloseAddFundsToast = () => {
    setShowAddFundsToast(false)
  }

  const handleAddFunds = () => {
    setShowAddFundsModal(true)
  }

  const handleCloseAddFundsModal = () => {
    setShowAddFundsModal(false)
  }

  const handleAddFundsSubmit = (data, scheduledDateFromModal = null) => {
    // Handle adding funds
    console.log('Adding funds:', data)
    setShowAddFundsModal(false)
    
    // If scheduledDateFromModal is provided, it means we're in the schedule flow
    if (scheduledDateFromModal) {
      // scheduledDate is already set from handlePaymentScheduled
      setIsFromScheduleFlow(true) // Added funds as part of schedule flow
      setShowAddFundsToast(true)
    } else if (isDueDateToday()) {
      // If payment is due today, process the payment after adding funds
      // Show "Payment confirmed" toast (same as direct acceptance)
      setShowSuccessToast(true)
    } else {
      // Regular add funds flow (not from schedule, not due today)
      setIsFromScheduleFlow(false)
      setShowAddFundsToast(true)
    }
    
    navigateToHome()
    // In a real app, this would process the payment and update the balance
    // For demo: After adding funds, you could update accountBalance state
  }

  // Helper function to get today's date in GMT-3 (UTC-3) timezone
  const getTodayInGMT3 = () => {
    const now = new Date()
    // Get UTC time and subtract 3 hours to get GMT-3
    const gmt3Time = new Date(now.getTime() - (3 * 60 * 60 * 1000))
    // Format as YYYY-MM-DD
    const year = gmt3Time.getUTCFullYear()
    const month = String(gmt3Time.getUTCMonth() + 1).padStart(2, '0')
    const day = String(gmt3Time.getUTCDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  // Helper function to check if due date is today
  const isDueDateToday = () => {
    const today = getTodayInGMT3()
    return dueDate === today
  }

  if (currentPage === 'payment-detail') {
    return (
      <>
        <PaymentRequestDetail 
          onBack={navigateToHome} 
          onAccept={handlePaymentAccepted} 
          onReject={handlePaymentRejected} 
          onSchedule={handlePaymentScheduled} 
          onAddFunds={handleAddFunds}
          showAddFundsModal={showAddFundsModal}
          onCloseAddFundsModal={handleCloseAddFundsModal}
          onAddFundsSubmit={handleAddFundsSubmit}
          accountBalance={accountBalance}
          paymentAmount={paymentAmount}
          dueDate={dueDate}
          isDueToday={isDueDateToday()}
          receivingCompany={receivingCompany}
        />
      </>
    )
  }

  return (
    <>
      {showAddFundsPromptAfterSchedule && (
        <AddFundsPromptModal
          onNotNow={handleNotNowFromPromptAfterSchedule}
          onAddFunds={handleAddFundsFromPromptAfterSchedule}
          receivingCompany={receivingCompany}
        />
      )}
      {showAddFundsModal && (
        <AddFundsModal 
          onClose={handleCloseAddFundsModal}
          onAddFunds={(data) => handleAddFundsSubmit(data, scheduledDate)}
          accountBalance={accountBalance}
          defaultAmount={(paymentAmount / 100).toFixed(2)}
          description="Adding funds ensures this payment will be sent on the scheduled date."
        />
      )}
      <Home 
        onViewRequestDetails={navigateToPaymentDetail} 
        showSuccessToast={showSuccessToast} 
        onCloseToast={handleCloseToast}
        showRejectToast={showRejectToast}
        onCloseRejectToast={handleCloseRejectToast}
        showScheduleToast={showScheduleToast}
        onCloseScheduleToast={handleCloseScheduleToast}
        scheduledDate={scheduledDate}
        showAddFundsToast={showAddFundsToast}
        onCloseAddFundsToast={handleCloseAddFundsToast}
        isFromScheduleFlow={isFromScheduleFlow}
        receivingCompany={receivingCompany}
        showAddFundsPromptModal={showAddFundsPromptAfterSchedule}
      />
    </>
  )
}

export default App

