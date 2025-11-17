export default function SuccessToast({ onClose }) {
  return (
    <div className="bg-[#f0fdf4] border border-[#b9f8cf] border-solid relative rounded-lg shadow-lg w-full" data-name="Toast" data-node-id="13:3327">
      <div className="box-border flex items-center overflow-clip px-4 py-3 relative rounded-[inherit] w-full">
        <div className="flex flex-col gap-1 grow items-center justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#00a63e]" data-node-id="I13:3327;26:1016">
          <p className="font-medium leading-6 relative shrink-0 text-base text-[#00a63e] w-full" data-node-id="I13:3327;12:1822">
            Payment confirmed
          </p>
          <p className="font-normal leading-5 opacity-90 relative shrink-0 text-sm text-[#009966] w-full" data-node-id="I13:3327;26:1035">
            The receiver has been notified
          </p>
        </div>
      </div>
    </div>
  );
}
