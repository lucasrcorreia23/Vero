export default function RejectSuccessToast({ onClose }) {
  return (
    <div className="bg-[#fef2f2] border border-[#ffc9c9] border-solid relative rounded-lg shadow-lg w-full" data-name="Toast" data-node-id="13:4238">
      <div className="box-border flex items-center overflow-clip px-4 py-3 relative rounded-[inherit] w-full">
        <div className="flex flex-col gap-1 grow items-center justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#ff6467]" data-name="Content" data-node-id="I13:4238;39:1159">
          <p className="font-medium leading-6 relative shrink-0 text-base w-full" data-node-id="I13:4238;12:1852">
            Payment request rejected
          </p>
          <p className="font-normal leading-5 opacity-90 relative shrink-0 text-sm w-full" data-node-id="I13:4238;39:1168">
            The sender company has been notified.
          </p>
        </div>
      </div>
    </div>
  );
}

