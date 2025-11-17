// Icons from lucide-react (shadcn/ui compatible)
import { MoreVertical } from 'lucide-react';

export default function EllipsisButton({ onClick }) {
  return (
    <button 
      className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 size-9 hover:bg-gray-50 transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="relative shrink-0 size-4" data-name="Icon / EllipsisVertical">
        <MoreVertical className="size-full" />
      </div>
    </button>
  );
}

