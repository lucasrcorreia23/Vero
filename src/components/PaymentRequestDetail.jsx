// Icons from lucide-react (shadcn/ui compatible)
import {
  ChevronRight,
} from 'lucide-react';

// Non-icon images from assets
import { getAssetUrl } from '../config/assets';
const imgSeparator1 = getAssetUrl("b0485f66ed0f77ecdca87f933f2f9614cd74ec10.svg");

import Sidebar from './Sidebar';

import { useState } from 'react';
import RejectConfirmModal from './RejectConfirmModal';
import SchedulePaymentModal from './SchedulePaymentModal';
import InsufficientFundsModal from './InsufficientFundsModal';
import AddFundsModal from './AddFundsModal';

export default function PaymentRequestDetail({ onBack, onAccept, onReject, onSchedule, onAddFunds, showAddFundsModal, onCloseAddFundsModal, onAddFundsSubmit, accountBalance, paymentAmount, dueDate, isDueToday }) {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showInsufficientFundsModal, setShowInsufficientFundsModal] = useState(false);
  
  // Format due date for display
  const formatDueDate = (dateString) => {
    if (!dateString) return '14 Out 2024';
    // Parse YYYY-MM-DD format directly to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${day} ${months[month - 1]} ${year}`;
  };
  
  const displayDueDate = formatDueDate(dueDate);
  
  const handleRejectClick = () => {
    setShowRejectModal(true);
  };

  const handleCancelReject = () => {
    setShowRejectModal(false);
  };

  const handleConfirmReject = () => {
    setShowRejectModal(false);
    if (onReject) {
      onReject();
    }
  };

  const handleAcceptClick = () => {
    if (isDueToday) {
      // If due today, check if there are sufficient funds
      const hasSufficientFunds = accountBalance >= paymentAmount;
      
      if (hasSufficientFunds) {
        // If sufficient funds and due today, accept directly and show success toast
        if (onAccept) {
          onAccept();
        }
      } else {
        // If insufficient funds and due today, show add funds modal
        if (onAddFunds) {
          onAddFunds();
        }
      }
    } else {
      // If not due today, always show schedule modal first
      // Funds check will happen after scheduling
      setShowScheduleModal(true);
    }
  };

  const handleCancelInsufficientFunds = () => {
    setShowInsufficientFundsModal(false);
  };

  const handleAddFundsClick = () => {
    setShowInsufficientFundsModal(false);
    if (onAddFunds) {
      onAddFunds();
    }
  };

  const handleCancelSchedule = () => {
    setShowScheduleModal(false);
  };

  const handleSchedulePayment = (selectedDate) => {
    setShowScheduleModal(false);
    if (onSchedule) {
      onSchedule(selectedDate, 'Brex'); // Pass company name
    }
  };

  return (
    <div className="bg-white flex items-start relative w-full min-h-screen" data-name="Payment Request / Amount / Acceptance or Reject" data-node-id="0:252">
      {/* Reject Confirmation Modal */}
      {showRejectModal && (
        <RejectConfirmModal onCancel={handleCancelReject} onConfirm={handleConfirmReject} />
      )}
      {/* Schedule Payment Modal */}
      {showScheduleModal && (
        <SchedulePaymentModal 
          onClose={handleCancelSchedule}
          onSchedule={handleSchedulePayment}
          receivingCompany="Brex"
          amount={`$${((paymentAmount / 100).toFixed(2).split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + (paymentAmount / 100).toFixed(2).split('.')[1])}`}
          dueDate={dueDate}
          displayDueDate={displayDueDate}
          accountBalance={accountBalance}
          paymentAmount={paymentAmount}
          onAddFunds={onAddFunds}
          showAddFundsModal={showAddFundsModal}
          onCloseAddFundsModal={onCloseAddFundsModal}
          onAddFundsSubmit={onAddFundsSubmit}
        />
      )}
      {/* Insufficient Funds Modal */}
      {showInsufficientFundsModal && (
        <InsufficientFundsModal 
          onCancel={handleCancelInsufficientFunds}
          onAddFunds={handleAddFundsClick}
        />
      )}
      {/* Add Funds Modal */}
      {showAddFundsModal && (
        <AddFundsModal 
          onClose={onCloseAddFundsModal}
          onAddFunds={onAddFundsSubmit}
          accountBalance={accountBalance}
          defaultAmount={((paymentAmount / 100).toFixed(2).split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + (paymentAmount / 100).toFixed(2).split('.')[1])}
        />
      )}
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col h-screen items-center relative shrink-0 flex-1" data-name="Container" data-node-id="0:334">
        {/* Header with Breadcrumbs */}
        <div className="border-b border-[#e5e5e5] relative shrink-0 w-full" data-name="Pro Blocks / Page Header / 5.1" data-node-id="0:335">
          <div className="box-border flex flex-col gap-6 items-center overflow-clip px-6 py-4 relative rounded-[inherit] w-full">
            <div className="flex h-10 items-center justify-between max-w-[1280px] relative shrink-0 w-full" data-name="Container" data-node-id="0:336">
              <div className="basis-0 flex flex-col gap-0 grow items-start min-h-px min-w-px relative shrink-0" data-name="Div" data-node-id="0:337">
                <div className="flex flex-wrap gap-2.5 items-center relative shrink-0" data-name="Breadcrumb" data-node-id="0:338">
                  <div className="flex gap-[10px] items-center justify-center relative shrink-0" data-name="Breadcrumb / BreadcrumbItem" data-node-id="0:339">
                    <p className="font-normal leading-5 not-italic relative shrink-0 text-[#737373] text-sm text-nowrap whitespace-pre" data-node-id="0:340">
                      Home
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[15px]" data-name="Icon / ChevronRight" data-node-id="0:341">
                    <ChevronRight className="size-full" />
                  </div>
                  <div className="flex gap-[10px] items-center justify-center relative shrink-0" data-name="Breadcrumb / BreadcrumbItem" data-node-id="0:343">
                    <p className="font-normal leading-7 not-italic relative shrink-0 text-[#0a0a0a] text-xl text-nowrap whitespace-pre" data-node-id="0:344">
                      Payment Request Detail
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-9 shrink-0 w-[394px]" data-name="Flex" data-node-id="0:345" />
            </div>
          </div>
        </div>

        {/* Payment Details Content */}
        <div className="basis-0 box-border flex flex-col gap-2 grow items-center min-h-px min-w-px pb-0 pt-6 px-6 relative shrink-0 w-full overflow-y-auto" data-name="Container" data-node-id="0:346">
          <div className="flex flex-col gap-10 items-center relative shrink-0 w-[384px]" data-name="Container" data-node-id="13:4767">
            {/* Information Container */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full" data-name="Information Container" data-node-id="13:4768">
              {/* Amount Container */}
              <div className="flex flex-col gap-4 items-center justify-center relative shrink-0" data-name="Amount Container" data-node-id="13:4769">
                <p className="font-medium leading-6 not-italic relative shrink-0 text-base text-[#0a0a0a] text-nowrap whitespace-pre" data-node-id="13:4770">
                  Amount
                </p>
                <p className="font-medium leading-none not-italic relative shrink-0 text-sm text-[#171717] text-nowrap whitespace-pre" data-node-id="13:4771">
                  USD
                </p>
                <p className="font-normal leading-none not-italic relative shrink-0 text-[48px] text-[#171717] text-center w-[218px]" data-node-id="13:4772">
                  -{((paymentAmount / 100).toFixed(2).split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + (paymentAmount / 100).toFixed(2).split('.')[1])}
                </p>
                <p className="font-normal leading-4 not-italic relative shrink-0 text-[#a3a3a3] text-xs text-nowrap whitespace-pre" data-node-id="13:4773">
                  Balance Available: ${((accountBalance / 100).toFixed(2).split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + (accountBalance / 100).toFixed(2).split('.')[1])}
                </p>
                <div className="h-0 relative shrink-0 w-[384px]" data-name="Separator" data-node-id="13:4774">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <img alt="" className="block max-w-none size-full" src={imgSeparator1} />
                  </div>
                </div>
              </div>

              {/* Inputs Containers */}
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full" data-name="Inputs Containers" data-node-id="13:4776">
                {/* Company */}
                <div className="flex flex-col font-medium gap-2 items-start justify-center not-italic relative shrink-0 w-full text-sm" data-name="Content" data-node-id="13:4777">
                  <p className="h-[14px] leading-none relative shrink-0 text-[#737373] w-full" data-node-id="13:4778">
                    Company
                  </p>
                  <p className="leading-[14px] relative shrink-0 text-[#171717] w-full" data-node-id="13:4779">
                    Brex
                  </p>
                </div>

                {/* Due Date */}
                <div className="flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Payment Details" data-node-id="13:4780">
                  <div className="flex flex-col gap-2 items-start relative shrink-0 w-full" data-node-id="13:4781">
                    <div className="flex gap-2 items-center justify-center relative shrink-0 w-full" data-node-id="13:4782">
                      <p className="basis-0 font-medium grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-sm text-[#737373]" data-node-id="13:4783">
                        Due Date
                      </p>
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-sm text-[#171717] text-nowrap" data-node-id="13:4310">
                      <p className="leading-[14px] whitespace-pre">{displayDueDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button Container */}
            <div className="flex gap-2 items-center relative shrink-0 w-full" data-name="Button Container" data-node-id="13:4785">
              <button 
                className="bg-neutral-100 box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-lg shadow-sm shrink-0 hover:bg-neutral-200 transition-colors" 
                data-name="Button" 
                data-node-id="13:4786"
                onClick={onBack}
              >
                <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#171717] text-sm text-nowrap" data-node-id="13:4787">
                  <p className="leading-6 whitespace-pre">Back</p>
                </div>
              </button>
              <div className="basis-0 flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Action Buttons Container" data-node-id="13:4788">
                <button 
                  className="bg-[#ff6467] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-lg shadow-sm shrink-0 hover:bg-[#ff5255] transition-colors" 
                  data-name="Button" 
                  data-node-id="13:4789"
                  onClick={handleRejectClick}
                >
                  <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#fafafa] text-sm text-nowrap" data-node-id="13:4790">
                    <p className="leading-6 whitespace-pre">Reject</p>
                  </div>
                </button>
                <button 
                  className="bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-lg shadow-sm shrink-0 hover:bg-[#2a2a2a] transition-colors" 
                  data-name="Button" 
                  data-node-id="13:4791"
                  onClick={handleAcceptClick}
                >
                  <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#fafafa] text-sm text-nowrap" data-node-id="13:4792">
                    <p className="leading-6 whitespace-pre">Accept</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

