// Icons from lucide-react (shadcn/ui compatible)
import { X, Calendar } from 'lucide-react';

import { useState } from 'react';
import AddFundsPromptModal from './AddFundsPromptModal';
import AddFundsModal from './AddFundsModal';

export default function SchedulePaymentModal({ onClose, onSchedule, receivingCompany, amount, dueDate, displayDueDate, accountBalance, paymentAmount, onAddFunds, showAddFundsModal, onCloseAddFundsModal, onAddFundsSubmit }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (e) => {
    const value = e.target.value;
    // Ensure year is 4 digits by validating the date format
    if (value) {
      const date = new Date(value);
      if (date.getFullYear().toString().length === 4) {
        setSelectedDate(value);
      }
    } else {
      setSelectedDate(value);
    }
  };

  // Get max date (due date) in YYYY-MM-DD format
  const getMaxDate = () => {
    if (!dueDate) return '';
    // If dueDate is already in YYYY-MM-DD format, return it
    if (dueDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return dueDate;
    }
    // Otherwise, try to parse it
    const date = new Date(dueDate);
    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return '';
  };

  const maxDate = getMaxDate();

  const handleSchedule = () => {
    if (selectedDate) {
      // Always schedule the payment first
      // The check for insufficient funds will happen after scheduling
      onSchedule(selectedDate);
    }
  };

  const handleAddFundsSubmit = (data) => {
    // After adding funds, schedule the payment with the selected date
    if (onAddFundsSubmit) {
      onAddFundsSubmit(data, selectedDate);
      // Close the schedule modal after adding funds
      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <>
      {/* Add Funds Modal */}
      {showAddFundsModal && (
        <AddFundsModal 
          onClose={onCloseAddFundsModal}
          onAddFunds={handleAddFundsSubmit}
          accountBalance={accountBalance}
          defaultAmount={amount?.replace('$', '').replace(/,/g, '') || '4024.92'}
          description="Adding funds ensures this payment will be sent on the scheduled date."
        />
      )}
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] z-50 flex items-center justify-center" data-name="Overlay" data-node-id="13:3487">
      <div className="bg-white border border-slate-300 border-solid box-border flex flex-col gap-10 items-start pb-6 pt-5 px-6 relative rounded-xl w-[500px]" data-name="Due Today Modal" data-node-id="13:3716">
        <div className="content-stretch flex flex-col gap-8 items-start relative shrink-0 w-full" data-node-id="13:3717">
          <div className="content-stretch flex gap-1 items-start justify-center relative shrink-0 w-full" data-name="Content" data-node-id="13:3718">
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="Title" data-node-id="13:3719">
              <p className="font-medium h-7 leading-7 relative shrink-0 text-lg text-[#171717] w-[400px]" data-node-id="13:3720">
                Schedule Payment
              </p>
              <p className="font-normal leading-5 min-w-full relative shrink-0 text-sm text-[#737373] w-[min-content]" data-node-id="13:3721">
                This payment will be scheduled for the selected date.
              </p>
            </div>
            <button onClick={onClose} className="overflow-clip relative shrink-0 w-5 h-5 hover:opacity-70 transition-opacity" data-name="icon/x" data-node-id="13:3722">
              <X className="overflow-clip relative size-full" />
            </button>
          </div>
          <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full" data-name="Infos Container" data-node-id="13:4299">
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Payment Details" data-node-id="13:4303">
              <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 w-full" data-node-id="13:4304">
                <p className="basis-0 font-medium grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-sm text-[#737373]" data-node-id="13:4305">
                  Amount
                </p>
              </div>
              <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-sm text-[#171717] text-nowrap" data-node-id="13:4306">
                <p className="leading-[14px] whitespace-pre">{amount || '$4.024,92'}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col font-medium gap-2 items-start justify-center not-italic relative shrink-0 w-full text-sm" data-name="Content" data-node-id="13:4300">
              <p className="h-[14px] leading-none relative shrink-0 text-[#737373] w-full" data-node-id="13:4301">
                Company
              </p>
              <p className="leading-[14px] relative shrink-0 text-[#171717] w-full" data-node-id="13:4302">
                {receivingCompany || 'Brex'}
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Payment Details" data-node-id="13:4307">
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-node-id="13:4595">
                <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 w-full" data-node-id="13:4308">
                  <p className="basis-0 font-medium grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-sm text-[#737373]" data-node-id="13:4309">
                    Due Date
                  </p>
                </div>
                <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-sm text-[#171717] text-nowrap" data-node-id="13:4310">
                  <p className="leading-[14px] whitespace-pre">{displayDueDate || '14 Out 2024'}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Date Picker" data-node-id="13:4321">
              <p className="font-medium h-[14px] leading-none not-italic relative shrink-0 text-sm text-[#0a0a0a] w-[416px]" data-node-id="13:4323">
                Payment Date*
              </p>
              <div className="bg-white border border-[#e5e5e5] border-solid h-9 relative rounded-md shrink-0 w-full hover:border-[#171717] transition-colors focus-within:border-[#171717] focus-within:ring-1 focus-within:ring-[#171717]" data-name="DatePickerTrigger" data-node-id="13:4324">
                <div className="box-border content-stretch flex gap-2 h-9 items-center overflow-clip px-3 py-2 relative rounded-[inherit] w-full">
                  <div className="overflow-clip relative shrink-0 size-4 text-[#737373]" data-name="Calendar Icon" data-node-id="13:4325">
                    <Calendar className="size-full" />
                  </div>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    max={maxDate}
                    min="1900-01-01"
                    className="modern-date-input basis-0 font-medium grow leading-[14px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#0a0a0a] bg-transparent border-none outline-none w-full cursor-pointer"
                    placeholder="Pick a date"
                    data-node-id="13:4326"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="button section" data-node-id="13:3750">
          <button
            onClick={onClose}
            className="bg-[#f5f5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-md shrink-0 hover:bg-[#e5e5e5] transition-colors"
            data-name="Button"
            data-node-id="13:3751"
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#171717] text-nowrap whitespace-pre" data-node-id="I13:3751;11:643">
              Cancel
            </p>
          </button>
          <button
            onClick={handleSchedule}
            disabled={!selectedDate}
            className="bg-[#171717] box-border content-stretch flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-md shrink-0 hover:bg-[#2a2a2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            data-name="Button"
            data-node-id="13:3752"
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#ffffff] text-nowrap whitespace-pre" data-node-id="I13:3752;11:641">
              Schedule Payment
            </p>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
