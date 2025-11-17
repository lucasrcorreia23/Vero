// Icons from lucide-react (shadcn/ui compatible)
import { ChevronDown, X } from 'lucide-react';

import { useState, useEffect, useRef } from 'react';

export default function AddFundsModal({ onClose, onAddFunds, defaultAmount, accountBalance }) {
  const [amount, setAmount] = useState(defaultAmount || '4.024,92');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPaymentMethodDropdown, setShowPaymentMethodDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Format account balance for display with 2 decimal places (format: $1.000,00)
  const formatBalance = (balanceInCents) => {
    if (!balanceInCents) return '$0,00';
    const dollars = balanceInCents / 100;
    // Format with dots as thousands separators and comma as decimal separator
    const parts = dollars.toFixed(2).split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `$${integerPart},${parts[1]}`;
  };

  const availableBalance = formatBalance(accountBalance);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowPaymentMethodDropdown(false);
      }
    }

    if (showPaymentMethodDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPaymentMethodDropdown]);

  const paymentMethods = [
    'Bank Transfer',
    'Credit Card',
    'Debit Card',
    'Wire Transfer'
  ];

  const handleAmountChange = (e) => {
    let value = e.target.value.replace(/[^0-9.,]/g, '');
    // Remove dollar sign if present
    value = value.replace(/\$/g, '');
    setAmount(value);
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    setShowPaymentMethodDropdown(false);
  };

  const handleAddFunds = () => {
    if (amount && paymentMethod) {
      onAddFunds({ amount, paymentMethod });
    }
  };

  // Format amount for display (format: $1.000,00)
  const formatAmount = (amountString) => {
    if (!amountString) return '$0,00';
    // Remove dots and commas, then parse
    const cleanValue = amountString.replace(/[.,]/g, '');
    if (!cleanValue) return '$0,00';
    const numValue = parseFloat(cleanValue) / 100; // Assuming input is in cents format
    const parts = numValue.toFixed(2).split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `$${integerPart},${parts[1]}`;
  };

  const displayAmount = formatAmount(amount.replace(/[^0-9]/g, ''));

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] z-50 flex items-center justify-center" data-name="Overlay" data-node-id="13:4541">
      <div className="bg-white border border-slate-300 border-solid box-border flex flex-col gap-[40px] items-start pb-6 pt-5 px-6 rounded-xl relative w-[500px] max-w-[calc(100vw-48px)]" data-name="Due Today Modal" data-node-id="13:4542">
        <div className="flex flex-col gap-8 items-start relative shrink-0 w-full" data-node-id="13:4543">
          <div className="flex gap-1 items-start justify-center relative shrink-0 w-full" data-name="Content" data-node-id="13:4544">
            <div className="basis-0 flex flex-col gap-1 grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="Title" data-node-id="13:4545">
              <p className="font-medium h-7 leading-7 relative shrink-0 text-lg text-[#171717] w-[400px]" data-node-id="13:4546">
                Add Funds
              </p>
              <p className="font-normal leading-5 min-w-full relative shrink-0 text-sm text-[#737373] w-[min-content]" data-node-id="13:4547">
                Add funds to increase your available balance
              </p>
            </div>
            <button onClick={onClose} className="overflow-clip relative shrink-0 w-6 h-5 hover:opacity-70 transition-opacity" data-name="Close Button">
              <X className="overflow-clip relative size-full" />
            </button>
          </div>
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full" data-name="Infos Container" data-node-id="13:4549">
            <div className="flex flex-col gap-2 items-start justify-center relative shrink-0 w-full" data-node-id="26:578">
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Date Picker" data-node-id="13:4578">
                <div className="flex pr-1 gap-2 items-center justify-center not-italic relative shrink-0 w-full" data-node-id="26:1060">
                  <p className="basis-0 font-medium grow h-[14px] leading-none min-h-px min-w-px relative shrink-0 text-sm text-[#0a0a0a]" data-node-id="13:4579">
                    Amount
                  </p>
                  <p className="font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-xs text-[#a1a1a1] text-nowrap whitespace-pre" data-node-id="26:1061">
                    Balance Available: {availableBalance}
                  </p>
                </div>
                <div className="bg-white border border-[#e5e5e5] border-solid h-9 relative rounded-md shrink-0 w-full" data-name="DatePickerTrigger" data-node-id="13:4580">
                  <div className="box-border flex h-9 items-center justify-end overflow-clip px-3 py-2 relative rounded-[inherit] w-full">
                    <input
                      type="text"
                      value={`$${amount}`}
                      onChange={handleAmountChange}
                      className="font-medium leading-[14px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#0a0a0a] text-nowrap whitespace-pre bg-transparent border-none outline-none w-full text-right"
                      placeholder="$0,00"
                      data-node-id="13:4582"
                    />
                  </div>
                </div>
              </div>
              <p className="font-normal leading-[1.2] not-italic opacity-90 relative shrink-0 text-xs text-[#171717] text-nowrap whitespace-pre" data-node-id="26:576">
             
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Date Picker" data-node-id="13:4587">
              <p className="font-medium h-[14px] leading-none not-italic relative shrink-0 text-sm text-[#0a0a0a] w-full" data-node-id="13:4588">
                Payment Method
              </p>
              <div className="relative w-full" ref={dropdownRef}>
                <div 
                  className="bg-white border border-[#e5e5e5] border-solid h-9 relative rounded-md shrink-0 w-full cursor-pointer"
                  data-name="DatePickerTrigger"
                  data-node-id="13:4589"
                  onClick={() => setShowPaymentMethodDropdown(!showPaymentMethodDropdown)}
                >
                  <div className="box-border flex h-9 items-center justify-between overflow-clip px-3 py-2 relative rounded-[inherit] w-full">
                    <p className="font-medium leading-[14px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#737373] text-nowrap whitespace-pre">
                      {paymentMethod || 'Select a method'}
                    </p>
                    <ChevronDown className="overflow-clip relative shrink-0 size-6" />
                  </div>
                </div>
                {showPaymentMethodDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e5e5e5] border-solid rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                    {paymentMethods.map((method) => (
                      <div
                        key={method}
                        onClick={() => handlePaymentMethodSelect(method)}
                        className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm text-[#0a0a0a]"
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between relative shrink-0 w-full" data-name="button section" data-node-id="13:4569">
          <button
            onClick={onClose}
            className="bg-[#f5f5f5] box-border flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-[6px] shrink-0 hover:bg-[#e5e5e5] transition-colors"
            data-name="Button"
            data-node-id="13:4570"
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#171717] text-nowrap whitespace-pre" data-node-id="I13:4570;11:643">
              Cancel
            </p>
          </button>
          <button
            onClick={handleAddFunds}
            disabled={!amount || !paymentMethod}
            className="bg-[#171717] box-border flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-[6px] shrink-0 hover:bg-[#2a2a2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            data-name="Button"
            data-node-id="13:4571"
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#ffffff] text-nowrap whitespace-pre" data-node-id="I13:4571;11:641">
              Add Funds
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
