export default function AddFundsPromptModal({ onNotNow, onAddFunds, receivingCompany }) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] z-50 flex items-center justify-center" data-name="Overlay" data-node-id="39:1601">
      <div className="absolute bg-white border border-slate-300 border-solid box-border flex flex-col gap-8 items-center justify-center p-6 rounded-xl w-[440px]" data-name="alter dialog" data-node-id="39:1576">
        <div className="flex flex-col gap-2 items-start justify-center not-italic relative shrink-0 w-full" data-name="Content" data-node-id="I39:1576;7:4968">
          <p className="font-medium leading-7 relative shrink-0 text-lg text-[#171717] w-full" data-node-id="I39:1576;7:4969">
          Ready to fund this payment?
          </p>
          <p className="font-normal leading-5 relative shrink-0 text-sm text-[#737373] w-full" data-node-id="I39:1576;7:4970">
            Add funds now and guarantee this payment to <b>{receivingCompany || 'Brex'}</b> will be sent on the scheduled date.
          </p>
        </div>
        <div className="flex items-center justify-between relative shrink-0 w-full" data-name="button section" data-node-id="I39:1576;7:4971">
          <button 
            className="bg-[#f5f5f5] box-border flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-md shrink-0 hover:bg-[#e5e5e5] transition-colors" 
            data-name="Button" 
            data-node-id="I39:1576;11:702"
            onClick={onNotNow}
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#171717] text-nowrap whitespace-pre" data-node-id="I39:1576;11:702;11:643">
              Not Now
            </p>
          </button>
          <button 
            className="bg-[#171717] box-border flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-md shrink-0 hover:bg-[#2a2a2a] transition-colors" 
            data-name="Button" 
            data-node-id="I39:1576;11:699"
            onClick={onAddFunds}
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#ffffff] text-nowrap whitespace-pre" data-node-id="I39:1576;11:699;11:641">
              Add Funds
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

