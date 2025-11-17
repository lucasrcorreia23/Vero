export default function RejectConfirmModal({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] z-50 flex items-center justify-center" data-name="Overlay" data-node-id="13:4854">
      <div className="bg-white border border-[#cbd5e1] border-solid box-border flex flex-col gap-8 items-start p-6 rounded-xl relative w-[480px] max-w-[calc(100vw-48px)]" data-name="alter dialog" data-node-id="13:4855">
        <div className="flex flex-col gap-2 items-start justify-center not-italic relative shrink-0 w-full" data-name="Content" data-node-id="I13:4855;7:4968">
          <p className="font-medium leading-[28px] relative shrink-0 text-lg text-[#171717] w-full" data-node-id="I13:4855;7:4969">
            Are you sure you want to reject this payment?
          </p>
          <p className="font-normal leading-5 relative shrink-0 text-sm text-[#737373] w-full" data-node-id="I13:4855;7:4970">
            This action cannot be undone. Once you reject this request, the payment will be canceled and the sender will be notified.
          </p>
        </div>
        <div className="flex items-center justify-between relative shrink-0 w-full" data-name="button section" data-node-id="I13:4855;7:4971">
          <button
            onClick={onCancel}
            className="bg-[#f5f5f5] box-border flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-md shrink-0 hover:bg-[#e5e5e5] transition-colors"
            data-name="Button"
            data-node-id="I13:4855;11:702"
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#171717] text-nowrap whitespace-pre" data-node-id="I13:4855;11:702;11:643">
              Cancel
            </p>
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#ff6467] box-border flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-md shrink-0 hover:bg-[#ff5255] transition-colors"
            data-name="Button"
            data-node-id="I13:4855;11:699"
          >
            <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-[#ffffff] text-nowrap whitespace-pre" data-node-id="I13:4855;11:699;11:641">
              Reject Payment
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
