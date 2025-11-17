export default function AddFundsConfirmModal({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] z-50 flex items-center justify-center" data-name="Overlay" data-node-id="13:4722">
      <div className="absolute bg-white border border-slate-300 border-solid box-border flex flex-col gap-8 items-start left-1/2 p-6 rounded-xl top-1/2 translate-x-[-50%] translate-y-[-50%] w-[440px]" data-name="alter dialog" data-node-id="13:4723">
        <div className="flex flex-col gap-2 items-start justify-center not-italic relative shrink-0 w-full" data-name="Content" data-node-id="I13:4723;7:4968">
          <p className="font-medium leading-7 relative shrink-0 text-lg text-[#171717] w-full" data-node-id="I13:4723;7:4969">
            Add funds now?
          </p>
          <p className="font-normal leading-5 relative shrink-0 text-sm text-[#737373] w-full" data-node-id="I13:4723;7:4970">
            Adding funds ensures this payment will be sent on the scheduled date.
          </p>
        </div>
        <div className="flex items-center justify-between relative shrink-0 w-full" data-name="button section" data-node-id="I13:4723;7:4971">
          <button 
            className="bg-[#f5f5f5] box-border flex gap-2.5 items-center justify-center px-4 py-2 relative rounded-md shrink-0 hover:bg-[#e5e5e5] transition-colors" 
            data-name="Button" 
            data-node-id="I13:4723;11:702"
            onClick={onCancel}
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#171717] text-nowrap whitespace-pre" data-node-id="I13:4723;11:702;11:643">
              Cancel
            </p>
          </button>
          <button 
            className="bg-[#171717] box-border flex gap-2.5 items-center justify-center px-4 py-2 relative rounded-md shrink-0 hover:bg-[#2a2a2a] transition-colors" 
            data-name="Button" 
            data-node-id="I13:4723;11:699"
            onClick={onConfirm}
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#ffffff] text-nowrap whitespace-pre" data-node-id="I13:4723;11:699;11:641">
              Add Funds
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

