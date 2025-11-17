// Format date to DD/MM/YYYY
const formatDate = (dateString) => {
  if (!dateString) return '';
  // Parse YYYY-MM-DD format directly to avoid timezone issues
  const [year, month, day] = dateString.split('-').map(Number);
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
};

export default function ScheduleWarningToast({ onClose, scheduledDate, receivingCompany }) {
  const formattedDate = formatDate(scheduledDate);
  
  return (
    <div className="bg-[#f0fdf4] border border-[#b9f8cf] border-solid relative rounded-lg shadow-lg w-full" data-name="Toast" data-node-id="39:1604">
      <div className="box-border flex items-center overflow-clip px-4 py-3 relative rounded-[inherit] w-full">
        <div className="flex flex-col gap-1 grow items-center justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#00a63e]" data-name="Content" data-node-id="I39:1604;26:1016">
          <p className="font-medium leading-6 relative shrink-0 text-base w-full" data-node-id="I39:1604;12:1822">
            <span>Payment Request for </span>
            <span className="font-bold not-italic">{receivingCompany || 'Brex'}</span>
            <span> scheduled to </span>
            <span className="font-bold not-italic">{formattedDate}</span>
          </p>
          <p className="font-normal leading-5 opacity-90 relative shrink-0 text-sm w-full" data-node-id="I39:1604;26:1035">
            This payment will only be sent if sufficient balance are available.
          </p>
        </div>
      </div>
    </div>
  );
}
