export default function AddFundsSuccessToast({ onClose }) {
  return (
    <div className="bg-[#f0fdf4] border border-[#b9f8cf] border-solid relative rounded-lg shadow-lg w-full" data-name="Toast" data-node-id="35:598">
      <div className="box-border flex items-center overflow-clip px-4 py-3 relative rounded-[inherit] w-full">
        <div className="flex flex-col gap-1 grow items-center justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#00a63e]" data-name="Content" data-node-id="I35:598;26:1016">
          <p className="font-medium leading-6 relative shrink-0 text-base w-full" data-node-id="I35:598;12:1822">
            Funds added successfully.
          </p>
          <p className="font-normal leading-5 opacity-90 relative shrink-0 text-sm w-full" data-node-id="I35:598;26:1035">
            The payment will be processed as scheduled.
          </p>
        </div>
      </div>
    </div>
  );
}

