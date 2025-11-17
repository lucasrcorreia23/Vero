export default function RejectToast({ onClose }) {
  return (
    <div className="bg-white border border-[#e2e8f0] border-solid relative rounded-lg shadow-lg w-full" data-name="Toast" data-node-id="13:4238">
      <div className="box-border flex gap-2 items-center overflow-clip px-4 py-3 relative rounded-[inherit] w-full">
        <div className="basis-0 flex flex-col gap-2 grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="Text Container" data-node-id="I13:4238;12:1810">
          <p className="font-medium leading-none relative shrink-0 text-sm text-[#0a0a0a] w-full" data-node-id="I13:4238;12:1811">
            Payment request rejected successfully
          </p>
          <p className="font-normal leading-[1.2] opacity-90 relative shrink-0 text-xs text-[#737373] w-full" data-node-id="I13:4238;12:1812">
            The sender company has been notified.
          </p>
        </div>
      </div>
    </div>
  );
}
